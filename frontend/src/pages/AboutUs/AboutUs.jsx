import { useEffect, useRef, useState } from "react";
import "./AboutUs.css";
import financialSustainabilityIcon from "../../assets/financial-sustainability.svg";
import programExcellenceIcon from "../../assets/program-excellence.svg";
import communityImpactIcon from "../../assets/community-impact.svg";
import partnershipDevelopmentIcon from "../../assets/partnership-development.svg";

/* WHY FSJ ICONS */
import careerReadinessIcon from "../../assets/icon-trophy.svg";
import selfDevelopmentIcon from "../../assets/icon-self.svg";
import sustainabilityIcon from "../../assets/icon-trending.svg";

import unemploymentIcon from "../../assets/unemployment.png";
import mentorshipIcon from "../../assets/lack-of-partnership.png";
import skillMismatchIcon from "../../assets/skill-mismatch.png";
import unclearCareerIcon from "../../assets/unclear-career.png";
import underprivilegedIcon from "../../assets/underprivileged.png";

import {
  ShieldCheck,
  Rocket,
  Sprout,
  Telescope,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";


/* =========================================================
   ASSETS
   ========================================================= */

import heroBg from "../../assets/about-hero-bg.jpg";
import heroRadial from "../../assets/about-hero-radial.png";
import whyRadialLeft from "../../assets/why-radial-left.png";

import life1 from "../../assets/life-1.png";
import life2 from "../../assets/life-2.png";
import life3 from "../../assets/life-3.png";
import life4 from "../../assets/life-4.png";
import life5 from "../../assets/life-5.png";

import visionImage from "../../assets/about-vision-1.JPG";

import divFounder from "../../assets/div-founder.png";
import divProduct from "../../assets/div-product.png";
import divVisual from "../../assets/div-vbc.png";
import divBrand from "../../assets/div-brand.png";
import divHuman from "../../assets/div-hr.png";
import divDigital from "../../assets/div-digmar.png";
import divWebsite from "../../assets/div-website.png";
import divAcr from "../../assets/div-acr.png";

/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const ScrollReveal = ({ children, className = "" }) => {
  const ref = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${
        isVisible ? "scroll-reveal-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

/* =========================================================
   ABOUT US
   ========================================================= */

const AboutUs = () => {
  const heroStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#FBB03B",
  };

  const [selectedDivision, setSelectedDivision] = useState(null);

  /* ================= CEO DATA ================= */

  const ceo = {
    name: "CEO",
    nickname: "Jose Prima",
    fullName: "Jose Prima Boang Manalu",
    image: divFounder,
    theme: "blue",

    position: "CEO of First Step Journey",

    details: [
      {
        type: "education",
        text: "Universitas Diponegoro - Teknik Geologi",
      },
      {
        type: "work",
        text: "BYD Indonesia - B2B Partnership & Promotion",
      },
    ],

    linkedin: "https://www.linkedin.com/in/joseprimabm/",
    linkedinLabel: "Joseprimabm",
  };

  /* =========================================================
     DIVISIONS DATA
     ========================================================= */

  const divisions = [
    {
      name: "PMO",
      nickname: "Benedicta",
      fullName: "Benedicta Khrisna",
      image: divBrand,
      theme: "yellow",

      position: "Co-Founder & Coach of Program Management Officer",

      details: [
        {
          type: "work",
          text: "Oodles Math - Online Marketing",
        },
      ],

      linkedin: "https://www.linkedin.com/in/benedictakhrisna",
      linkedinLabel: "Benedictakhrisna",
    },

    {
      name: "HR",
      nickname: "Yosephine",
      fullName: "Yosephine Meilia K",
      image: divHuman,
      theme: "blue",

      position: "Leader of Human Resource",

      details: [
        {
          type: "education",
          text: "Universitas Sanata Dharma - Psikologi",
        },
      ],

      linkedin:
        "https://www.linkedin.com/in/yosephine-meilia-kinanti-898b2b3b0?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      linkedinLabel: "Yosephine-meilia",
    },

    {
      name: "Digmar",
      nickname: "Septhian",
      fullName: "Septhian Kallolangi",
      image: divDigital,
      theme: "yellow",

      position: "Co-Founder & Coach of Digital Marketing",

      details: [
        {
          type: "education",
          text: "Universitas Diponegoro - Teknik Elektro",
        },
      ],

      linkedin: "https://www.linkedin.com/in/septhian-kallolangi/",
      linkedinLabel: "Septhian-kallolangi",
    },

    {
      name: "VBC",
      nickname: "Ghaisan",
      fullName: "Mohammad Ghaisan",
      image: divVisual,
      theme: "blue",

      position: "Leader of Visual Brand Creative",

      details: [
        {
          type: "education",
          text: "Sekolah Tinggi Multi Media - Penyiaran",
        },
      ],

      linkedin:
        "https://www.linkedin.com/in/ghaisan-zuhayr-a34659392?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      linkedinLabel: "Ghaisan-zuhayr",
    },

    {
      name: "Website",
      nickname: "Fanina",
      fullName: "Fanina Huwaida",
      image: divWebsite,
      theme: "blue",

      position: "Leader of Product & Website UI/UX (Website)",

      details: [
        {
          type: "education",
          text: "Universitas Negeri Semarang - Sistem Informasi",
        },
      ],

      linkedin: "https://www.linkedin.com/in/fanina-huwaida/",
      linkedinLabel: "Fanina-huwaida",
    },

    {
      name: "Product",
      nickname: "Aldina",
      fullName: "Aldina Wisik Riani",
      image: divProduct,
      theme: "yellow",

      position: "Leader of Product & Website UI/UX (Product)",

      details: [
        {
          type: "education",
          text: "Universitas Brawijaya - Ekonomi, Keuangan dan Perbankan",
        },
      ],

      linkedin: "https://www.linkedin.com/in/aldinaw",
      linkedinLabel: "Aldinaw",
    },
    {
      name: "ACR",
      nickname: "Tiara",
      fullName: "Tiara Putri Ramadhani",
      image: divAcr,
      theme: "blue",

      position: "Staff of Administration & Performance Reporting",

      details: [
        {
          type: "education",
          text: "Cakrawala University - Data Science",
        },
      ],

      linkedin: "LINKEDIN-TIARA",
      linkedinLabel: "Tiaraputri",
    },
  ];

  return (
    <div className="about-page">
      {/* =====================================================
          1. HERO SECTION
          ===================================================== */}

      <section className="about-hero" style={heroStyle}>
        <img src={heroRadial} alt="" className="hero-radial hero-radial-left" />

        <img
          src={heroRadial}
          alt=""
          className="hero-radial hero-radial-right"
        />

        <div className="hero-content">
          <div className="hero-label">
            <span className="hero-label-line"></span>
            <span className="hero-label-text">ABOUT US</span>
            <span className="hero-label-line"></span>
          </div>
          <h1>Who We Are</h1>

          <p>
            Discover thousands of fun and interactive learning
            <br />
            activities to support your child's growth and learning
            <br />
            process.
          </p>

          <div className="breadcrumb">
            <span>Home</span>

            <span className="separator">/</span>

            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          2. WHY FSJ
          ===================================================== */}

      <section className="why-fsj-section">
        {/* =====================================================
            WHY FSJ - TOP AREA
            ===================================================== */}

        <div className="why-top-area">
          {/* ================= HEADER ================= */}

          <ScrollReveal>
            <div className="why-header">
              <span className="section-eyebrow">The Challenge</span>

              <h2 className="why-title">Why FSJ</h2>
            </div>
          </ScrollReveal>

          {/* ================= DESCRIPTION + IMAGE ================= */}

          <ScrollReveal>
            <div className="why-intro-row">
              {/* TEXT */}
              <div className="why-intro-text">
                <p>
                  FSJ is an Empowerment platform for Indonesian Youth (ages
                  17-25) with community-based, free programs and live projects
                  to provide access for Indonesian youth, especially those with
                  limited privilege, to take their first step, grow, and
                  discover a meaningful career path through both soft and hard
                  skills.
                </p>
              </div>

              {/* IMAGE */}
              <div className="why-intro-image">
                <img src={life1} alt="First Step Journey Community" />
              </div>
            </div>
          </ScrollReveal>

          {/* ================= THREE CARDS ================= */}

          <ScrollReveal>
            <div className="why-pillars-grid">
              {/* CAREER READINESS */}
              <div className="why-pillar-card why-pillar-yellow">
                <img
                  src={careerReadinessIcon}
                  alt="Career Readiness"
                  className="why-pillar-icon"
                />

                <h3>Career Readiness</h3>

                <p>
                  Covers essential workplace skills such as communication,
                  teamwork, digital literacy, and understanding industry
                  expectations.
                </p>
              </div>

              {/* SELF DEVELOPMENT */}
              <div className="why-pillar-card why-pillar-blue">
                <img
                  src={selfDevelopmentIcon}
                  alt="Self Development"
                  className="why-pillar-icon"
                />

                <h3>Self Development</h3>

                <p>
                  Focuses on personal growth, including self-awareness, critical
                  thinking, confidence-building, and emotional management.
                </p>
              </div>

              {/* SUSTAINABILITY SKILLS */}
              <div className="why-pillar-card why-pillar-yellow">
                <img
                  src={sustainabilityIcon}
                  alt="Sustainability Skills"
                  className="why-pillar-icon"
                />

                <h3>Sustainability Skills</h3>

                <p>
                  Introduces key concepts of environmental awareness,
                  sustainable practices, and the role of youth in supporting
                  long-term community.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* =====================================================
            BACKGROUND OF ESTABLISHMENT
            ===================================================== */}

        <div className="why-background-area">
          {/* RADIAL KIRI */}
          <img src={whyRadialLeft} alt="" className="why-background-radial" />

          <ScrollReveal>
            <div className="why-background-container">
              {/* TITLE */}
              <h2 className="why-background-title">
                Background of Establishment
              </h2>

              <div className="why-background-layout">
                {/* =========================================
                    LEFT - IMAGES
                    ========================================= */}

                <div className="why-background-images">
                  <img src={life3} alt="FSJ Community Activity" />

                  <img src={life5} alt="FSJ Learning Activity" />
                </div>

                {/* =========================================
                    RIGHT - CHALLENGES
                    ========================================= */}

                <div className="why-challenges">
                  {/* 7,28 MILLIONS */}
                  <div className="why-stat-row">
                    <div className="why-stat-number">7,28 Millions</div>

                    <p>of Indonesian youth Struggle with:</p>
                  </div>

                  {/* ================= CHALLENGE GRID ================= */}

                  <div className="why-challenges-grid">
                    {/* UNEMPLOYMENT */}
                    <div className="why-challenge-item">
                      <img
                        src={unemploymentIcon}
                        alt="Unemployment"
                        className="why-challenge-icon"
                      />

                      <h3>Unemployment</h3>
                    </div>

                    {/* LACK OF MENTORSHIP */}
                    <div className="why-challenge-item">
                      <img
                        src={mentorshipIcon}
                        alt="Lack of Mentorship"
                        className="why-challenge-icon"
                      />

                      <h3>Lack of Mentorship</h3>
                    </div>

                    {/* SKILL MISMATCH */}
                    <div className="why-challenge-item why-challenge-wide">
                      <img
                        src={skillMismatchIcon}
                        alt="Skill Mismatch Graduate and Industry Needs"
                        className="why-challenge-icon"
                      />

                      <h3>
                        Skill Mismatch Graduate
                        <br />
                        &amp; Industry Needs
                      </h3>
                    </div>

                    {/* UNCLEAR CAREER PATH */}
                    <div className="why-challenge-item">
                      <img
                        src={unclearCareerIcon}
                        alt="Unclear Career Path"
                        className="why-challenge-icon"
                      />

                      <h3>Unclear Career Path</h3>
                    </div>

                    {/* UNDERPRIVILEGED */}
                    <div className="why-challenge-item">
                      <img
                        src={underprivilegedIcon}
                        alt="Underprivileged"
                        className="why-challenge-icon"
                      />

                      <h3>Underprivileged</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =====================================================
          3. VISION & MISSION
          ===================================================== */}

      <section className="vision-mission-section">
        {/* BLUE DOT DECORATION */}

        <div className="vm-dots" aria-hidden="true" />

        {/* ================= VISION ================= */}

        <ScrollReveal>
          <div className="vm-row vision-row">
            {/* VISION IMAGE */}

            <div className="vm-image-wrapper vision-image-wrapper">
              <img
                src={visionImage}
                alt="Vision FSJ"
                className="vm-main-image"
              />
            </div>

            {/* VISION CARD */}

            <div className="vm-card vision-card">
              <h2>Vision</h2>

              <p>
                To provide access for Indonesian youth — especially those with
                limited privilege — to take their first step, grow, and discover
                a meaningful career path through both soft and hard skills.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ================= MISSION ================= */}

        <ScrollReveal>
          <div className="vm-row mission-row">
            {/* MISSION CARD */}

            <div className="vm-card mission-card">
              <h2>Mission</h2>

              <ul>
                <li>
                  Bridge the gap in access to career guidance and development
                </li>

                <li>Ignite first steps through education &amp; mentoring</li>

                <li>Cultivate growth mindset and social inclusion</li>

                <li>Build a safe and empowering community space</li>

                <li>
                  Drive impact-driven Movement through action, content, and
                  cross-sector collaboration
                </li>
              </ul>
            </div>

            {/* MISSION IMAGE GALLERY */}

            <div
              className="mission-gallery"
              aria-label="FSJ mission activities"
            >
              <img src={life2} alt="FSJ activity" />

              <img src={life3} alt="FSJ community activity" />

              <img src={life1} alt="FSJ event" />

              <img src={life4} alt="FSJ mentoring activity" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =====================================================
          4. OUR FOUNDATION
          ===================================================== */}

      <section className="foundation-section">
        <ScrollReveal>
          <div className="foundation-header">
            <span className="foundation-eyebrow">Our Foundation</span>

            <h2>Strategic Pillars FSJ</h2>
            <p className="strategic-description">
              As part of our core Principles, the{" "}
              <span>Strategic Pillars of First Step Journey</span> define the
              foundational directions that guide how we empower Indonesian
              youth. These pillars translate our belief and values into
              long-term commitments that shape our programs, culture, and
              decisions
            </p>
          </div>

          {/* SVG GRADIENT */}

          <svg width="0" height="0" aria-hidden="true">
            <defs>
              <linearGradient
                id="pillar-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#012583" />

                <stop offset="100%" stopColor="#FBB03B" />
              </linearGradient>
            </defs>
          </svg>

          {/* STRATEGIC PILLARS */}

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">
                <img src={programExcellenceIcon} alt="Program Excellence" />
              </div>

              <h3>Program Excellence</h3>

              <p>
                Kualitas konten & trainer tinggi untuk membuat FSJ menjadi
                platform yang lebih terpercaya.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <img src={communityImpactIcon} alt="Community Impact" />
              </div>

              <h3>Community Impact</h3>

              <p>
                Berbasis data (data-driven) & mengangkat cerita nyata
                keberhasilan dari para peserta.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <img
                  src={partnershipDevelopmentIcon}
                  alt="Partnership Development"
                />
              </div>

              <h3>Partnership Development</h3>

              <p>
                Membangun jaringan luas dengan NGO, startup, CSR, dan
                universitas.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <img
                  src={financialSustainabilityIcon}
                  alt="Financial Sustainability"
                />
              </div>

              <h3>Financial Sustainability</h3>

              <p>
                Model pendanaan yang mandiri melalui campuran dana hibah &
                revenue dari partisipan.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* DIVIDER */}

        <div className="foundation-divider">
          <span />
        </div>

        {/* =================================================
            STRATEGIC PLAN
            ================================================= */}

        <ScrollReveal>
          <div className="strategic-plan">
            <h2>Strategic Plan FSJ</h2>

            <div className="timeline">
              {/* YEAR 0 */}

              <div className="timeline-item">
                <div className="timeline-bar year-0">
                  <ShieldCheck />

                  <span>0 – 6 months</span>
                </div>

                <div className="timeline-content">
                  <h3>Build credibility & organizational structure</h3>

                  <p>
                    Leverage social media, Consistent with: Webinar & Bootcamp
                  </p>
                </div>
              </div>

              {/* YEAR 1 */}

              <div className="timeline-item">
                <div className="timeline-bar year-1">
                  <Rocket />

                  <span>Year - 1</span>
                </div>

                <div className="timeline-content">
                  <h3>
                    Ready for international grants & Competition + launch
                    monetized bootcamps
                  </h3>

                  <p>
                    Donor Funding, Collaboration with another organizations,
                    school, University & NGO in Semarang
                  </p>
                </div>
              </div>

              {/* YEAR 2 */}

              <div className="timeline-item">
                <div className="timeline-bar year-2">
                  <Sprout />

                  <span>Year - 2</span>
                </div>

                <div className="timeline-content">
                  <h3>
                    Sustainable impact organization with a combination of grants
                    + internal revenue
                  </h3>
                </div>
              </div>

              {/* YEAR 3 */}

              <div className="timeline-item">
                <div className="timeline-bar year-3">
                  <Telescope />

                  <span>Year - 3</span>
                </div>

                <div className="timeline-content">
                  <h3>
                    Another milestone, idea & Big Goals in the future +++++
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =====================================================
    5. DIVISIONS
    ===================================================== */}

      <section className="divisions-section">
        {/* ================= HEADER ================= */}

        <ScrollReveal>
          <div className="divisions-header">
            <span>The Divisions Driving</span>

            <span className="mission-label">Our Mission</span>
          </div>
        </ScrollReveal>

        {/* =====================================================
      CEO
      ===================================================== */}

        <ScrollReveal>
          <div className="division-ceo-row">
            {/* ================= CEO FLIP CARD ================= */}

            <div
              className={`division-card-wrapper division-ceo-wrapper ${
                selectedDivision === "ceo" ? "is-flipped" : ""
              }`}
              onClick={(e) => {
                if (e.target.closest("a, button, .division-back-connect")) {
                  return;
                }

                setSelectedDivision(selectedDivision === "ceo" ? null : "ceo");
              }}
            >
              <div className="division-card-inner">
                {/* ================= FRONT ================= */}

                <div className="division-card division-card-front">
                  <img src={ceo.image} alt={ceo.name} />

                  <div className="division-info">
                    <strong>{ceo.name}</strong>

                    <small>{ceo.nickname}</small>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDivision("ceo");
                      }}
                    >
                      Detail
                    </button>
                  </div>
                </div>

                {/* ================= BACK CEO ================= */}

                <div className="division-card division-card-back blue">
                  <div className="division-back-top">
                    <h3>{ceo.fullName}</h3>
                    <h4>{ceo.position}</h4>
                  </div>

                  <div className="division-back-details">
                    {ceo.details.map((detail, detailIndex) => (
                      <div className="division-back-info" key={detailIndex}>
                        {detail.type === "education" ? (
                          <GraduationCap />
                        ) : (
                          <BriefcaseBusiness />
                        )}

                        <span>{detail.text}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="division-back-connect"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      className="linkedin-link"
                      href={ceo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`LinkedIn ${ceo.fullName}`}
                    >
                      <span className="linkedin-icon">in</span>

                      <span className="linkedin-text">
                        Connect with {ceo.linkedinLabel}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= CEO DESCRIPTION ================= */}

            <div className="division-ceo-description">
              <p>
                Our team comes from diverse backgrounds, yet we are united by
                one belief: every young person in Indonesia deserves the chance
                to take their first meaningful step. With the right guidance,
                skills, and support, we believe youth can grow, explore
                opportunities, and build a future they once thought was beyond
                their reach.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* =====================================================
                            OTHER DIVISIONS
            ===================================================== */}

        <ScrollReveal>
          <div className="divisions-grid">
            {divisions.map((division, index) => {
              const divisionId = `division-${index}`;

              const isSelected = selectedDivision === divisionId;

              return (
                <div
                  className={`division-card-wrapper ${division.theme || ""} ${
                    isSelected ? "is-flipped" : ""
                  }`}
                  key={`${division.name}-${index}`}
                  onClick={(e) => {
                    if (e.target.closest("a, button, .division-back-connect")) {
                      return;
                    }

                    setSelectedDivision(isSelected ? null : divisionId);
                  }}
                >
                  <div className="division-card-inner">
                    {/* ================= FRONT ================= */}

                    <div
                      className={`division-card division-card-front ${
                        division.theme || ""
                      }`}
                    >
                      <img src={division.image} alt={division.name} />

                      <div className="division-info">
                        <strong>{division.name}</strong>

                        <small>{division.nickname}</small>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();

                            setSelectedDivision(divisionId);
                          }}
                        >
                          Detail
                        </button>
                      </div>
                    </div>

                    {/* ================= BACK ================= */}

                    <div
                      className={`division-card division-card-back ${
                        division.theme || "blue"
                      }`}
                    >
                      <div className="division-back-top">
                        <h3>{division.fullName}</h3>

                        <h4>{division.position}</h4>
                      </div>

                      <div className="division-back-details">
                        {division.details.map((detail, detailIndex) => (
                          <div className="division-back-info" key={detailIndex}>
                            {detail.type === "education" ? (
                              <GraduationCap />
                            ) : (
                              <BriefcaseBusiness />
                            )}

                            <span>{detail.text}</span>
                          </div>
                        ))}
                      </div>

                      <div
                        className="division-back-connect"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          className="linkedin-link"
                          href={division.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`LinkedIn ${division.fullName}`}
                        >
                          <span className="linkedin-icon">in</span>

                          <span className="linkedin-text">
                            Connect with {division.linkedinLabel}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* ================= PR & PE ================= */}

            <div className="division-static-card yellow">
              <div className="static-card-content">
                <h3>PR &amp; PE</h3>

                <p>
                  PR &<br />
                  Project
                  <br />
                  Execution
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =====================================================
          SCROLL TO TOP
          ===================================================== */}

    </div>
  );
};

export default AboutUs;
