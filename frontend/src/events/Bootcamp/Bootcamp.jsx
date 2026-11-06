import { useEffect } from "react";
import "./Bootcamp.css";

import bootcampHero from "../../assets/events/bootcamp/bootcamp-hero.png";

import bootcamp1Branding from "../../assets/events/bootcamp/bootcamp-1-branding.png";
import bootcamp1CV from "../../assets/events/bootcamp/bootcamp-1-cv.png";

import bootcamp2Group from "../../assets/events/bootcamp/bootcamp-2-group.png";
import bootcamp2Speaker from "../../assets/events/bootcamp/bootcamp-2-speaker.png";

import bootcamp3Upstream from "../../assets/events/bootcamp/bootcamp-3-upstream.png";
import bootcamp3Session from "../../assets/events/bootcamp/bootcamp-3-session.png";

function Bootcamp() {
  useEffect(() => {
    const elements = document.querySelectorAll(".bootcamp-reveal");

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

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bootcamp-page">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        className="bootcamp-hero"
        style={{
          backgroundImage: `url(${bootcampHero})`,
        }}
      >
        <div className="bootcamp-hero-overlay">
          <div className="bootcamp-hero-content">
            <h1>FSJ Bootcamp Series</h1>

            <p>Learn, Practice, and Prepare for Your Next Step</p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN
      ====================================================== */}
      <main className="bootcamp-main">
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <article className="bootcamp-content">
          {/* =================================================
              BOOTCAMP SERIES #1
          ================================================== */}
          <section
            className="bootcamp-section bootcamp-reveal"
            id="bootcamp-series-1"
          >
            <h2>Bootcamp Series #1</h2>

            <p>
              First Step Journey menyelenggarakan Webinar perdana bertajuk “911
              Call: Tailoring Your Career Preparation Now!” pada 3 Agustus 2025
              secara online. Kegiatan ini diikuti oleh lebih dari 50 peserta
              dari berbagai daerah dan menghadirkan dua narasumber dengan latar
              belakang yang relevan di bidang karier, yaitu Haris Hendrik dan
              Nadia Ayu Larasati S.
            </p>

            {/* PERSONAL BRANDING */}
            <div className="bootcamp-subsection" id="personal-branding">
              <h3>Personal Branding: Menunjukkan Keunikan Diri</h3>

              <div className="bootcamp-flow-section bootcamp-flow-section--right">
                <img
                  src={bootcamp1Branding}
                  alt="Bootcamp Personal Branding"
                  className="bootcamp-flow-image"
                />

                <p>
                  Pada materi pertama, Haris Hendrik, Personal Branding Expert
                  sekaligus Career Coach, membahas perbedaan antara pencitraan
                  diri dan personal branding.
                </p>

                <p>
                  Personal branding bukan tentang menciptakan sosok yang berbeda
                  dari diri sendiri. Sebaliknya, personal branding merupakan
                  proses membangun unique selling point dengan menunjukkan
                  nilai, kekuatan, dan keunikan yang dimiliki secara konsisten.
                </p>

                <p>
                  Pemahaman ini membantu peserta untuk membangun citra
                  profesional yang tetap autentik, sehingga dapat dikenali
                  melalui nilai dan kontribusi yang mereka bawa sepanjang
                  perjalanan karier.
                </p>
              </div>
            </div>

            {/* CV PREPARATION */}
            <div className="bootcamp-subsection" id="cv-preparation">
              <h3>
                CV Preparation: Menjadikan CV sebagai Personal Marketing Tool
              </h3>

              <div className="bootcamp-flow-section bootcamp-flow-section--left">
                <img
                  src={bootcamp1CV}
                  alt="Bootcamp CV Preparation"
                  className="bootcamp-flow-image"
                />

                <p>
                  Materi kedua disampaikan oleh Nadia Ayu Larasati S., seorang
                  HR Specialist dan Recruiter. Peserta diajak memahami bahwa CV
                  bukan sekadar daftar pengalaman, pendidikan, maupun organisasi
                  yang pernah diikuti.
                </p>

                <p>
                  CV perlu disusun sebagai alat pemasaran diri (personal
                  marketing tool) yang mampu menunjukkan kesesuaian kandidat
                  dengan posisi yang dituju. Karena itu, penting untuk
                  menyesuaikan CV dengan deskripsi pekerjaan, menggunakan
                  keyword yang relevan, serta menampilkan pengalaman dan
                  pencapaian yang dapat diukur.
                </p>
              </div>
            </div>

            {/* PREPARE */}
            <div
              className="bootcamp-subsection"
              id="prepare-before-opportunity"
            >
              <h3>Mempersiapkan Diri Sebelum Kesempatan Datang</h3>

              <p>
                Melalui Bootcamp Series #1, peserta mendapatkan pemahaman bahwa
                persiapan karier perlu dilakukan secara sadar dan berkelanjutan.
                Personal branding membantu seseorang mengenali dan menyampaikan
                nilai dirinya, sementara CV menjadi salah satu media untuk
                mengkomunikasikan nilai tersebut kepada dunia profesional.
              </p>
            </div>
          </section>

          {/* =================================================
    BOOTCAMP SERIES #2
================================================== */}
          <section
            className="bootcamp-section bootcamp-reveal"
            id="bootcamp-series-2"
          >
            <h2>Bootcamp Series #2</h2>

            <p>
              First Step Journey berkolaborasi dengan Banyumanik Semarang
              menghadirkan Mentoring & Bootcamp Series #1: Preparing Future
              Talents – All About MT. Kegiatan ini menjadi ruang belajar bagi
              mahasiswa dan fresh graduate untuk mengenal lebih dekat perjalanan
              MT dan mempersiapkan diri menghadapi dunia profesional.
            </p>

            {/* DUAL IMAGE */}
            <div className="bootcamp-dual-image">
              <div>
                <img src={bootcamp2Group} alt="Bootcamp Series 2 group" />
              </div>

              <div>
                <img src={bootcamp2Speaker} alt="Bootcamp Series 2 speaker" />
              </div>
            </div>

            {/* KETERANGAN GAMBAR */}
            <p className="bootcamp-dual-caption">
              Sesi ini menghadirkan Sarah Mawaddah Harahap, Assistant Area Sales
              Manager dan Management Trainee Graduate di Unilever, serta Jose
              Prima B. Manalu, Senior Specialist at BYD Indonesia sekaligus
              mantan Management Trainee di BYD pada tanggal 11 Oktober 2025.
            </p>

            {/* UNLOCK POTENTIAL */}
            <div className="bootcamp-subsection" id="unlock-potential">
              <h3>Unlocking Your Potential Before Entering the MT Journey</h3>

              <p>
                Melalui sesi bersama Kak Sarah, peserta diajak memahami bahwa
                perjalanan karier perlu dimulai dengan mengenali nilai dan
                potensi diri. Pengalaman Kak Sarah selama menjalani MT di
                Unilever menunjukkan bagaimana proses rotation di berbagai
                wilayah dapat menjadi ruang untuk belajar dan berkembang.
              </p>

              <p>
                Selama tiga tahun perjalanannya, ia mendapatkan pengalaman
                melalui penempatan di DKI Jakarta, Jawa Barat, Jawa Tengah, Jawa
                Timur, Gorontalo, dan Sulawesi Utara.
              </p>

              <p className="bootcamp-list-intro">
                Dari pengalaman tersebut, beberapa hal menjadi bekal penting
                dalam membangun karier:
              </p>

              <ul className="bootcamp-list">
                <li>
                  🎯 <strong>Knowing Your Value:</strong> Mengenali kekuatan dan
                  nilai yang dapat ditawarkan.
                </li>

                <li>
                  💡 <strong>Building Confidence:</strong> Membangun kepercayaan
                  diri untuk menghadapi tantangan.
                </li>

                <li>
                  🚀 <strong>Exploring Your Passion:</strong> Menemukan bidang
                  yang sesuai dengan minat dan potensi.
                </li>

                <li>
                  🌱 <strong>Discovering Your Potential:</strong> Terus belajar
                  melalui pengalaman dan tantangan.
                </li>
              </ul>
            </div>

            {/* DARE YOUR PASSION */}
            <div className="bootcamp-subsection" id="dare-your-passion">
              <h3>Dare Your Passion: Navigating the MT Journey</h3>

              <p>
                Selain mengenal potensi diri, peserta juga mendapatkan gambaran
                mengenai perjalanan MT dan bagaimana mempersiapkan diri untuk
                memasuki program tersebut.
              </p>

              <p>
                Pembahasan mencakup berbagai topik, mulai dari cara mendapatkan
                program MT di FMCG, menemukan life purpose dan passion melalui
                karier, hingga memahami peluang MT di bidang seperti financial
                automotive dan engineering.
              </p>

              <p>
                Sesi ini juga menekankan pentingnya menjadi mahasiswa yang
                aktif, autentik, dan berani mengambil kesempatan untuk membangun
                pengalaman sejak dini.
              </p>
            </div>

            {/* PROGRAM INSIGHT */}
            <div className="bootcamp-subsection" id="program-insight">
              <h3>Program Insight</h3>

              <p>
                Kegiatan ini berlangsung secara hybrid, dengan sesi offline di
                Parjo, Semarang dan sesi online melalui Zoom. Sebanyak 46
                mahasiswa dan fresh graduate berpartisipasi dari 17 wilayah.
              </p>

              <p>
                Melalui diskusi dan sesi Q&A, peserta tidak hanya mendapatkan
                gambaran mengenai dunia Management Trainee, tetapi juga
                kesempatan untuk memahami ekspektasi industri dan strategi
                menghadapi tantangan nyata di dunia kerja.
              </p>

              <p>
                Pengalaman yang dibagikan para pembicara menjadi pengingat bahwa
                perjalanan menuju karier impian membutuhkan adaptability,
                resilience, confidence, dan continuous learning.
              </p>
            </div>
          </section>

          {/* =================================================
              BOOTCAMP SERIES #3
          ================================================== */}
          <section
            className="bootcamp-section bootcamp-section--last bootcamp-reveal"
            id="bootcamp-series-3"
          >
            <h2>Bootcamp Series #3</h2>

            {/* IMAGE + INTRO */}
            <div className="bootcamp-flow-section bootcamp-flow-section--left">
              <img
                src={bootcamp3Upstream}
                alt="FMCG Upstream Bootcamp"
                className="bootcamp-flow-image"
              />

              <p>
                Industri Fast-Moving Consumer Goods (FMCG) memiliki proses yang
                panjang sebelum sebuah produk dapat sampai ke tangan konsumen.
                Di balik produk yang digunakan sehari-hari, terdapat berbagai
                peran penting mulai dari research & development, quality,
                logistics, hingga proses produksi dan pengelolaan rantai pasok.
              </p>

              <p>
                Untuk memperkenalkan lebih dekat proses tersebut, First Step
                Journey menghadirkan Mentoring & Bootcamp Series #2: The Big
                Picture of FMCG Upstream bersama Unilever Oleochemical Indonesia
                pada 8 November 2025.
              </p>

              <p>
                Kegiatan ini menghadirkan tiga profesional dari berbagai bidang
                untuk membagikan pengalaman dan wawasan mengenai dunia FMCG
                upstream, yaitu Fathiyah Darmawan, Elisandro Bonaputra S., dan
                Reyhan Atma.
              </p>
            </div>

            {/* FMCG ROLE */}
            <div className="bootcamp-subsection" id="fmcg-role">
              <h3>Mengenal Berbagai Peran di FMCG Upstream</h3>

              <p>
                Melalui sesi berbagi, peserta mendapatkan gambaran mengenai
                bagaimana setiap fungsi memiliki peran yang saling terhubung
                dalam menjaga keberlangsungan proses industri.
              </p>

              <ul className="bootcamp-list">
                <li>
                  🔬 Fathiyah Darmawan: Membagikan pengalaman di bidang inovasi
                  dan bagaimana proyek inovasi dapat dikembangkan untuk
                  meningkatkan product value.
                </li>

                <li>
                  ⚙️ Elisandro Bonaputra S.: Menjelaskan peran Quality
                  Performance Engineer dalam menjaga standar kualitas sekaligus
                  mendukung efisiensi proses produksi.
                </li>

                <li>
                  🚚 Reyhan Atma: Membahas dunia logistics dan procurement,
                  termasuk pentingnya efisiensi transportasi serta keberlanjutan
                  rantai pasok.
                </li>
              </ul>
            </div>

            {/* INDUSTRY EXPERIENCE */}
            <div className="bootcamp-subsection" id="industry-learning">
              <h3>Belajar dari Industri Secara Langsung</h3>

              <div className="bootcamp-flow-section bootcamp-flow-section--right">
                <img
                  src={bootcamp3Session}
                  alt="Bootcamp FMCG industry session"
                  className="bootcamp-flow-image"
                />

                <p>
                  Tidak hanya memberikan pemahaman mengenai berbagai posisi di
                  industri FMCG, kegiatan ini juga menjadi ruang bagi peserta
                  untuk berdiskusi dan memahami realita dunia kerja secara lebih
                  dekat.
                </p>

                <p>
                  Program diikuti oleh peserta dari 13 kota, termasuk Bandung,
                  Bekasi, Bogor, Depok, Jakarta, Malang, Medan, Padang,
                  Pontianak, Semarang, Subang, Surabaya, dan Yogyakarta.
                </p>

                <p>
                  Sesi dikemas melalui interactive discussions, Q&A sessions,
                  dan FGD simulations, sehingga peserta dapat terlibat aktif dan
                  menghubungkan materi dengan situasi yang mungkin ditemui di
                  dunia profesional.
                </p>

                <p>
                  Melalui Bootcamp Series #3, peserta tidak hanya mengenal big
                  picture industri FMCG upstream, tetapi juga mendapatkan
                  perspektif mengenai kompetensi dan kesiapan yang dibutuhkan
                  untuk memulai perjalanan karier di dalamnya.
                </p>
              </div>
            </div>
          </section>
        </article>

        {/* =====================================================
            SIDEBAR
        ====================================================== */}
        <aside className="bootcamp-sidebar">
          <div className="bootcamp-sidebar-inner">
            <h3>ON THIS PAGE</h3>

            <nav className="bootcamp-toc">
              <a href="#bootcamp-series-1">Bootcamp Series #1</a>

              <a href="#personal-branding">
                Personal Branding: Menunjukkan Keunikan Diri
              </a>

              <a href="#cv-preparation">
                CV Preparation: Menjadikan CV sebagai Personal Marketing Tool
              </a>

              <a href="#prepare-before-opportunity">
                Mempersiapkan Diri Sebelum Kesempatan Datang
              </a>

              <a href="#bootcamp-series-2">Bootcamp Series #2</a>

              <a href="#unlock-potential">
                Unlocking Your Potential Before Entering the MT Journey
              </a>

              <a href="#dare-your-passion">
                Dare Your Passion: Navigating the MT Journey
              </a>

              <a href="#program-insight">Program Insight</a>

              <a href="#bootcamp-series-3">Bootcamp Series #3</a>

              <a href="#fmcg-role">Mengenal Berbagai Peran di FMCG Upstream</a>

              <a href="#industry-learning">
                Belajar dari Industri Secara Langsung
              </a>
            </nav>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default Bootcamp;
