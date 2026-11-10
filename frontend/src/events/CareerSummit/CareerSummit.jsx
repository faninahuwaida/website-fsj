import { useEffect } from "react";
import "./CareerSummit.css";

import careerHero from "../../assets/events/career-summit/career-hero.png";
import careerMain from "../../assets/events/career-summit/career-main.png";
import cvScreening from "../../assets/events/career-summit/cv-screening.png";

function CareerSummit() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".career-reveal");

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
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="career-page">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        className="career-hero"
        style={{
          backgroundImage: `url(${careerHero})`,
        }}
      >
        <div className="career-hero-overlay">
          <div className="career-hero-content">
            <h1>Bank Mandiri x FSJ Career Summit</h1>

            <p>
              Connecting Future Talents with Industry Insights and Career
              <br />
              Opportunities
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <main className="career-main">
        {/* LEFT */}
        <article className="career-content">
          {/* SECTION 1 */}
          <section
            className="career-section career-reveal"
            id="career-readiness"
          >
            <h2>
              Building Career Readiness Through Industry
              <br />
              Insights and Professional Experiences
            </h2>

            <p>
              Memulai perjalanan karier membutuhkan lebih dari sekadar
              kemampuan akademik. Dibutuhkan pemahaman mengenai dunia
              profesional, kesiapan menghadapi proses rekrutmen, serta strategi
              untuk mengembangkan potensi diri sejak dini.
            </p>

            <p>
              Pada 30 Mei 2026, First Step Journey berkolaborasi bersama Bank
              Mandiri telah menyelenggarakan Bank Mandiri x FSJ Career Summit
              yang bertempat di Dekanat Lt. 5, Fakultas Teknik Universitas
              Diponegoro.
            </p>

            <p>
              Menghadirkan para profesional dari Bank Mandiri, kegiatan ini
              menjadi ruang bagi mahasiswa, fresh graduates, dan early career
              professionals untuk mendapatkan gambaran lebih dekat mengenai
              perjalanan karier di industri perbankan, mulai dari persiapan
              memasuki dunia kerja hingga strategi pengembangan karier.
            </p>
          </section>

          {/* MAIN IMAGE */}
          <div className="career-main-image career-reveal">
            <img
              src={careerMain}
              alt="Bank Mandiri x FSJ Career Summit"
            />
          </div>

          {/* SECTION 2 */}
          <section
            className="career-section career-reveal"
            id="career-insights"
          >
            <h3>3 Insight Utama Career Summit</h3>

            <ul className="career-insight-list">
              <li>
                <span>🎯</span>

                <p>
                  <strong>Career Preparation:</strong> Peserta mendapatkan
                  pemahaman mengenai pentingnya mempersiapkan diri sebelum
                  memasuki dunia profesional, termasuk penyusunan CV, proses
                  seleksi, dan pengembangan kompetensi.
                </p>
              </li>

              <li>
                <span>💼</span>

                <p>
                  <strong>Industry Exposure:</strong> Melalui pengalaman
                  langsung dari profesional Bank Mandiri, peserta memperoleh
                  insight mengenai budaya kerja, tantangan industri, serta
                  kemampuan yang dibutuhkan untuk berkembang di lingkungan
                  profesional.
                </p>
              </li>

              <li>
                <span>🚀</span>

                <p>
                  <strong>Career Development:</strong> Sesi ini mendorong
                  peserta untuk membangun growth mindset, memperluas wawasan,
                  dan mulai merancang langkah karier secara lebih terarah.
                </p>
              </li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section
            className="career-section career-reveal"
            id="cv-screening"
          >
            <h3>Exclusive CV Screening Opportunity</h3>

            <div className="career-media-row">
              <div className="career-media-image">
                <img
                  src={cvScreening}
                  alt="Exclusive CV Screening Bank Mandiri"
                />
              </div>

              <div className="career-media-text">
                <p>
                  Salah satu sesi yang menjadi highlight dalam kegiatan ini
                  adalah Direct CV Screening by Bank Mandiri, di mana peserta
                  memperoleh kesempatan mendapatkan masukan terkait kesiapan CV
                  dan hal-hal yang perlu diperhatikan dalam menghadapi proses
                  rekrutmen.
                </p>

                <p>
                  Melalui sesi ini, peserta dapat memahami bagaimana
                  mempersiapkan dokumen karier yang lebih relevan serta
                  meningkatkan peluang dalam menghadapi dunia kerja.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section
            className="career-section career-section--last career-reveal"
            id="future-career"
          >
            <h3>Taking The First Step Towards Future Career</h3>

            <p>
              Melalui Bank Mandiri x FSJ Career Summit, First Step Journey
              berupaya menghadirkan ruang pembelajaran yang menghubungkan
              mahasiswa dengan pengalaman nyata dari dunia profesional.
              Kegiatan ini menjadi pengingat bahwa membangun karier bukan hanya
              tentang mencari kesempatan, tetapi juga tentang mempersiapkan
              diri agar mampu mengambil setiap peluang yang datang.
            </p>
          </section>
        </article>

        {/* =====================================================
            RIGHT SIDEBAR
        ====================================================== */}
        <aside className="career-sidebar">
          <div className="career-sidebar-inner">
            <h3>ON THIS PAGE</h3>

            <nav className="career-toc">
              <a href="#career-readiness">
                Building Career Readiness Through Industry Insights and
                Professional Experiences
              </a>

              <a href="#career-insights">
                3 Insight Utama Career Summit
              </a>

              <a href="#cv-screening">
                Exclusive CV Screening Opportunity
              </a>

              <a href="#future-career">
                Taking The First Step Towards Future Career
              </a>
            </nav>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default CareerSummit;