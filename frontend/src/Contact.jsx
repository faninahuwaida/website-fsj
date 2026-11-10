import { useEffect, useRef, useState } from 'react'
import './Contact.css'

import imgHero from './assets/contact-hero.png'
import imgHeroDecoLeft from './assets/community-hero-deco-left.png';
import imgHeroDecoRight from './assets/community-hero-deco-right.png';
import iconInstagram from './assets/instagram.png'
import iconTikTok from './assets/tiktok.png'
import iconLinkedIn from './assets/linkedin.png'


/* ========================================================= */
/* CONFIG                                                    */
/* ========================================================= */

// Isi dengan URL backend / Formspree / Google Apps Script.
// Kalau kosong, form hanya mensimulasikan pengiriman (untuk testing tampilan).
const FORM_ENDPOINT = ''

const ALLOWED_EXT = ['pdf', 'doc', 'docx', 'ppt', 'pptx']
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB

/* ========================================================= */
/* ICONS (inline SVG, tidak perlu file gambar)               */
/* ========================================================= */
const line = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line}>
      <path d="M9 3.5a5.5 5.5 0 0 0-4.7 8.3l-.8 2.7 2.9-.8A5.5 5.5 0 1 0 9 3.5z" />
      <path d="M12.4 9.3a5.5 5.5 0 0 1 7.1 7.8l.9 2.4-2.9-.8a5.5 5.5 0 0 1-6.4-1" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconTelephone() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M2.5 9.2C2.5 6.800 6.800 5 12 5s9.500 1.800 9.500 4.200v1.800l-4.200 1v-1.300c-1.500-.5-3.200-.7-5.300-.7s-3.800.2-5.300.7V12l-4.200-1z" />
      <path d="M7.200 13.500h9.600l3.700 7H3.500z" />
      <g fill="#fee5ae">
        <circle cx="9.800" cy="16" r="1" />
        <circle cx="12" cy="16" r="1" />
        <circle cx="14.200" cy="16" r="1" />
        <circle cx="9.200" cy="18.400" r="1" />
        <circle cx="12" cy="18.400" r="1" />
        <circle cx="14.800" cy="18.400" r="1" />
      </g>
    </svg>
  )
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line}>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  )
}

function IconPlane() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line}>
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  )
}

function IconInfo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  )
}

function IconUpload() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M17 8l-5-5-5 5" />
      <path d="M12 3v12" />
    </svg>
  )
}

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...line} strokeWidth={2}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

/* ========================================================= */
/* DATA                                                      */
/* ========================================================= */

const contactItems = [
  { key: 'phone', label: 'Phone', value: '082220019551', href: 'tel:082220019551', Icon: IconPhone },
  { key: 'telephone', label: 'Telephone', value: '082220019551', href: 'tel:024123456790', Icon: IconTelephone },
  { key: 'email', label: 'Email', value: 'firststepjourney12@gmail.com', href: 'mailto:firststepjourney12@gmail.com', Icon: IconMail },
]

const socials = [
  { name: 'Instagram', href: 'https://instagram.com/firststep_journey', Icon: () => <img src={iconInstagram} alt="Instagram" /> },
  { name: 'TikTok', href: 'https://tiktok.com/@firststep_journey', Icon: () => <img src={iconTikTok} alt="TikTok" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/firststep-journey', Icon: () => <img src={iconLinkedIn} alt="LinkedIn" /> },
]

const initialForm = { name: '', email: '', phone: '', message: '' }

const statusText = {
  idle: 'Our team will get back to you shortly.',
  sending: 'Sending your message...',
  sent: 'Thank you! Your message has been sent.',
  error: 'Something went wrong. Please try again.',
}

/* ========================================================= */
/* HELPERS                                                   */
/* ========================================================= */

// Munculkan elemen (animasi) saat masuk layar
function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your full name.'
  if (!form.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Email format is not valid.'
  const digits = form.phone.replace(/\D/g, '')
  if (!form.phone.trim()) errors.phone = 'Please enter your WhatsApp number.'
  else if (digits.length < 9 || digits.length > 15) errors.phone = 'WhatsApp number is not valid.'
  if (!form.message.trim()) errors.message = 'Please type your message or inquiry.'
  return errors
}

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}


/* ========================================================= */
/* PAGE                                                      */
/* ========================================================= */
export default function Contact() {
  const [gridRef, gridVisible] = useReveal()

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [file, setFile] = useState(null)
  const [dragging, setDragging] = useState(false)
  const [status, setStatus] = useState('idle')
  const fileInputRef = useRef(null)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (status === 'sent' || status === 'error') setStatus('idle')
  }

  function pickFile(selected) {
    if (!selected) return
    const ext = selected.name.split('.').pop().toLowerCase()
    if (!ALLOWED_EXT.includes(ext)) {
      setErrors((prev) => ({ ...prev, file: 'File must be PDF, DOC, DOCX, PPT, or PPTX.' }))
      return
    }
    if (selected.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({ ...prev, file: 'File is larger than 10 MB.' }))
      return
    }
    setErrors((prev) => ({ ...prev, file: undefined }))
    setFile(selected)
  }

  function handleDrop(e) {
    e.preventDefault()
    setDragging(false)
    pickFile(e.dataTransfer.files?.[0])
  }

  function removeFile(e) {
    e.stopPropagation()
    setFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const found = validate(form)
    setErrors((prev) => ({ file: prev.file, ...found }))
    if (Object.keys(found).length) return

    setStatus('sending')
    try {
      if (FORM_ENDPOINT) {
        const body = new FormData()
        Object.entries(form).forEach(([key, value]) => body.append(key, value))
        if (file) body.append('proposal', file)
        const res = await fetch(FORM_ENDPOINT, { method: 'POST', body })
        if (!res.ok) throw new Error('Request failed')
      } else {
        await new Promise((resolve) => setTimeout(resolve, 900))
      }
      setStatus('sent')
      setForm(initialForm)
      setFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="ct-page">

      {/* 1. HERO */}
      <section className="ct-hero">
        <img className="ct-hero-bg" src={imgHero} alt="" />
        <img className="ct-hero-deco ct-hero-deco-left" src={imgHeroDecoLeft} alt="" />
        <img className="ct-hero-deco ct-hero-deco-right" src={imgHeroDecoRight} alt="" />

        <div className="ct-hero-content">
          <div className="ct-hero-tag">
            <span className="ct-hero-line" />
            <span>CONTACT US</span>
            <span className="ct-hero-line" />
          </div>
          <h1>
            Let’s Take the
            <span>First Step Together</span>
          </h1>
          <p>
            Have questions about our programs, partnerships, or how to get involved? Reach out to us
            — we&apos;re here to help and ready to collaborate.
          </p>
          <nav className="ct-breadcrumb" aria-label="Breadcrumb">
            <span>Home</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 5l7 7-7 7" stroke="#fff" strokeWidth="3.200" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="current">Contact</span>
          </nav>
        </div>
      </section>

      {/* 2. CONTACT CARDS */}
      <section className="ct-section">
        <div ref={gridRef} className={`ct-grid${gridVisible ? ' is-visible' : ''}`}>
          {/* ---- GET IN TOUCH ---- */}
          <article className="ct-card ct-card-info" style={{ '--delay': '0ms' }}>
            <div className="ct-icon-circle ct-icon-big">
              <IconChat />
            </div>

            <h2 className="ct-title">Get in Touch</h2>

            <p className="ct-lead">
              We’d love to hear from you! Whether you have questions about our programs, want to
              collaborate, or are interested in community initiatives, feel free reach out.
              <br />
              Our team is here to support you on your journey.
            </p>

            <hr className="ct-divider" />

            <ul className="ct-contact-list">
              {contactItems.map(({ key, label, value, href, Icon }) => (
                <li key={key}>
                  <a href={href} className="ct-contact-item">
                    <span className="ct-icon-circle ct-icon-small">
                      <Icon />
                    </span>
                    <span className="ct-contact-text">
                      <span className="ct-contact-label">{label}</span>
                      <span className="ct-contact-value">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <hr className="ct-divider" />

            <div className="ct-follow">
              <p className="ct-contact-label">Follow Us</p>
              <ul className="ct-social-list">
                {socials.map(({ name, href, Icon }) => (
                  <li key={name}>
                    <a href={href} className="ct-social-link">
                      <span className="ct-social-icon">
                        <Icon />
                      </span>
                      <span>{name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* ---- QUICK MESSAGE FORM ---- */}
          <article className="ct-card ct-card-form" style={{ '--delay': '150ms' }}>
            <div className="ct-icon-circle ct-icon-big">
              <IconPlane />
            </div>

            <h2 className="ct-title">Quick Message Form</h2>

            <p className="ct-lead">
              Fill out the form below with your inquiries, and our team will get back to you shortly.
            </p>

            <form className="ct-form" onSubmit={handleSubmit} noValidate>
              <div className="ct-field">
                <input
                  className={`ct-input${errors.name ? ' invalid' : ''}`}
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  aria-label="Full Name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="ct-error">{errors.name}</span>}
              </div>

              <div className="ct-field">
                <input
                  className={`ct-input${errors.email ? ' invalid' : ''}`}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="ct-error">{errors.email}</span>}
              </div>

              <div className="ct-field">
                <input
                  className={`ct-input${errors.phone ? ' invalid' : ''}`}
                  type="tel"
                  name="phone"
                  placeholder="WhatsApp Number"
                  aria-label="WhatsApp Number"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="ct-error">{errors.phone}</span>}
              </div>

              <div className="ct-field">
                <textarea
                  className={`ct-input ct-textarea${errors.message ? ' invalid' : ''}`}
                  name="message"
                  placeholder="Type your message or inquiry here..."
                  aria-label="Message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="ct-error">{errors.message}</span>}
              </div>

              <div className="ct-field">
                <div
                  className={`ct-dropzone${dragging ? ' dragging' : ''}${file ? ' has-file' : ''}${errors.file ? ' invalid' : ''}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => fileInputRef.current?.click()}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      fileInputRef.current?.click()
                    }
                  }}
                  onDragOver={(e) => {
                    e.preventDefault()
                    setDragging(true)
                  }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={handleDrop}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    hidden
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                    onChange={(e) => pickFile(e.target.files?.[0])}
                  />

                  <span className="ct-dropzone-icon">
                    <IconUpload />
                  </span>
                  <p className="ct-dropzone-title">Upload Your Proposal (Optional)</p>

                  {file ? (
                    <p className="ct-dropzone-file">
                      <span>{file.name}</span>
                      <em>{formatSize(file.size)}</em>
                      <button type="button" onClick={removeFile} aria-label="Remove file">
                        ×
                      </button>
                    </p>
                  ) : (
                    <p className="ct-dropzone-text">
                      Drag and drop your file here, or <span>click to browse</span>
                    </p>
                  )}

                  <p className="ct-dropzone-hint">Supported file : PDF, DOC, DOCX, PPT, PPTX (Max. 10 MB)</p>
                </div>
                {errors.file && <span className="ct-error">{errors.file}</span>}
              </div>

              <button type="submit" className="ct-btn-send" disabled={status === 'sending'}>
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                <span className="ct-btn-icon">
                  <IconPlane />
                </span>
              </button>
            </form>

            <p className={`ct-note ${status}`} role="status">
              <span className="ct-note-icon">
                <IconInfo />
              </span>
              <span>{statusText[status]}</span>
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
