import { useEffect, useRef, useState } from 'react'
import './Community.css'

// Discover / Explore
import imgHeroBg from './assets/community-hero-bg.png';
import imgHeroDecoLeft from './assets/community-hero-deco-left.png';
import imgHeroDecoRight from './assets/community-hero-deco-right.png';
import blogMT from './assets/blog-MT.png';
import blogBestIntern from './assets/blog-bestintern.png';
import blogStory from './assets/blog-story.png';
import blogCoasterra from './assets/blog-coasterra.png';

// Life at FSJ Gallery
import life1 from './assets/life-1.jpeg';
import life2 from './assets/life-2.png';
import life3 from './assets/life-3.png';
import life4 from './assets/life-4.JPG';
import life5 from './assets/life-5.png';
import life6 from './assets/life-6.png';

// PARTNER LOGOS 
import partner1 from './assets/logo-part-1.png';
import partner2 from './assets/logo-part-2.png';
import partner3 from './assets/logo-part-3.jpg';
import partner4 from './assets/logo-part-4.png';  
import partner5 from './assets/logo-part-5.png';
import partner6 from './assets/logo-part-6.jpg';
import partner7 from './assets/logo-part-7.png';
import partner8 from './assets/logo-part-8.png';
import partner9 from './assets/logo-part-9.png';
import partner10 from './assets/logo-part-10.png';
import partner11 from './assets/logo-part-11.png';
import partner12 from './assets/logo-part-12.png';
import partner13 from './assets/logo-part-13.png';
import partner14 from './assets/logo-part-14.png';
import partner15 from './assets/logo-part-15.jpg';
import partner16 from './assets/logo-part-16.png';
import partner17 from './assets/logo-part-17.jpg';
import partner18 from './assets/logo-part-18.png';
import partner19 from './assets/logo-part-19.png';
import partner20 from './assets/logo-part-20.jpg';
import partner21 from './assets/logo-part-21.png';


/* ========================================================= */
/* DATA                                                      */
/* ========================================================= */

const discoverCards = [
  { img: blogMT, pos: 'center top', title: 'Participant Success Story: Journey to MT Program' },
  { img: blogStory, pos: 'center center', title: 'Ragam Cerita Bertumbuh: Menemukan Ruang, Peluang & Keberanian di FSJ' },
  { img: blogBestIntern, pos: 'center 30%', title: 'Beyond Expectations: Kisah Dedikasi Dua Best Intern FSJ' },
  { img: blogCoasterra, pos: 'center center', title: 'Coasterra: Connecting People, Science & Action for Resilient Coasts' },
]

const galleryItems = [
  { cls: 'gal-main-top', img: life1 },
  { cls: 'gal-top-middle', img: life2 },
  { cls: 'gal-top-right', img: life3 },
  { cls: 'gal-bottom-left', img: life4, pos: 'left center' },
  { cls: 'gal-main-bottom', img: life5 },
  { cls: 'gal-bottom-right', img: life6 },
]

const partnerLogos = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,  
  partner12,
  partner13,
  partner14,
  partner15,
  partner16,
  partner17,
  partner18,
  partner19,
  partner20,
  partner21
]

/* ========================================================= */
/* HELPERS                                                   */
/* ========================================================= */

// Munculkan elemen (animasi) saat masuk layar
function useReveal(threshold = 0.15) {
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


/* ========================================================= */
/* SMALL COMPONENTS                                          */
/* ========================================================= */

function ChevronDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowUpRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}



/* ========================================================= */
/* PAGE                                                      */
/* ========================================================= */
export default function Community() {
  const [discoverRef, discoverVisible] = useReveal()
  const [galleryRef, galleryVisible] = useReveal(0.1)
  const [impactRef, impactVisible] = useReveal(0.15)

  return (
    <div className="com-page">

      {/* 1. HERO */}
      <section className="com-hero">
        <img className="com-hero-bg" src={imgHeroBg} alt="" />
        <div className="com-hero-overlay" />
        <img className="com-hero-deco com-hero-deco-left" src={imgHeroDecoLeft} alt="" />
        <img className="com-hero-deco com-hero-deco-right" src={imgHeroDecoRight} alt="" />

        <div className="com-hero-content">
          <div className="com-hero-tag">
            <span className="com-hero-line" />
            <span>COMMUNITY</span>
            <span className="com-hero-line" />
          </div>
          <h1>FSJ Community</h1>
          <p>
            More than just a community. Step into a structured ecosystem designed to accelerate your
            professional journey and amplify your impact.
          </p>
          <nav className="com-breadcrumb" aria-label="Breadcrumb">
            <span>Home</span>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true">
              <path d="M1 1l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="current">Community</span>
          </nav>
        </div>
      </section>

      {/* 2. DISCOVER / EXPLORE */}
      <section className="com-discover">
        <div className="discover-header">
          <div className="discover-title-area">
            <span className="com-eyebrow">Explore</span>
            <h2>Ready to Discover Your Path?</h2>
          </div>
        </div>

        <div ref={discoverRef} className={`discover-scroll${discoverVisible ? ' is-visible' : ''}`}>
          {discoverCards.map((c, i) => (
            <article
              className="discover-card"
              key={c.title}
              style={{ '--delay': `${i * 120}ms` }}
            >
              <img className="card-img-real" src={c.img} alt="" style={{ objectPosition: c.pos }} />
              <div className="card-content">
                <h3>{c.title}</h3>
                <button type="button" className="btn-discover-card">
                  <span>Learn More</span>
                  <svg className="btn-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. GALLERY */}
      <section className="com-gallery-new">
        <div className="insights-header-center">
          <span className="center-eyebrow">Gallery</span>
          <h2 className="section-title-center">Life at FSJ</h2>
          <p className="insights-desc">
            Take a peek into our dynamic community! From interactive workshops to real-world project
            collaborations, here is where growth happens.
          </p>
        </div>

        <div ref={galleryRef} className={`gallery-grid-proportional${galleryVisible ? ' is-visible' : ''}`}>
          {galleryItems.map((g) => (
            <div className={`gal-item ${g.cls}`} key={g.cls}>
              <img src={g.img} alt="" style={g.pos ? { objectPosition: g.pos } : undefined} />
            </div>
          ))}
        </div>
      </section>

      {/* 4. IMPACT */}
      <section className="com-impact">
        <div className="insights-header-center">
          <span className="center-eyebrow">Result</span>
          <h2 className="section-title-center">What is Our True Impact</h2>
          <p className="insights-desc">
            Ultimately, a robust system must produce meaningful outputs. This final phase is no longer
            about oneself, but about how widely our collective work is felt by the ecosystem.
          </p>
        </div>

        <div className="impact-marquee">
          <div className="impact-marquee-track">
            {[0, 1].map((group) => (
              <ul className="impact-marquee-group" key={group} aria-hidden={group === 1 || undefined}>
                {partnerLogos.map((src, i) => (
                  <li className="impact-logo" key={`${group}-${i}`}>
                    <img src={src} alt="" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="impact-marquee-fade" />
        </div>

        <div ref={impactRef} className={`com-stats${impactVisible ? ' is-visible' : ''}`}>
          <div className="com-stat-card com-stat-yellow">
            <h3>More Than 50+ Active Alumni</h3>
            <p>Join a growing network of future leaders and professionals spread across the nation.</p>
          </div>

          <div className="com-stat-card com-stat-blue">
            <h3 className="com-stat-title-center">Our Impact Scale</h3>
            <div className="com-stat-numbers">
              <div className="com-stat-number">
                <h4>100+</h4>
                <p>Sustainable Projects Executed</p>
              </div>
              <div className="com-stat-number">
                <h4>400+</h4>
                <p>Total Event Participants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
