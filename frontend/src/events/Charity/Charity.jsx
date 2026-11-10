import { useEffect } from "react";
import "./Charity.css";

import charityHero from "../../assets/events/charity/charity-hero.png";
import iftarMain from "../../assets/events/charity/iftar-main.png";
import iftarZoom from "../../assets/events/charity/iftar-zoom.png";
import gandenganImage from "../../assets/events/charity/gandengan.png";

function Charity() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

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
    <div className="charity-page">
      {/* ========================================
          HERO
      ======================================== */}
      <section
        className="charity-hero"
        style={{
          backgroundImage: `url(${charityHero})`,
        }}
      >
        <div className="charity-hero-overlay">
          <div className="charity-hero-content">
            <h1>FSJ Charity: Ramadan Connect</h1>

            <p>Simple Moments, Stronger Bonds</p>
          </div>
        </div>
      </section>

      {/* ========================================
          MAIN CONTENT
      ======================================== */}
      <main className="charity-main">
        {/* ========================================
            LEFT CONTENT
        ======================================== */}
        <article className="charity-content">
          {/* SECTION 1 */}
          <section
            className="charity-section reveal"
            id="meaningful-connections"
          >
            <h2>
              Building Meaningful Connections Through
              <br />
              Sharing, Caring, and Giving Back
            </h2>

            <p>
              Bulan Ramadan menjadi momen yang tepat untuk memperkuat rasa
              kepedulian, berbagi kebahagiaan, dan membangun hubungan yang lebih
              bermakna dengan sesama.
            </p>

            <p>
              Melalui FSJ Charity, First Step Journey menghadirkan rangkaian
              kegiatan sosial dengan tema “Ramadan Connect: Simple Moments,
              Stronger Bonds” sebagai bentuk kontribusi nyata dalam menciptakan
              ruang berbagi dan mempererat koneksi antar individu.
            </p>

            <p>
              Rangkaian kegiatan ini melibatkan para Steppers melalui berbagai
              aktivitas kebersamaan, mulai dari FSJ Iftar Batch 2 hingga FSJ
              Charity x Gandengan, yang menjadi wadah untuk membangun hubungan,
              berbagi pengalaman, dan menghadirkan dampak positif bagi
              lingkungan sekitar.
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="charity-section reveal" id="iftar-batch-2">
            <div className="charity-main-image">
              <img src={iftarMain} alt="FSJ Iftar Batch 2" />
            </div>

            <h2>
              FSJ Iftar Batch 2: Strengthening Bonds Through
              <br />
              Simple Moments
            </h2>

            <p>
              Sebagai bagian awal dari rangkaian FSJ Charity, First Step Journey
              menyelenggarakan FSJ Iftar Batch 2 pada 1 Maret 2026 secara hybrid
              di Semarang, Jakarta, dan online untuk seluruh wilayah.
            </p>

            <p>
              Kegiatan ini menjadi ruang bagi para intern dan internal FSJ untuk
              mempererat hubungan melalui momen berbuka bersama, berbagi cerita,
              serta melakukan berbagai aktivitas interaktif yang membangun
              suasana hangat antar Steppers.
            </p>

            {/* SUB SECTION */}
            <div className="charity-subsection">
              <h3>Membangun Koneksi di Tengah Perbedaan Lokasi</h3>

              <div className="charity-media-row">
                <div className="charity-media-image">
                  <img src={iftarZoom} alt="FSJ Iftar hybrid online" />
                </div>

                <div className="charity-media-text">
                  <p>
                    Meskipun dilaksanakan secara hybrid, kegiatan ini
                    menunjukkan bahwa kebersamaan tidak selalu bergantung pada
                    tempat yang sama.
                  </p>

                  <p>
                    Melalui sesi games dan interaksi bersama, peserta dapat
                    kembali terhubung, mengenal satu sama lain lebih dekat,
                    serta menciptakan pengalaman yang memperkuat rasa
                    kekeluargaan dalam perjalanan bersama di First Step Journey.
                  </p>
                </div>
              </div>
            </div>

            {/* VALUES */}
            <div className="charity-values">
              <p>
                Beberapa nilai utama yang dibangun melalui FSJ Iftar Batch 2:
              </p>

              <ul>
                <li>
                  <span className="charity-value-icon">✨</span>

                  <span>
                    <strong>Connection:</strong> Memperkuat hubungan antar
                    anggota melalui momen sederhana yang bermakna.
                  </span>
                </li>

                <li>
                  <span className="charity-value-icon">🤝</span>

                  <span>
                    <strong>Togetherness:</strong> Menciptakan pengalaman
                    bersama meskipun berada di lokasi yang berbeda.
                  </span>
                </li>

                <li>
                  <span className="charity-value-icon">🌱</span>

                  <span>
                    <strong>Reflection:</strong> Menjadikan Ramadan sebagai
                    waktu untuk berbagi, bersyukur, dan bertumbuh bersama.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="charity-section reveal" id="charity-gandengan">
            <h2>
              FSJ Charity x Gandengan: Creating Impact
              <br />
              Through Small Acts
            </h2>

            <div className="charity-media-row charity-media-row--reverse">
              <div className="charity-media-text">
                <p>
                  Sebagai bentuk lanjutan dari rangkaian FSJ Charity, First Step
                  Journey berkolaborasi bersama Gandengan melalui kegiatan
                  sosial yang berfokus pada berbagi kebahagiaan dan membangun
                  koneksi dengan masyarakat sekitar.
                </p>

                <p>Kegiatan ini dilaksanakan dalam dua rangkaian utama:</p>
              </div>

              <div className="charity-media-image">
                <img src={gandenganImage} alt="FSJ Charity bersama Gandengan" />
              </div>
            </div>

            {/* Charity Visit */}
            <div className="charity-subsection">
              <h3>Charity Visit</h3>

              <p>
                Pada 28 Februari 2026, First Step Journey melakukan kunjungan
                charity ke Panti Asuhan Rumah Komsel Samaria Brotojoyo.
              </p>

              <p>
                Melalui kegiatan ini, para Steppers berkesempatan untuk berbagi
                waktu, perhatian, dan kebahagiaan bersama anak-anak di panti
                asuhan. Interaksi sederhana yang terjalin menjadi pengalaman
                bermakna dalam membangun rasa empati dan kepedulian terhadap
                sesama.
              </p>
            </div>

            {/* Bakti Sosial */}
            <div className="charity-subsection">
              <h3>Bakti Sosial</h3>

              <p>
                Sebagai lanjutan kegiatan, pada 7 Maret 2026, FSJ kembali
                menghadirkan kegiatan bakti sosial yang bertempat di Rumah
                Belajar Brotojoyo.
              </p>

              <p>
                Melalui kegiatan bersama anak-anak rumah belajar, para Steppers
                menciptakan momen interaksi yang hangat melalui aktivitas
                bersama, berbagi cerita, dan membangun hubungan yang lebih
                dekat.
              </p>
            </div>

            {/* Impact */}
            <div className="charity-subsection">
              <h3>Menciptakan Dampak Melalui Kepedulian</h3>

              <p>
                Melalui FSJ Charity x Gandengan, First Step Journey menunjukkan
                bahwa kontribusi tidak selalu harus dimulai dari sesuatu yang
                besar. Sebuah waktu yang diberikan, perhatian kecil, dan
                kehadiran yang tulus dapat menjadi pengalaman yang berarti bagi
                orang lain.
              </p>
            </div>
          </section>

          {/* SECTION 4 */}
          <section
            className="charity-section charity-section--last reveal"
            id="growing-together"
          >
            <h2>Growing Together Through Meaningful Actions</h2>

            <p>
              Melalui rangkaian FSJ Charity, First Step Journey tidak hanya
              menghadirkan kegiatan berbagi, tetapi juga membangun budaya
              kepedulian, koneksi, dan kebersamaan antar Steppers.
            </p>

            <p>
              Setiap momen yang tercipta menjadi pengingat bahwa perjalanan yang
              bermakna tidak hanya dibangun melalui pencapaian pribadi, tetapi
              juga melalui bagaimana kita hadir dan memberikan dampak bagi
              sekitar.
            </p>
          </section>
        </article>

        {/* ========================================
            RIGHT SIDEBAR
        ======================================== */}
        <aside className="charity-sidebar">
          <div className="charity-sidebar-inner">
            <h3>ON THIS PAGE</h3>

            <nav className="charity-toc">
              <a href="#meaningful-connections">
                Building Meaningful Connections Through Sharing, Caring, and
                Giving Back
              </a>

              <a href="#iftar-batch-2">
                FSJ Iftar Batch 2: Strengthening Bonds Through Simple Moments
              </a>

              <a href="#charity-gandengan">
                FSJ Charity x Gandengan: Creating Impact Through Small Acts
              </a>

              <a href="#growing-together">
                Growing Together Through Meaningful Actions
              </a>
            </nav>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default Charity;
