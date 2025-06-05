import React from 'react';
import { Download, Mail, Phone, Linkedin, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Curriculum.css';

function Curriculum() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CVitae/documents/JavierLuisCastillo_CV.pdf';
    link.download = 'JavierLuisCastillo_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page-container">
      <header className="curriculum-header">
        <div className="header-content">
          <h1 className="main-title">
            <span>Javier</span>{' '}
            <span className="name-highlight">Luis Castillo Solórzano</span>
          </h1>
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <span>Monterrey, Mexico</span>
            </div>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <Link to="mailto:lucaso.javier@gmail.com" className="contact-link">
                lucaso.javier@gmail.com
              </Link>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <Link to="https://wa.me/525585756693" className="contact-link">+52 5585756693</Link>
            </div>
            <div className="contact-item">
              <Linkedin size={18} className="contact-icon" />
              <Link 
                to="http://linkedin.com/in/javierluiscastillosolorzano" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                javierluiscastillosolorzano
              </Link>
            </div>
          </div>
          <button onClick={handleDownloadCV} className="btn-primary">
            <Download size={20} />
            Download CV (PDF)
          </button>
        </div>
      </header>

      <div className="main-content">
        {/* Profile Section */}
        <section className="section">
          <h2 className="section-title">Profile</h2>
          <div className="card">
            <p className="card-description">
              Computer Technology Engineering student with a strong foundation in web development, 
              data science, and leadership. Experience in project management, brand promotion, and 
              event organization. High-performance athlete representing my University.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="card">
            <div className="card-header">
              <div className="card-group">
                <div className="card-title-group">
                  <h3 className="card-title">ITESM Campus Monterrey</h3>
                  <p className="card-subtitle">Engineering in Computer Science and Technology</p>
                </div>
                <span className="card-date">Graduation June 2027</span>
              </div>
            </div>
            <p className="card-location">Monterrey, Mexico</p>
          </div>
          
          <div className="card">
            <div className="card-header">
              <div className="card-group">
              <div className="card-title-group">
                <h3 className="card-title">PREPATEC Campus Santa Fe</h3>
                <p className="card-subtitle">Sports Excellence Recognition and Borrego Dorado Nomination</p>
              </div>
                <span className="card-date">August 2019 - June 2022</span>
              </div>
            </div>
            <p className="card-location">Mexico City, Mexico</p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section">
          <h2 className="section-title">Experience</h2>
          <div className="card">
            <div className="card-header">
              <div className="card-group">
                <div className="card-title-group">
                  <h3 className="card-title">IBM -- Internship</h3>
                  <p className="card-subtitle">Technical Sales</p>
                  </div>
                  <span className="card-date">June 2025 - PRESENT</span>
              </div>
            </div>
            <p className="card-location">Monterrey, Mexico</p>
            <ul className="bullet-list">
              <li className="bullet-item">
                <span>Intern at IBM Technical Sales gaining experience in product development and sales operations.</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-group">
                <div className="card-title-group">
                  <h3 className="card-title">Proyecto Solidario</h3>
                  <p className="card-subtitle">Web Developer [Social Service]</p>
                </div>
                <span className="card-date">January 2025 - February 2025</span>
              </div>
            </div>
            <p className="card-location">Monterrey, Mexico</p>
            <ul className="bullet-list">
              <li className="bullet-item">
                <span>Responsible for development, updates, and maintenance of digital platform for geriatric medical procedures for the Nuevo Leon government.</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-group">
              <div className="card-title-group">
                <h3 className="card-title">Huellas Que Trascienden</h3>
                <p className="card-subtitle">Website Administrator [Social Service]</p>
                </div>
                <span className="card-date">August 2024 - December 2024</span>
              </div>
            </div>
            <p className="card-location">Monterrey, Mexico</p>
            <ul className="bullet-list">
              <li className="bullet-item">
                <span>
                  In charge of development, updates, and maintenance of the website{' '}
                  <Link 
                    to="https://artisan2you.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    artisan2you.com
                    <ExternalLink size={14} />
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-group">
              <div className="card-title-group">
                <h3 className="card-title">Snapchat</h3>
                <p className="card-subtitle">Student Ambassador</p>
                </div>
                <span className="card-date">August 2023 - December 2023</span>
              </div>
            </div>
            <p className="card-location">Monterrey, Mexico</p>
            <ul className="bullet-list">
              <li className="bullet-item">
                <span>Responsible for developing and implementing brand activations at Tec Campus Monterrey.</span>
              </li>
              <li className="bullet-item">
                <span>Responsible for mentoring and motivating emerging brand ambassadors.</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-group">
              <div className="card-title-group">
                <h3 className="card-title">Snapchat</h3>
                <p className="card-subtitle">Ambassador and Sponsor</p>
                </div>
                <span className="card-date">August 2022 - July 2023</span>
              </div>
            </div>
            <p className="card-location">Mexico City, Mexico</p>
            <ul className="bullet-list">
              <li className="bullet-item">
                <span>Responsible for developing plans to increase brand awareness with students from various universities in Mexico City (including Tec CSF, Ibero, etc.) through activations, events, and social media.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Leadership and Activities */}
        <section className="section">
          <h2 className="section-title">Leadership and Activities</h2>
          <div className="card">
            <div className="card-header">
              <div className="card-group">
                <div className="card-title-group">
                  <h3 className="card-title">Basketball Varsity Team Div-I</h3>
                  </div>
                  <span className="card-date">2022 - Present</span>
              </div>
            </div>
            <p className="card-location">Monterrey, Mexico</p>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-group">
              <div className="card-title-group">
                <h3 className="card-title">Participation in Rocket Hackathon 2024</h3>
                </div>
              </div>
            </div>
            <p className="card-location">Monterrey, Mexico</p>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-group">
              <div className="card-title-group">
                <h3 className="card-title">Director of Partnerships and Sponsorships at Data Science Club Tec MTY</h3>
                </div>
                <span className="card-date">August 2024 - July 2025</span>
              </div>
            </div>
            <p className="card-location">Monterrey, Mexico</p>
            <ul className="bullet-list">
              <li className="bullet-item">
                <span>Development of the 4th edition of Datathon (Latin America's largest student Hackathon)</span>
              </li>
              <li className="bullet-item">
                <span>Business Relations and Corporate Outreach</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section">
          <h2 className="section-title">Skills and Interests</h2>
          <div className="skills-grid">
            <div className="skills-category">
              <h3 className="skills-title">Technical</h3>
              <div>
                {['Advanced Python', 'Advanced C++', 'HTML & CSS', 'GIT', 'MySQL', 'Machine Learning'].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-title">Languages</h3>
              <div className="language-item">
                <span className="language-name">Spanish</span>
                <span className="language-level">Native</span>
              </div>
              <div className="language-item">
                <span className="language-name">English</span>
                <span className="language-level">Fluent</span>
              </div>
              <div className="language-item">
                <span className="language-name">French</span>
                <span className="language-level">Intermediate</span>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-title">Soft Skills</h3>
              <div>
                {['Leadership', 'Teamwork', 'Problem Solving', 'Multitasking'].map((skill) => (
                  <span key={skill} className="soft-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="download-section">
          <div className="download-card">
            <h3 className="download-title">Interested in my profile?</h3>
            <p className="download-description">Download my complete CV in PDF format</p>
            <button
              onClick={handleDownloadCV}
              className="btn-secondary"
            >
              <Download size={20} />
              Download Complete CV
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Curriculum;