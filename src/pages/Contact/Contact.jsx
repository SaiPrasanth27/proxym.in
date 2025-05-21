import Footer from '../../components/footer/Footer'
import './Contact.css'

export default function Contact(){
    return(
        <>
      <div className="hero_area">
        <header className="header_section">
          <div className="container">
            <nav className="navbar">
              <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/Plans">Plans</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
              <a className="login-btn" href="/login">Login</a>
            </nav>
          </div>
        </header>

        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Reassure Solutions Pvt Ltd</p>
              <p>3rd floor, 91springboard, Mythri Square Building</p>
              <p>Kondapur, Hyderabad, Telangana</p>
              <p>Phone: 094943 83584</p>
              <p>Email: <a href="mailto:proxymorders@gmail.com">proxymorders@gmail.com</a></p>
            </div>

            <div className="contact-form">
              <h2>Send us a message</h2>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea rows="5" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
    )
}