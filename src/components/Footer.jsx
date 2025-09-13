
import { Link } from 'react-router-dom'
import '../css/footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footerContent">
          <div className="footerSection">
            {/* <img 
      src="/logo.png"   
      alt="Logo"
      className="footerLogo"
    />
            <h3 className="footerTitle">Campus<span className="span">Connect</span></h3> */}
             <h3 className="footerTitle">
          <img 
            src="/logo.png"   // apna logo ka path yahan do
            alt="Logo"
            className="footerLogo"
          />
          Campus<span className="span">Connect</span>
        </h3>
            <p className="footerDescription">
              Connecting students, faculty, and the community through engaging events and activities.
            </p>
            <div className="socialLinks">
              <a href="#" className="socialLink" aria-label="Facebook">
                {/* Facebook SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 
                  5.373-12 12c0 5.99 4.388 10.954 10.125 
                  11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 
                  1.792-4.669 4.533-4.669 1.312 0 2.686.235 
                  2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 
                  1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 
                  23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="socialLink" aria-label="Twitter">
                {/* Twitter SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 
                  4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 
                  1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 
                  4.067 6.13 1.64 3.162a4.822 4.822 0 
                  00-.666 2.475c0 1.71.87 3.213 
                  2.188 4.096a4.904 4.904 0 
                  01-2.228-.616v.06a4.923 4.923 
                  0 003.946 4.827 4.996 4.996 
                  0 01-2.212.085 4.936 4.936 
                  0 004.604 3.417 9.867 9.867 
                  0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 
                  13.995 0 007.557 2.209c9.053 0 
                  13.998-7.496 13.998-13.985 0-.21 
                  0-.42-.015-.63A9.935 9.935 0 
                  0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="socialLink" aria-label="Instagram">
                {/* Instagram SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 
                  5.367.029 11.987c0 6.62 5.367 
                  11.987 11.988 11.987 6.62 0 
                  11.987-5.367 11.987-11.987C24.014 
                  5.367 18.637.001 12.017.001zM8.449 
                  16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 
                  14.895 3.708 13.744 3.708 
                  12.447s.49-2.448 1.297-3.323c.875-.807 
                  2.026-1.297 3.323-1.297s2.448.49 
                  3.323 1.297c.807.875 1.297 2.026 
                  1.297 3.323s-.49 2.448-1.297 
                  3.323c-.875.807-2.026 1.297-3.323 
                  1.297zm7.83-9.281h-1.297v-1.297h1.297v1.297zm-3.323 
                  1.297c-.718 0-1.297.579-1.297 
                  1.297s.579 1.297 1.297 1.297 
                  1.297-.579 1.297-1.297-.579-1.297-1.297-1.297z"/>
                </svg>
              </a>
              <a href="#" className="socialLink" aria-label="LinkedIn">
                {/* LinkedIn SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 
                  0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 
                  1.637-1.85 3.37-1.85 3.601 0 
                  4.267 2.37 4.267 5.455v6.286zM5.337 
                  7.433c-1.144 0-2.063-.926-2.063-2.065 
                  0-1.138.92-2.063 2.063-2.063 
                  1.14 0 2.064.925 2.064 2.063 
                  0 1.139-.925 2.065-2.064 2.065zm1.782 
                  13.019H3.555V9h3.564v11.452zM22.225 
                  0H1.771C.792 0 0 .774 0 
                  1.729v20.542C0 23.227.792 
                  24 1.771 24h20.451C23.2 24 
                  24 23.227 24 22.271V1.729C24 
                  .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footerSection">
            <h4 className="footerSubtitle">Quick Links</h4>
            <ul className="footerLinks">
              <li><Link to="/" className="footerLink">Home</Link></li>
              <li><Link to="/about" className="footerLink">About</Link></li>
              <li><Link to="/events" className="footerLink">Events</Link></li>
               <li><Link  to="/calendar" className="footerLink">Event Calendar</Link></li>
              <li><Link to="/gallery" className="footerLink">Gallery</Link></li>
            </ul>
          </div>

          <div className="footerSection">
            <h4 className="footerSubtitle">Support</h4>
            <ul className="footerLinks">
              <li><Link to="/feedback" className="footerLink">Feedback</Link></li>
              <li><Link to="/contact" className="footerLink">Contact</Link></li>
              <li><a href="#" className="footerLink">Help Center</a></li>
              <li><a href="#" className="footerLink">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footerSection">
            <h4 className="footerSubtitle">Contact Info</h4>
            <div className="contactInfo">
              <p className="contactItem">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="contactIcon">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 
                  7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 
                  9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 
                  2.5-2.5 2.5 1.12 2.5 2.5-1.12 
                  2.5-2.5 2.5z"/>
                </svg>
                Nexa College 
              </p>
              <p className="contactItem">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="contactIcon">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 
                  6.59 6.59l2.2-2.2c.27-.27.67-.36 
                  1.02-.24 1.12.37 2.33.57 3.57.57.55 
                  0 1 .45 1 1V20c0 .55-.45 1-1 
                  1-9.39 0-17-7.61-17-17 
                  0-.55.45-1 1-1h3.5c.55 0 
                  1 .45 1 1 0 1.25.2 2.45.57 
                  3.57.11.35.03.74-.25 
                  1.02l-2.2 2.2z"/>
                </svg>
                +1 (555) 123-4567
              </p>
              <p className="contactItem">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="contactIcon">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 
                  2L2 18c0 1.1.9 2 2 2h16c1.1 
                  0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                  4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                info@campusconnect.edu
              </p>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <p className="copyright">
            © {currentYear} CampusConnect University. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
