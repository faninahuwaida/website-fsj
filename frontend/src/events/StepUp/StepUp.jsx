import { useEffect } from "react";
import "./StepUp.css";

import stepUpHero from "../../assets/events/step-up/stepup-hero.png";
import stepUpMain from "../../assets/events/step-up/stepup-main.png";
import stepUpClassroom from "../../assets/events/step-up/stepup-classroom.png";

function StepUp() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".stepup-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="stepup-page">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        className="stepup-hero"
        style={{
          backgroundImage: `url(${stepUpHero})`,
        }}
      >
        <div className="stepup-hero-overlay">
          <div className="stepup-hero-content">
            <h1>FSJ Step Up College</h1>

            <p>Discover Yourself. Plan Your Future</p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN
      ====================================================== */}
      <main className="stepup-main">
        {/* LEFT ARTICLE */}
        <article className="stepup-content">
          {/* =================================================
              SECTION 1
          ================================================== */}
          <section className="stepup-section stepup-reveal" id="finding-path">
            <h2>
              Membantu Siswa Menemukan Peta Jalannya
              <br />
              Sendiri
            </h2>

            <div className="stepup-intro-row">
              <div className="stepup-intro-text">
                <p>
                  Langkah pertama setelah lulus sekolah sering kali menjadi fase
                  yang membingungkan. Tanpa pemahaman yang cukup tentang minat
                  pribadi dan realita dunia kerja, siswa rentan mengambil
                  keputusan yang tidak sejalan dengan potensi mereka yang
                  sebenarnya.
                </p>

                <p>
                  StepUp to College hadir bukan untuk mendikte pilihan atau
                  sekadar memberikan motivasi satu arah. Program ini dirancang
                  sebagai ruang diskusi dan refleksi untuk mendampingi siswa SMA
                  dan SMK.
                </p>
              </div>

              <div className="stepup-intro-image">
                <img src={stepUpMain} alt="FSJ Step Up College" />
              </div>
            </div>
          </section>

          {/* =================================================
              SECTION 2
          ================================================== */}
          <section className="stepup-section stepup-reveal" id="learning-focus">
            <h3>Apa yang Menjadi Fokus Pembelajaran?</h3>

            <p>
              Program ini berfokus pada kesiapan mental dan strategis siswa
              melalui beberapa tujuan utama:
            </p>

            <ul className="stepup-focus-list">
              <li>
                <strong>Evaluasi Diri & Analisis SWOT:</strong> Membekali
                kemampuan dasar bagi siswa untuk memetakan kekuatan dan
                kelemahan pribadi mereka.
              </li>

              <li>
                <strong>High-Performance Mindset:</strong> Menanamkan pola pikir
                untuk membangun tingkat kepercayaan diri dan produktivitas
                harian.
              </li>

              <li>
                <strong>Navigasi Pemilihan Jurusan:</strong> Memberikan panduan
                untuk memilih jalur studi yang sesuai dengan minat dan kekuatan
                bawaan.
              </li>

              <li>
                <strong>Adaptasi Gaya Belajar:</strong> Memperkuat pemahaman
                tentang growth mindset sebagai bekal menghadapi dinamika
                tantangan masa depan.
              </li>
            </ul>
          </section>

          {/* =================================================
    SECTION 3
================================================== */}
          <section
            className="stepup-section stepup-reveal"
            id="interactive-learning"
          >
            <h3>Ruang Belajar yang Interaktif dan Dua Arah</h3>

            {/* INTRO DI ATAS GAMBAR */}
            <p className="stepup-activity-intro">
              Setiap sesi dirancang agar siswa tidak hanya duduk dan
              mendengarkan, melainkan ikut berpartisipasi aktif dalam merancang
              masa depan mereka:
            </p>

            {/* GAMBAR KIRI + POINT KANAN */}
            <div className="stepup-media-row">
              <div className="stepup-media-image">
                <img
                  src={stepUpClassroom}
                  alt="Interactive Step Up College session"
                />
              </div>

              <div className="stepup-media-content">
                <ul className="stepup-activity-list">
                  <li>
                    🤝 <strong>Ice Breaking (Catch Me):</strong> Permainan
                    interaktif untuk mencairkan suasana dan membangun fokus
                    siswa sejak sesi dimulai.
                  </li>

                  <li>
                    🧑‍💻 <strong>Dreamboard & Self-Discovery:</strong> Sesi
                    pemetaan impian dan pengenalan potensi diri secara mandiri.
                  </li>

                  <li>
                    📘{" "}
                    <strong>Career Reality & What the Industry Needs:</strong>{" "}
                    Diskusi terbuka mengenai realita dunia kerja dan kompetensi
                    yang sungguh-sungguh dicari oleh industri saat ini.
                  </li>

                  <li>
                    🧭 <strong>Career Navigation:</strong> Simulasi dan
                    penyusunan strategi berkelanjutan studi untuk menjembatani
                    fase sekolah menuju dunia profesional.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* =================================================
              SECTION 4
          ================================================== */}
          <section
            className="stepup-section stepup-section--last stepup-reveal"
            id="program-journey"
          >
            <h3>Jejak Langkah Program Kami</h3>

            <p>
              Hingga saat ini, pendekatan interaktif dan metode "jemput bola"
              yang diterapkan fasilitator kami telah berhasil merangkul
              antusiasme siswa di berbagai sekolah:
            </p>

            <ul className="stepup-school-list">
              <li>
                📍 SMK N 7 Semarang: Melibatkan 288 peserta, di mana pendekatan
                proaktif dari fasilitator lapangan berhasil menjaga fokus dan
                semangat siswa hingga akhir sesi.
              </li>

              <li>
                📍 SMK Nusa Bhakti Semarang: Berjalan lancar bersama 43 peserta
                dengan dukungan penuh dari guru pendamping yang sangat
                kooperatif.
              </li>

              <li>
                📍 SMK Islamic Centre Baiturrahman: Menghadirkan sesi diskusi
                dan tanya jawab dua arah yang hidup bersama 38 peserta.
              </li>

              <li>
                📍 SMA Negeri 15 Semarang: Menjadi titik eksekusi program
                mentoring dan bootcamp untuk persiapan kehidupan universitas.
              </li>
            </ul>
          </section>
        </article>

        {/* =====================================================
            SIDEBAR
        ====================================================== */}
        <aside className="stepup-sidebar">
          <div className="stepup-sidebar-inner">
            <h3>ON THIS PAGE</h3>

            <nav className="stepup-toc">
              <a href="#finding-path">
                Membantu Siswa Menemukan Peta Jalannya Sendiri
              </a>

              <a href="#learning-focus">Apa yang Menjadi Fokus Pembelajaran?</a>

              <a href="#interactive-learning">
                Ruang Belajar yang Interaktif dan Dua Arah
              </a>

              <a href="#program-journey">Jejak Langkah Program Kami</a>
            </nav>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default StepUp;
