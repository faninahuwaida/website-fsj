import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import blogMT from '../assets/blog-MT.png';
import blogBestIntern from '../assets/blog-bestintern.png';
import blogStory from '../assets/blog-story.png';
import blogCoasterra from '../assets/blog-coasterra.png';

const discoverCards = [
  { img: blogMT, pos: 'center top', title: 'Participant Success Story: Journey to MT Program' },
  { img: blogStory, pos: 'center center', title: 'Ragam Cerita Bertumbuh: Menemukan Ruang, Peluang & Keberanian di FSJ' },
  { img: blogBestIntern, pos: 'center 30%', title: 'Beyond Expectations: Kisah Dedikasi Dua Best Intern FSJ' },
  { img: blogCoasterra, pos: 'center center', title: 'Coasterra: Connecting People, Science & Action for Resilient Coasts' },
]

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#features", label: "Fasilitas" },
  { href: "#testimonials", label: "Testimoni" },
  { href: "#contact", label: "Kontak" },
];

// Data untuk Our Impact
const impactData = [
  {
    id: 1,
    title: "FSJ Charity",
    alt: "FSJ Charity",
    image: "", // Kosongkan dulu
    reverse: false
  },
  {
    id: 2,
    title: (
      <>
        Career<br />Summit
      </>
    ),
    alt: "Career Summit",
    image: "", // Kosongkan dulu
    reverse: true
  },
  {
    id: 3,
    title: (
      <>
        Step Up<br />Collage
      </>
    ),
    alt: "Step Up Collage",
    image: "", // Kosongkan dulu
    reverse: false
  },
  {
    id: 4,
    title: (
      <>
        Bootcamp<br />Series
      </>
    ),
    alt: "Bootcamp Series",
    image: "", // Kosongkan dulu
    reverse: true
  },
  {
    id: 5,
    title: (
      <>
        People<br />Development<br />Training
      </>
    ),
    alt: "People Development Training",
    image: "", // Kosongkan dulu
    reverse: false
  },
  {
    id: 6,
    title: (
      <>
        Step Talk<br />Series
      </>
    ),
    alt: "Step Talk Series",
    image: "", // Kosongkan dulu
    reverse: true
  }
];

// Data untuk Testimoni
const testimonialsData = [
  {
    id: 1,
    name: "Insaf",
    alt: "Insaf",
    role: "Peserta Bootcamp Series",
    university: "UNPAB",
    uniLogo: "", // Kosongkan dulu
    image: "", // Kosongkan dulu
    text: "Webinar First Step Journey\nkemarin was really insightful! ✨\nBanyak hal baru yang aku dapat,\nterutama tentang personal\nbranding dan how to make a CV\nstand out. Penyampaiannya fun,\nrelatable, dan pastinya applicable\nuntuk pengembangan diri ke\ndepannya. 🚀💡"
  },
  {
    id: 2,
    name: "Vikria",
    alt: "Vikria",
    role: "Peserta Career Summit",
    university: "USM",
    uniLogo: "", 
    image: "", 
    text: "Lebih dari sekadar seminar,\nCareer Summit ini benar-benar\nmenjawab keresahan Quarter-\nLife Crisis (QLC) saya.\nPenjelasannya mudah dipahami\ndan sukses memotivasi saya\nuntuk menyiapkan karier impian\ndari sekarang."
  },
  {
    id: 3,
    name: (
      <>
        Nur <span>Fitri</span>
      </>
    ),
    alt: "Nur Fitri",
    role: "Volunteer Batch 1",
    university: "Poltesa",
    uniLogo: "", 
    image: "", 
    text: "Tumbuh di daerah ujung\nKalimantan Barat dengan\npeluang yang terbatas, justru\nmemotivasi saya untuk berani\nmencoba hal baru. Melalui FSJ,\nsaya membuktikan bahwa jarak\ndaerah bukan penghalang untuk\nberkontribusi dan memberikan\ndampak 🤩"
  },
  {
    id: 4,
    name: "Alya",
    alt: "Alya",
    role: "Intern Batch 2",
    university: "UNDIP",
    uniLogo: "", 
    image: "", 
    text: "Meski awalnya penuh tantangan\nbaru, perjalanan di FSJ justru\nmembawa saya menjadi PIC FSJ x\nMandiri Career Summit. Sebuah\npengalaman berharga yang tidak\nakan terlupakan. Terima kasih\nFSJ!"
  },
  {
    id: 5,
    name: "Revanisa",
    alt: "Revanisa",
    role: "Peserta Bootcamp Series",
    university: "UMM",
    uniLogo: "", 
    image: "", 
    text: "The material delivered was\ninsightful and really helped me\nprepare for my future career.\nSince personal branding is a key\naspect in building a career, and\nknowing how to create a proper\nCV has boosted my confidence in\nthe recruitment process."
  }
];

// Data untuk Blog
export const blogData = [
  {
    id: 1,
    title: (
      <>
        Participant Success Story: Journey to MT Program
      </>
    ),
    alt: "Participant Success Story: Journey to MT Program",
    image: blogMT // Kosongkan dulu
  },
  {
    id: 2,
    title: (
      <>
        Ragam Cerita Bertumbuh: Menemukan Ruang, Peluang<br />
        & Keberanian di FSJ
      </>
    ),
    alt: "Ragam Cerita Bertumbuh: Menemukan Ruang, Peluang & Keberanian di FSJ",
    image: blogStory // Kosongkan dulu
  },
  {
    id: 3,
    title: (
      <>
        Beyond Expectations:<br />
        Kisah Dedikasi<br />
        Dua Best Intern<br /> FSJ
      </>
    ),
    alt: "Beyond Expectations: Kisah Dedikasi Dua Best Intern FSJ",
    image: blogBestIntern // Kosongkan dulu
  },
  {
    id: 4,
    title: (
      <>
        Coasterra: Connecting<br />
        People, Science<br />
        & Action for<br />
        Resilient Coasts
      </>
    ),
    alt: "Coasterra: Connecting People, Science & Action for Resilient Coasts",
    image: blogCoasterra // Kosongkan dulu
  }
];

export default function Home() {
  const mainSliderGridRef = useRef(null);
  const testimonialSliderRef = useRef(null); 
  const isDraggingTestiRef = useRef(false);
  const startXTestiRef = useRef(0);
  const scrollLeftTestiRef = useRef(0);

  // 1. STATE UNTUK MENGELOLA KONTEN HERO AKTIF
  const [activeStat, setActiveStat] = useState('intro');
  // State untuk 2 titik indikator slide testimoni (0 = slide kiri, 1 = slide kanan)
  const [activeTestimonialDot, setActiveTestimonialDot] = useState(0);
  const testimonialDots = [0, 1];

  // Menambahkan 'intro' sebagai slide pertama di dalam array
  const statKeys = ['intro', 'volunteers', 'campuses', 'cities', 'participants'];

  const handlePrevClick = () => {
    const currentIndex = statKeys.indexOf(activeStat);
    const prevIndex = currentIndex === 0 ? statKeys.length - 1 : currentIndex - 1;
    setActiveStat(statKeys[prevIndex]);
  };

  const handleNextClick = () => {
    const currentIndex = statKeys.indexOf(activeStat);
    const nextIndex = (currentIndex + 1) % statKeys.length;
    setActiveStat(statKeys[nextIndex]);
  };

  // Sinkronisasi titik indikator & tombol saat di-scroll dengan mouse/trackpad
  const handleTestimonialGridScroll = () => {
    const slider = testimonialSliderRef.current;
    if (!slider) return;

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    if (maxScrollLeft <= 0) return;

    const currentIndex = slider.scrollLeft >= maxScrollLeft / 2 ? 1 : 0;
    setActiveTestimonialDot(currentIndex);
  };

  // Fungsi untuk menggeser testimoni dengan tombol kiri/kanan (mengikuti posisi terakhir)
  const handleTestimonialScroll = (direction) => {
    const slider = testimonialSliderRef.current;
    if (!slider) return;

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    const currentIndex = slider.scrollLeft >= maxScrollLeft / 2 ? 1 : 0;
    const nextIndex = direction === 'right'
      ? (currentIndex === 0 ? 1 : 0)
      : (currentIndex === 1 ? 0 : 1);

    slider.scrollTo({
      left: nextIndex === 0 ? 0 : maxScrollLeft,
      behavior: 'smooth'
    });
    setActiveTestimonialDot(nextIndex);
  };

  // Fungsi saat dot indikator testimoni (2 titik) diklik langsung
  const handleTestimonialDotClick = (index) => {
    const slider = testimonialSliderRef.current;
    if (!slider) return;

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    slider.scrollTo({
      left: index === 0 ? 0 : maxScrollLeft,
      behavior: 'smooth'
    });
    setActiveTestimonialDot(index);
  };

  // Fitur geser (drag-scroll) dengan kursor mouse
  const handleTestiMouseDown = (e) => {
    const slider = testimonialSliderRef.current;
    if (!slider) return;
    isDraggingTestiRef.current = true;
    slider.classList.add('is-dragging');
    startXTestiRef.current = e.pageX - slider.offsetLeft;
    scrollLeftTestiRef.current = slider.scrollLeft;
  };

  const handleTestiMouseMove = (e) => {
    if (!isDraggingTestiRef.current) return;
    const slider = testimonialSliderRef.current;
    if (!slider) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startXTestiRef.current) * 1.4;
    slider.scrollLeft = scrollLeftTestiRef.current - walk;
  };

  const handleTestiMouseUpOrLeave = () => {
    if (!isDraggingTestiRef.current) return;
    isDraggingTestiRef.current = false;
    const slider = testimonialSliderRef.current;
    if (!slider) return;
    slider.classList.remove('is-dragging');

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    const draggedDelta = slider.scrollLeft - scrollLeftTestiRef.current;
    let targetIndex = slider.scrollLeft >= maxScrollLeft / 2 ? 1 : 0;
    if (draggedDelta > 25) targetIndex = 1;
    else if (draggedDelta < -25) targetIndex = 0;

    slider.scrollTo({
      left: targetIndex === 0 ? 0 : maxScrollLeft,
      behavior: 'smooth'
    });
    setActiveTestimonialDot(targetIndex);
  };

  // 2. DATA DINAMIS UNTUK GAMBAR DAN TEKS (HERO)
  const heroData = {
    intro: {
      image: "/img/hero-image5.svg",
      headline: (
        <>
          Helping Indonesian Youth<br/>
          Take Their <span>First Step</span> into<br/>
          Career & Green Jobs.
        </>
      ),
      subheadline: (
        <>
          Empowering the next generation of professionals through a supportive ecosystem.<br/>
          Discover your potential, navigate the transition into the workforce, and<br/>
          explore meaningful opportunities in the green economy.
        </>
      )
    },
    volunteers: {
      image: "/img/hero-image1.svg",
      headline: (
        <>
          Powered by a growing community<br/>
          of <span>80+ passionate</span> volunteers<br/>
          making an impact
        </>
      ),
      subheadline: (
        <>
          Together, we turn ideas, energy, and shared purpose<br/>
          into meaningful opportunities for young people.
        </>
      )
    },
    campuses: {
      image: "/img/hero-image2.svg",
      headline: (
        <>
          Connecting with young minds across<br/>
          <span>50+ campuses</span> and creating<br/>
          opportunities that matter
        </>
      ),
      subheadline: (
        <>
          We bring career insights, practical experiences, and meaningful<br/>
          communities closer to students across Indonesia.
        </>
      )
    },
    cities: {
      image: "/img/hero-image3.svg", 
      headline: (
        <>
          Growing our movement across<br/>
          <span>51+ cities</span> while reaching more<br/>
          communities every day
        </>
      ),
      subheadline: (
        <>
          From one community to another, we continue building connections and<br/>
          creating opportunities for young people across Indonesia.
        </>
      )
    },
    participants: {
      image: "/img/hero-image4.svg", 
      headline: (
        <>
          Empowering <span>300+ young people</span><br/>
          to discover their potential and<br/>
          take their next step
        </>
      ),
      subheadline: (
        <>
          Through meaningful programs, hands-on experiences, and supportive<br/>
          communities, we help young people move closer to their future.
        </>
      )
    }
  };

  const currentHero = heroData[activeStat] || heroData.intro;

  // 3. EFEK ANIMASI SAAT SCROLL
  useEffect(() => {
    const handleAnimations = () => {
      document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 150) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleAnimations);
    handleAnimations(); 
    return () => window.removeEventListener("scroll", handleAnimations);
  }, []);

  // 4. EFEK KONTROL TOMBOL SLIDER KIRI & KANAN (HERO)
  useEffect(() => {
    const slider = mainSliderGridRef.current;
    const prevButton = document.getElementById('prev-main-slide');
    const nextButton = document.getElementById('next-main-slide');

    if (!slider || !prevButton || !nextButton) return;

    const sliderElement = slider.querySelector('.main-slide');
    if (!sliderElement) return;
    
    const scrollAmount = sliderElement.offsetWidth + 40; 

    const handleNext = () => slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    const handlePrev = () => slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

    nextButton.addEventListener('click', handleNext);
    prevButton.addEventListener('click', handlePrev);

    return () => {
      nextButton.removeEventListener('click', handleNext);
      prevButton.removeEventListener('click', handlePrev);
    };
  }, []);

  return (
    <>
      {/* -------------------------------------------------------------------
          BAGIAN HERO
      ---------------------------------------------------------------------- */}
      <main className="main-content-container">
        <div className="bg-overlay-wrapper">
          {statKeys.map((key) => (
            <div 
              key={key} 
              className={`hero-image-wrapper ${activeStat === key ? 'active' : ''}`}
            >
              <img 
                src={heroData[key].image} 
                alt={`Hero Background ${key}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
          <div className="gradient-overlay"></div>
        </div>

        <section id="hero-slider" className="reveal hero-section-wrapper">
          <div className="hero-container hero-slider-container">
            <div className="main-slider-grid" ref={mainSliderGridRef}>
              
              <div className="main-slide">
                <div key={activeStat} className="hero-text-anim">
                  <h1>{currentHero.headline}</h1>
                  <p>{currentHero.subheadline}</p>
                </div>

                <div className="cta-buttons">
                  <Link to="/apply-internship" className="cta-button apply">
                    <span>Apply for Internship</span> <i className="fas fa-arrow-right icon-diagonal"></i>
                  </Link>
                  
                  <Link to="/join-program" className="cta-button join">
                    <span>Join Our Program</span> <i className="fas fa-user-group outline-icon"></i>
                  </Link>
                </div>
              </div>
              
            </div>
            
            <div className="main-slider-controls">
              <button id="prev-main-slide" className="slider-nav-btn" onClick={handlePrevClick}>
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <div className="slider-dots">
                <span className={`dot ${activeStat === 'intro' ? 'active' : ''}`} onClick={() => setActiveStat('intro')}></span>
                <span className={`dot ${activeStat === 'volunteers' ? 'active' : ''}`} onClick={() => setActiveStat('volunteers')}></span>
                <span className={`dot ${activeStat === 'campuses' ? 'active' : ''}`} onClick={() => setActiveStat('campuses')}></span>
                <span className={`dot ${activeStat === 'cities' ? 'active' : ''}`} onClick={() => setActiveStat('cities')}></span>
                <span className={`dot ${activeStat === 'participants' ? 'active' : ''}`} onClick={() => setActiveStat('participants')}></span>
              </div>
              
              <button id="next-main-slide" className="slider-nav-btn" onClick={handleNextClick}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>

        <section id="stats" className="reveal stats-section-wrapper">
          <div className="hero-container stats-grid-container">
            <div className="stats-grid">
              <div 
                className={`stat-card ${activeStat === 'volunteers' ? 'active-stat' : ''}`} 
                onClick={() => setActiveStat('volunteers')}
              >
                <h3>80+</h3><p>Volunteers</p>
              </div>
              
              <div 
                className={`stat-card ${activeStat === 'campuses' ? 'active-stat' : ''}`} 
                onClick={() => setActiveStat('campuses')}
              >
                <h3>50+</h3><p>Campus<br/>Reached</p>
              </div>
              
              <div 
                className={`stat-card ${activeStat === 'cities' ? 'active-stat' : ''}`} 
                onClick={() => setActiveStat('cities')}
              >
                <h3>51+</h3><p>Cities<br/>Covered</p>
              </div>
              
              <div 
                className={`stat-card ${activeStat === 'participants' ? 'active-stat' : ''}`} 
                onClick={() => setActiveStat('participants')}
              >
                <h3>300+</h3><p>Participants</p>
              </div>
            </div>
          </div>
        </section>

        <div className="white-fade-transition"></div>
      </main>

      {/* -------------------------------------------------------------------
          BAGIAN ABOUT US
      ---------------------------------------------------------------------- */}
      <section id="about" className="about-section">
        <div className="about-vector-bg">
          <img 
            src="/img/vector-505.svg" 
            alt="About Us Background Zig Zag Vector" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
          />
        </div>
        
        <div className="about-container reveal">
          <h4 className="about-subtitle">About Us</h4>
          <h2 className="about-title">
            Building Your Career from the <span className="highlight-box">First Step</span>
          </h2>
          <p className="about-description">
            FSJ is an Empowerment platform for Indonesian Youth (ages 17-25) by Community<br />
            - based, free programs, and live projects.
          </p>

          <div className="about-cards-wrapper">
            <div className="about-row">
              <div className="about-text-card">
                <div className="text-content-left">
                  <h3>Career Readiness <img src="/img/trophy.svg" alt="Trophy Icon" className="about-svg-icon" /></h3>
                  <p>Build the skills, experience, and confidence you need to take your first step into the professional world.</p>
                </div>
              </div>
              <div className="about-image-card border-blue">
                <img src="/img/" alt="Career Readiness" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            <div className="about-row row-reverse">
              <div className="about-image-card border-yellow">
                <img src="/img/" alt="Self Development" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="about-text-card">
                <div className="text-content-right">
                  <h3>Self Development <i className="fas fa-bullseye"></i></h3>
                  <p>
                    Grow your mindset, communication, and personal<br />
                    skills to become a more confident and resilient<br />
                    individual.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-row">
              <div className="about-text-card">
                <div className="text-content-left">
                  <h3>Sustainability Skills <i className="fas fa-arrow-trend-up"></i></h3>
                  <p>
                    Develop future-ready skills and understand<br /> 
                    sustainability to create meaningful impact in a<br /> 
                    changing world.
                  </p>
                </div>
              </div>
              <div className="about-image-card border-blue">
                <img src="/img/" alt="Sustainability Skills" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
          BAGIAN WHAT WE OFFER
      ---------------------------------------------------------------------- */}
      <section id="what-we-offer" className="offer-section">
        <div className="offer-container reveal">
          <div className="offer-header">
            <h4 className="offer-subtitle">What We Offer</h4>
            <h2 className="offer-title">
              Accelerate Your Growth With Us <span className="offer-title-icon"></span>
            </h2>
          </div>

          <div className="offer-list">
            <div className="offer-item">
              <div className="offer-number">01</div>
              <div className="offer-image-wrapper">
                <img src="" alt="Impact Leader Indonesia" />
              </div>
              <div className="offer-content">
                <h3>Impact Leader <br />
                    Indonesia</h3>
                <p>
                  Tingkatkan keahlian profesional dan<br />
                  ciptakan dampak nyata melalui Impact<br />
                  Leader Indonesia dalam program 12<br />
                  minggu bersama First Step Journey.
                </p>
                <button className="offer-btn">Learn More</button>
              </div>
            </div>
            <hr className="offer-divider" />
            <div className="offer-item">
              <div className="offer-number">02</div>
              <div className="offer-image-wrapper">
                <img src="" alt="Mentoring 1on1" />
              </div>
              <div className="offer-content">
                <h3>Mentoring 1on1</h3>
                <p>Upgrade CV dan arah kariermu lewat<br />
                   sesi mentoring 1-on-1 selama 1 jam.<br />
                   Dapatkan feedback yang jelas, praktis,<br />
                   dan sesuai kebutuhanmu untuk<br />
                   membantu mencapai tujuan kariermu.</p>
                <button className="offer-btn">Learn More</button>
              </div>
            </div>
            <hr className="offer-divider" />
            <div className="offer-item">
              <div className="offer-number">03</div>
              <div className="offer-image-wrapper">
                <img src="" alt="CV Review" />
              </div>
              <div className="offer-content">
                <h3>CV Review</h3>
                <p>Upgrade CV dan arah kariermu dengan<br />
                  review terstruktur dari FSJ!<br />
                  Dapatkan feedback yang jelas, praktis,<br />
                  dan langsung bisa kamu terapkan untuk<br />
                  mencapai tujuan kariermu.
                </p>
                <button className="offer-btn">Learn More</button>
              </div>
            </div>
            <hr className="offer-divider" />
            <div className="offer-item">
              <div className="offer-number">04</div>
              <div className="offer-image-wrapper">
                <img src="" alt="E-Learning" />
              </div>
              <div className="offer-content">
                <h3>E-Learning</h3>
                <p>Sudah daftar MT ke banyak perusahaan<br />
                  tapi belum lolos juga? Mungkin bukan<br />
                  kurang pintar, tapi kurang strategi. Di<br />
                  Bootcamp Management Trainee, kamu<br />
                  akan dibimbing step-by-step
                </p>
                <button className="offer-btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
          BAGIAN OUR IMPACT
      ---------------------------------------------------------------------- */}
      <section id="our-impact" className="impact-section">
        <div className="impact-container reveal">
          <div className="impact-footprints-bg">
            <img src="/img/footprints.svg" alt="Background Footprints" />
          </div>
          
          <div className="impact-header">
            <h4 className="impact-subtitle">Our Impact</h4>
            <h2 className="impact-title">
              Creating Our Real Impact Together
            </h2>
          </div>

          <div className="impact-timeline">
            {impactData.map((item) => (
              <div key={item.id} className={`impact-row ${item.reverse ? 'reverse' : ''}`}>
                <div className="impact-text">
                  <h3>{item.title}</h3>
                </div>
                <div className="impact-image-container">
                  <div className="impact-img-box">
                    {item.image && (
                      <img src={item.image} alt="" aria-hidden="true" className="impact-img-blur-bg" />
                    )}
                    <div className={`impact-inner-frame ${item.image ? 'has-photo' : ''}`}>
                      <img
                        src={item.image}
                        alt={item.alt}
                        className={`impact-img-main ${item.image ? 'has-photo' : ''}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* -------------------------------------------------------------------
          BAGIAN WHAT THEY SAY (TESTIMONIALS)
      ---------------------------------------------------------------------- */}
      <section id="testimonials" className="testimonial-section">
        <div className="testimonial-container reveal">
          <div className="testimonial-header">
            <h4 className="testimonial-subtitle">What They Say</h4>
            <h2 className="testimonial-title">Words from Our Steppers</h2>
          </div>

          <div className="testimonial-slider-wrapper">
            <div 
              className="testimonial-grid" 
              ref={testimonialSliderRef}
              onScroll={handleTestimonialGridScroll}
              onMouseDown={handleTestiMouseDown}
              onMouseMove={handleTestiMouseMove}
              onMouseUp={handleTestiMouseUpOrLeave}
              onMouseLeave={handleTestiMouseUpOrLeave}
            >
              {testimonialsData.map((item) => (
                <div key={item.id} className="testimonial-card">
                  <div className="testi-user-info">
                    <h3 className="testi-name">{item.name}</h3>
                    <p className="testi-role">{item.role}</p>
                    <div className="testi-uni">
                      <div className="uni-logo-placeholder">
                        <img src={item.uniLogo} alt={`Logo ${item.university}`} />
                      </div>
                      <span>{item.university}</span>
                    </div>
                  </div>
                  
                  <div className="testi-image-container">
                    <div className="testi-image-placeholder">
                      <img src={item.image} alt={`Foto ${item.alt}`} className={item.image ? "testi-img-sharp" : ""} />
                      {item.image && (
                        <img src={item.image} alt="" aria-hidden="true" className="testi-img-blur" />
                      )}
                    </div>
                    <div className="testi-image-overlay"></div>
                  </div>

                  <div className="testi-quote-content">
                    <span className="quote-icon">“</span>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonial-controls">
            <button className="testi-nav-btn" onClick={() => handleTestimonialScroll('left')}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="slider-dots">
              {testimonialDots.map((index) => (
                <span 
                  key={index} 
                  className={`dot ${activeTestimonialDot === index ? 'active' : ''}`}
                  onClick={() => handleTestimonialDotClick(index)}
                ></span>
              ))}
            </div>
            <button className="testi-nav-btn" onClick={() => handleTestimonialScroll('right')}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
          BAGIAN OUR BLOG (BARU)
      ---------------------------------------------------------------------- */}
      <section id="our-blog" className="blog-section">
        {/* Dekorasi Titik-Titik di Latar Belakang */}
        <div className="blog-pattern-bg">
          <img src="/img/radial.svg" alt="Background Radial" />
        </div>

        <div className="blog-container reveal">
          <div className="blog-header">
            <h4 className="blog-subtitle">Our Blog</h4>
            <h2 className="blog-title">Explore Latest News & Inspiration</h2>
          </div>

          <div className="blog-grid">
            {blogData.map((blog) => (
              <div key={blog.id} className="blog-card">
                <div className="blog-image-wrapper">
                  <img src={blog.image} alt={blog.alt} />
                </div>
                <h3 className="blog-card-title">{blog.title}</h3>
                <div className="blog-btn-wrapper">
                  <button className="blog-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}