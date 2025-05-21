import Footer from '../../components/footer/Footer';
import './Plan.css';

export default function Services() {
  return (
    <>
    <div className="services-page">
      <header className="header_section">
        <nav className="navbar">
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <a className="login-btn" href="/login">Login</a>
        </nav>
      </header>

    <section className="services-sections">
      <div className="section-titles">
        Our <span>Plans</span>
      </div>

      <div className="plan-boxs">
        <div className="plan-lefts">
          <h3>Professional Plan</h3>
          <ul >
            <li>Client's Name</li>
            <li>Card Color</li>
            <li>Occupation & Details</li>
            <li>Social Media Handles</li>
          </ul>
          <div className="price">$499</div>
        </div>
        <div className="plan-rights">
          This plan is perfect for individual professionals who want to showcase their identity online. It includes your name, customized color, and occupation details. Social media links are also included to help improve visibility and connect better with your audience. Ideal for influencers, freelancers, and consultants.
        </div>
      </div>

      <div className="plan-boxs">
        <div className="plan-lefts">
          <h3>Premium Plan</h3>
          <ul >
            <li>Client's Name</li>
            <li>Card Color</li>
            <li>Occupation & Details</li>
            <li>Social Media Handles</li>
            <li>Logo/Icon</li>
          </ul>
          <div className="price">$799</div>
        </div>
        <div className="plan-rights">
          The Premium Plan offers enhanced features including logo/icon integration, custom themes, and richer personalization. This package suits small business owners and creatives who want to stand out and convey their brand identity effectively online. Social handles and tailored design options included.
        </div>
      </div>

      <div className="plan-boxs">
        <div className="plan-lefts">
          <h3>Corporate Plan</h3>
          <ul >
            <li>Team Names</li>
            <li>Department & Titles</li>
            <li>Company Branding</li>
            <li>Social Links</li>
            <li>Email ID</li>
          </ul>
          <div className="price">$999</div>
        </div>
        <div className="plan-rights">
          Ideal for companies and teams, the Corporate Plan provides card setups for multiple employees with consistent branding. It includes job titles, email IDs, and tailored design to align with the company's identity. Great for internal and external networking and brand reinforcement.
        </div>
      </div>

      <div className="plan-boxs">
        <div className="plan-lefts">
          <h3>Album Frame Plan</h3>
            <ul >
            <li>Client's Name</li>
            <li>Event Theme</li>
            <li>Frame & Layout</li>
            <li>Social Handles</li>
          </ul>
          <div className="price">$599</div>
        </div>
        <div className="plan-rights">
          Tailored for events like weddings or celebrations, this plan includes an album-themed digital card with photo frames and matching design layouts. It helps your guests remember and connect after the event, while making your occasion more memorable and shareable.
        </div>
      </div>
    </section>
    </div>
    <Footer/>
    </>
  );
}
