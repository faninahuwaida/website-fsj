import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="fsj-footer">
      <div className="container">
        
        {/* === BAGIAN ATAS: Logo dan Judul === */}
        <div className="fsj-footer-top">
          {/* Catatan: Pastikan logo2.svg ada di dalam folder public/img/ */}
          <img src="/img/logo2.svg" alt="First Step Journey Logo" className="fsj-footer-logo" />
          <h2 className="fsj-footer-heading">
            Stay Updated with <span>First Step Journey</span>!
          </h2>
        </div>

        {/* Garis Pemisah Atas */}
        <hr className="fsj-footer-divider" />

        {/* === BAGIAN TENGAH: Menu Navigasi === */}
        <div className="fsj-footer-content">
          
          {/* Bagian Kiri: Kolom Contact */}
          <div className="fsj-footer-column contact-col">
            <h4>Contact</h4>
            <ul>
              <li>
                {/* Tautan eksternal diubah menggunakan tag <a> standar */}
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  Instagram 
                  {/* Ikon Panah SVG */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                  Tiktok 
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  Youtube 
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Bagian Kanan: Group Kolom About, Programs, Insights */}
          <div className="fsj-footer-links-group">
            {/* Kolom 2 */}
            <div className="fsj-footer-column">
              <h4>About FSJ</h4>
              <ul>
                {/* Tautan internal diubah dari href="..." menjadi to="..." */}
                <li><Link to="/vision-mission">Vision & Mission</Link></li>
                <li><Link to="/our-journey">Our Journey</Link></li>
                <li><Link to="/our-team">Our Team</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Kolom 3 */}
            <div className="fsj-footer-column">
              <h4>Programs</h4>
              <ul>
                <li><Link to="/internships">Internships</Link></li>
                <li><Link to="/mini-training">Mini Training</Link></li>
                <li><Link to="/event-calendar">Event Calendar</Link></li>
                <li><Link to="/community-impact">Community Impact</Link></li>
              </ul>
            </div>

            {/* Kolom 4 */}
            <div className="fsj-footer-column">
              <h4>Insights</h4>
              <ul>
                <li><Link to="/frameworks">Frameworks</Link></li>
                <li><Link to="/mindset">Mindset</Link></li>
                <li><Link to="/latest-news">Latest News</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Garis Pemisah Bawah */}
        <hr className="fsj-footer-divider" />

        {/* === BAGIAN BAWAH: Copyright === */}
        <div className="fsj-footer-bottom">
          <p>&copy; 2026 Copyright - First Step Journey. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}