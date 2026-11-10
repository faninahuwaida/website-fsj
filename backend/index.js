
// =======================================================
// FSJ BACKEND - CONTACT MESSAGE API
// Node.js + Express + Nodemailer
// =======================================================

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');

const app = express();

const PORT = process.env.PORT || 5000;


// =======================================================
// 1. MIDDLEWARE
// =======================================================

const allowedOrigins = (
  process.env.FRONTEND_ORIGIN || 'http://localhost:5173'
)
  .split(',')
  .map(origin => origin.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // Request tanpa Origin, misalnya dari tool testing,
      // diperbolehkan.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error('Origin tidak diizinkan oleh CORS'));
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  })
);

app.use(express.json({ limit: '10kb' }));


// =======================================================
// 2. KONFIGURASI EMAIL
// =======================================================

const emailConfigured = Boolean(
  process.env.SMTP_HOST &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS &&
  process.env.CONTACT_RECEIVER
);

const transporter = emailConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })
  : null;

  
const path = require('path');

const storage = multer.memoryStorage();

const upload = multer({
  storage,
    limits: {
      fileSize: 10 * 1024 * 1024, // Maksimal 10 MB
      files: 1
    },
    fileFilter: (req, file, callback) => {
      const allowedExtensions = [
        '.pdf',
        '.doc',
        '.docx',
        '.ppt',
        '.pptx'
      ];

    const extension = path.extname(file.originalname).toLowerCase();

    if (allowedExtensions.includes(extension)) {
      callback(null, true);
    } else {
      callback(new Error(
        'Format file harus PDF, DOC, DOCX, PPT, atau PPTX.'
      ));
    }
  }
});


// =======================================================
// 3. HELPER UNTUK MEMBERSIHKAN HTML
// =======================================================

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };

    return entities[character];
  });
}


// =======================================================
// 4. ROOT ENDPOINT - CEK SERVER
// =======================================================

app.get('/', (req, res) => {
  res.status(200).send('API NGO FSJ Berjalan!');
});


// =======================================================
// 5. CONTACT MESSAGE API
// POST /api/contact
// =======================================================

app.post('/api/contact', upload.single('proposal'), async (req, res) => {
  try {
    // Pastikan request berbentuk object JSON
    const body =
      req.body && typeof req.body === 'object'
        ? req.body
        : {};

    const {
      name,
      email,
      subject,
      message,
      website
    } = body;


    // ---------------------------------------------------
    // A. ANTI-SPAM HONEYPOT
    // ---------------------------------------------------

    // Field website seharusnya kosong.
    // Jika diisi bot, request tidak akan diteruskan.
    if (typeof website === 'string' && website.trim() !== '') {
      return res.status(200).json({
        success: true,
        message: 'Pesan berhasil dikirim.'
      });
    }


    // ---------------------------------------------------
    // B. VALIDASI INPUT
    // ---------------------------------------------------

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof subject !== 'string' ||
      typeof message !== 'string'
    ) {
      return res.status(400).json({
        success: false,
        message: 'Format data tidak valid.'
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    if (
      !cleanName ||
      !cleanEmail ||
      !cleanSubject ||
      !cleanMessage
    ) {
      return res.status(400).json({
        success: false,
        message: 'Semua field wajib diisi.'
      });
    }

    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanSubject.length > 150 ||
      cleanMessage.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: 'Ada field yang melebihi batas karakter.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Format email tidak valid.'
      });
    }

    if (/[\r\n]/.test(cleanSubject)) {
      return res.status(400).json({
        success: false,
        message: 'Subject tidak valid.'
      });
    }


    // ---------------------------------------------------
    // C. CEK KONFIGURASI EMAIL
    // ---------------------------------------------------

    if (!transporter) {
      console.error('Konfigurasi SMTP belum lengkap.');

      return res.status(503).json({
        success: false,
        message: 'Layanan email belum dikonfigurasi.'
      });
    }


    // ---------------------------------------------------
    // D. SIAPKAN ISI EMAIL
    // ---------------------------------------------------

    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeSubject = escapeHtml(cleanSubject);
    const safeMessage = escapeHtml(cleanMessage)
      .replace(/\r?\n/g, '<br>');


    // ---------------------------------------------------
    // E. KIRIM EMAIL KE ADMIN FSJ
    // ---------------------------------------------------

    const mailOptions = {
      from: `"FSJ Website Contact" <${process.env.SMTP_USER}>`,

      to: process.env.CONTACT_RECEIVER,

      // Admin dapat membalas langsung ke pengirim pesan.
      replyTo: {
        name: cleanName,
        address: cleanEmail
      },

      subject: `Pesan Baru Website FSJ: ${cleanSubject}`,

      text: `
Pesan baru dari Contact Form website FSJ.

Nama: ${cleanName}
Email: ${cleanEmail}
Subject: ${cleanSubject}

Pesan:
${cleanMessage}
      `,

      html: `
        <div style="font-family: Arial, sans-serif; color: #222;">
          <h2>Pesan Baru dari Website FSJ</h2>

          <hr />

          <p><strong>Nama:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>

          <h3>Isi Pesan:</h3>

          <p style="line-height: 1.6;">
            ${safeMessage}
          </p>

          <hr />

          <p style="color: #777; font-size: 12px;">
            Email ini dikirim melalui Quick Message Form
            website First Step Journey.
          </p>
        </div>
      `,
      attachments: req.file
        ? [
            {
              filename: req.file.originalname,
              content: req.file.buffer,
              contentType: req.file.mimetype
            }
          ]
        : []
    };


    // ---------------------------------------------------
    // F. EKSEKUSI PENGIRIMAN
    // ---------------------------------------------------

    const info = await transporter.sendMail(mailOptions);

    console.log('Contact email berhasil dikirim:', info.messageId);

    return res.status(200).json({
      success: true,
      message: 'Pesan berhasil dikirim! Terima kasih sudah menghubungi FSJ.'
    });

  } catch (error) {
    console.error('Gagal mengirim contact email:', error);

    return res.status(500).json({
      success: false,
      message: 'Pesan gagal dikirim. Silakan coba kembali.'
    });
  }
});


// =======================================================
// 6. ERROR HANDLER
// =======================================================

app.use((error, req, res, next) => {
  console.error('Backend error:', error.message);

  if (error.type === 'entity.parse.failed') {
    return res.status(400).json({
      success: false,
      message: 'Format JSON tidak valid.'
    });
  }

  if (error.message === 'Origin tidak diizinkan oleh CORS') {
    return res.status(403).json({
      success: false,
      message: 'Origin tidak diizinkan.'
    });
  }

  return res.status(500).json({
    success: false,
    message: 'Terjadi kesalahan pada server.'
  });
});


// =======================================================
// 7. RUN SERVER
// =======================================================


app.listen(PORT, () => {
  console.log(`FSJ Backend running on http://localhost:${PORT}`);

  if (!emailConfigured) {
    console.warn('PERINGATAN: Konfigurasi SMTP belum lengkap.');
  } else {
    console.log('Konfigurasi SMTP sudah tersedia.');
  }
});

