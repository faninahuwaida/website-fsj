import { useEffect } from "react";
import "./StepTalk.css";

import stepTalkHero from "../../assets/events/step-talk/steptalk-hero.png";

import stepTalk1Poster from "../../assets/events/step-talk/steptalk-1-poster.png";
import stepTalk1Collage from "../../assets/events/step-talk/steptalk-1-collage.png";

import stepTalk2Poster from "../../assets/events/step-talk/steptalk-2-poster.png";
import stepTalk2Collage from "../../assets/events/step-talk/steptalk-2-collage.png";

import stepTalk3Poster from "../../assets/events/step-talk/steptalk-3-poster.png";
import stepTalk3Collage from "../../assets/events/step-talk/steptalk-3-collage.png";


function StepTalk() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".steptalk-reveal");

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
    <div className="steptalk-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        className="steptalk-hero"
        style={{
          backgroundImage: `url(${stepTalkHero})`,
        }}
      >
        <div className="steptalk-hero-overlay">
          <div className="steptalk-hero-content">
            <h1>Step Talk with FSJ</h1>

            <p>
              Stories, Insights, and Steps Toward Your Future
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <main className="steptalk-main">

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <article className="steptalk-content">

          {/* =================================================
              STEP TALK #1
          ================================================== */}
          <section
            className="steptalk-section steptalk-reveal"
            id="step-talk-1"
          >
            <h2>Step Talk With FSJ #1</h2>

            {/* INTRO TEXT + POSTER */}
            <div className="steptalk-intro-row">

              <div className="steptalk-text">
                <p>
                  Memulai karier tidak selalu harus langsung dari pekerjaan
                  penuh waktu. Bagi anak muda, magang dapat menjadi langkah
                  awal untuk mengenal dunia profesional, membangun pengalaman,
                  dan menemukan arah karier.
                </p>

                <p>
                  Melalui Step Talk With FSJ Series #1 yang dilaksanakan pada
                  26 Oktober 2025, First Step Journey menghadirkan ruang
                  pembelajaran untuk berbagi pengalaman, insight, dan
                  perjalanan menuju dunia profesional.
                </p>

                <p>
                  Sesi ini membahas berbagai hal penting mulai dari
                  persiapan sebelum magang hingga cara memanfaatkan
                  pengalaman tersebut untuk perkembangan karier.
                </p>
              </div>

              <div className="steptalk-poster">
                <img
                  src={stepTalk1Poster}
                  alt="Step Talk With FSJ Series 1"
                />
              </div>

            </div>


            {/* FOCUS #1 */}
            <h3 id="focus-1">
              3 Fokus Utama Step Talk #1
            </h3>

            <ul className="steptalk-focus-list">
              <li>
                🎯 <strong>Preparation:</strong>{" "}
                Membangun jaringan, memanfaatkan LinkedIn, dan menyiapkan
                CV yang sesuai dengan kebutuhan perusahaan.
              </li>

              <li>
                🤝 <strong>Adaptation:</strong>{" "}
                Memahami work culture, workflow, serta belajar
                menyesuaikan diri dengan lingkungan profesional.
              </li>

              <li>
                🌱 <strong>Growth:</strong>{" "}
                Mengembangkan pengalaman, kepercayaan diri, dan mindset
                melalui pengalaman langsung, mentoring, dan berbagai
                aktivitas pengembangan diri.
              </li>
            </ul>


            {/* COLLAGE + TEXT */}
            <div className="steptalk-media-row">

              <div className="steptalk-collage">
                <img
                  src={stepTalk1Collage}
                  alt="Step Talk With FSJ Series 1 session"
                />
              </div>

              <div className="steptalk-text">
                <p>
                  Melalui cerita dan pengalaman narasumber, peserta
                  mendapatkan gambaran bahwa perjalanan magang bukan hanya
                  tentang mendapatkan pengalaman kerja, tetapi juga tentang
                  mempersiapkan diri, beradaptasi, dan terus bertumbuh.
                </p>

                <p>
                  Kegiatan ini berhasil menjadi ruang berbagi seputar dunia
                  karier yang dekat dengan pengalaman anak muda.
                </p>
              </div>

            </div>
          </section>


          {/* =================================================
              STEP TALK #2
          ================================================== */}
          <section
            className="steptalk-section steptalk-reveal"
            id="step-talk-2"
          >
            <h2>Step Talk With FSJ #2</h2>

            <p>
              Melalui Step Talk With FSJ Series #2, First Step Journey
              menghadirkan ruang diskusi seputar pilihan pendidikan,
              perjalanan setelah sekolah, serta bagaimana menentukan
              langkah berdasarkan kesiapan dan tujuan masing-masing.
            </p>


            {/* POSTER + COLLAGE */}
            <div className="steptalk-dual-image">

              <div className="steptalk-dual-item">
                <img
                  src={stepTalk2Poster}
                  alt="Step Talk With FSJ Series 2"
                />
              </div>

              <div className="steptalk-dual-item">
                <img
                  src={stepTalk2Collage}
                  alt="Step Talk With FSJ Series 2 session"
                />
              </div>

            </div>


            <p>
              Mengangkat tema mengenai pilihan setelah sekolah, sesi ini
              mengajak peserta untuk melihat keputusan berdasarkan
              kesiapan, tujuan, serta kondisi masing-masing, bukan sekadar
              mengikuti pencapaian orang lain.
            </p>


            {/* FOCUS #2 */}
            <h3 id="focus-2">
              4 Fokus Utama Step Talk #2
            </h3>

            <ul className="steptalk-focus-list">
              <li>
                🎯 <strong>First Step Matters:</strong>{" "}
                Memahami bahwa keputusan pertama setelah sekolah dapat
                menjadi bagian penting dari perjalanan karier.
              </li>

              <li>
                ⏳ <strong>Own Timeline:</strong>{" "}
                Menentukan langkah berdasarkan kesiapan dan tujuan pribadi
                tanpa merasa harus mengikuti timeline orang lain.
              </li>

              <li>
                🌱 <strong>Personal Growth:</strong>{" "}
                Melihat studi maupun pengalaman kerja sebagai kesempatan
                untuk terus mengembangkan kompetensi dan diri.
              </li>

              <li>
                🚫 <strong>No Comparison:</strong>{" "}
                Menghindari keputusan yang hanya didasari rasa FOMO atau
                perbandingan dengan pencapaian orang lain.
              </li>
            </ul>


            <p>
              Pada akhirnya, pilihan yang tepat tidak selalu berarti pilihan
              yang paling cepat atau lebih baik dibandingkan orang lain.
              Setiap orang memiliki kondisi, prioritas, dan waktu yang
              berbeda untuk mencapai tujuan kariernya.
            </p>
          </section>


          {/* =================================================
              STEP TALK #3
          ================================================== */}
          <section
            className="steptalk-section steptalk-section--last steptalk-reveal"
            id="step-talk-3"
          >
            <h2>Step Talk With FSJ #3</h2>


            {/* POSTER + TEXT */}
            <div className="steptalk-media-row">

              <div className="steptalk-poster steptalk-poster--large">
                <img
                  src={stepTalk3Poster}
                  alt="Step Talk With FSJ Series 3"
                />
              </div>

              <div className="steptalk-text">
                <p>
                  Pendidikan sering dipandang sebagai salah satu jalan
                  untuk membuka lebih banyak kesempatan dalam hidup.
                  Namun, pendidikan saja tidak cukup tanpa kemauan untuk
                  terus berkembang.
                </p>

                <p>
                  Melalui sesi ini, peserta diajak melihat pendidikan bukan
                  hanya sebagai proses akademis, tetapi sebagai bekal untuk
                  membangun pola pikir, mengenali peluang, dan berani
                  mengambil langkah.
                </p>
              </div>

            </div>


            {/* FOCUS #3 */}
            <h3 id="focus-3">
              4 Fokus Utama Step Talk #3
            </h3>

            <ul className="steptalk-focus-list">
              <li>
                📚 <strong>Education Value:</strong>{" "}
                Memahami pendidikan sebagai fondasi untuk membangun
                pengetahuan, keterampilan, dan nilai jangka panjang.
              </li>

              <li>
                💡 <strong>Opportunity Mindset:</strong>{" "}
                Belajar melihat peluang dari perjalanan pendidikan dan
                berbagai situasi yang dihadapi.
              </li>

              <li>
                🚀 <strong>Risk Taking:</strong>{" "}
                Berani mencoba, menghadapi kegagalan, dan menjadikannya
                sebagai bagian dari proses bertumbuh.
              </li>

              <li>
                💪 <strong>Self Confidence:</strong>{" "}
                Membangun kepercayaan diri, konsistensi, serta keberanian
                untuk memulai sesuatu.
              </li>
            </ul>


            {/* TEXT + COLLAGE */}
            <div className="steptalk-media-row steptalk-media-row--reverse">

              <div className="steptalk-text">
                <p>
                  Sebagai seorang studentpreneur, narasumber membagikan
                  pengalamannya dalam menyeimbangkan pendidikan dengan
                  pekerjaan dan aktivitas produktif lainnya.
                </p>

                <p>
                  Pengalaman tersebut menunjukkan bahwa proses belajar
                  tidak berhenti di ruang kelas, tetapi juga hadir melalui
                  pengalaman nyata dan keberanian untuk mencoba.
                </p>

                <p>
                  Manajemen waktu menjadi penting agar pendidikan tetap
                  menjadi prioritas sekaligus membuka ruang untuk
                  mengembangkan pengalaman dan karya.
                </p>
              </div>

              <div className="steptalk-collage">
                <img
                  src={stepTalk3Collage}
                  alt="Step Talk With FSJ Series 3 session"
                />
              </div>

            </div>
          </section>

        </article>


        {/* =====================================================
            RIGHT SIDEBAR
        ====================================================== */}
        <aside className="steptalk-sidebar">

          <div className="steptalk-sidebar-inner">

            <h3>ON THIS PAGE</h3>

            <nav className="steptalk-toc">

              <a href="#step-talk-1">
                Step Talk With FSJ #1
              </a>

              <a href="#focus-1">
                3 Fokus Utama Step Talk #1
              </a>

              <a href="#step-talk-2">
                Step Talk With FSJ #2
              </a>

              <a href="#focus-2">
                4 Fokus Utama Step Talk #2
              </a>

              <a href="#step-talk-3">
                Step Talk With FSJ #3
              </a>

              <a href="#focus-3">
                4 Fokus Utama Step Talk #3
              </a>

            </nav>

          </div>

        </aside>

      </main>
    </div>
  );
}


export default StepTalk;