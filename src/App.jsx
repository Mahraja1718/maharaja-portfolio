
import "./App.css";
import profilePhoto from "./assets/maharaja-photo.jpeg";

import hrScreenshot from "./assets/HR DATASET.png";
import healthcareScreenshot from "./assets/HEALTH CARE.png";
import hotelScreenshot from "./assets/HOTEL BOOKING.png";
import salesScreenshot from "./assets/SALES DASHBOARD.png";

const skills = [
  "Python",
  "SQL",
  "Excel",
  "Power BI",
  "Tableau",
  "Pandas",
  "NumPy",
  "MySQL",
  "DAX",
  "Data Cleaning",
  "EDA",
  "Data Visualization",
];

const projects = [
  {
    number: "01",
    title: "Sales Dashboard",
    category: "Power BI",
    description:
      "An interactive sales dashboard analyzing revenue, profit, product performance, and business trends.",
    tools: "Power BI • DAX • Excel",
    link: "https://github.com/Mahraja1718/Power-BI/blob/main/POWER%20PI/sales%20dashboard.pbix",
    image: salesScreenshot,
  },
  {
    number: "02",
    title: "HR Dataset Analysis",
    category: "Power BI",
    description:
      "An HR analytics dashboard exploring employee data, attrition, workforce trends, and key HR metrics.",
    tools: "Power BI • DAX • Data Analysis",
    link: "https://github.com/Mahraja1718/Power-BI-Project/blob/main/HR%20Dataset.pbix",
    image: hrScreenshot,
  },
  {
    number: "03",
    title: "Healthcare Analysis",
    category: "Power BI",
    description:
      "A healthcare dashboard analyzing patient visits, ratings, and operational performance.",
    tools: "Power BI • DAX • Excel",
    link: "https://github.com/Mahraja1718/Power-BI-Project/blob/main/healthcare%20dataset.pbix",
    image: healthcareScreenshot,
  },
  {
    number: "04",
    title: "Global Layoffs Analysis",
    category: "SQL",
    description:
      "An exploratory analysis identifying global layoff patterns, industries, and company trends.",
    tools: "MySQL • SQL • EDA",
    link: "https://github.com/Mahraja1718/Mysql-project/blob/main/project1.sql",
    visual: "sql",
    visualTitle: "GLOBAL LAYOFFS",
    visualSubtitle: "SQL • Trends • Insights",
  },
  {
    number: "05",
    title: "Housing Price Analysis",
    category: "Tableau",
    description:
      "A visualization project exploring housing prices and property-related trends.",
    tools: "Tableau • Data Visualization",
    link: "https://github.com/Mahraja1718/Tableau/tree/main/TABLEAU",
    visual: "tableau",
    visualTitle: "HOUSING INSIGHTS",
    visualSubtitle: "Prices • Locations • Trends",
  },
  {
    number: "06",
    title: "Hotel Booking Analysis",
    category: "Power BI",
    description:
      "An interactive report analyzing bookings, cancellations, guest metrics, and stay duration.",
    tools: "Power BI • DAX • Excel",
    link: "https://github.com/Mahraja1718/Power-BI-Project/blob/main/Hotel%20Booking%20Dataset.pbix",
    image: hotelScreenshot,
  },
  {
    number: "07",
    title: "Netflix Dataset Analysis",
    category: "Python",
    description:
      "Exploring Netflix movies and TV shows, genres, ratings, release years, and content trends.",
    tools: "Python • Pandas • Matplotlib",
    link: "https://github.com/Mahraja1718/maharaja-portfolio/tree/main/Project/Netflix-Dataset-Analysis",
    visual: "netflix",
    visualTitle: "NETFLIX DATA",
    visualSubtitle: "Movies • Shows • Genres",
  },
  {
    number: "08",
    title: "Medical Students Analysis",
    category: "Python",
    description:
      "Cleaning and analyzing medical student records, missing values, BMI, and health-related patterns.",
    tools: "Python • Pandas • NumPy",
    link: "https://github.com/Mahraja1718/maharaja-portfolio/tree/main/Project/Medical-Students-Analysis",
    visual: "medical",
    visualTitle: "STUDENT DATA",
    visualSubtitle: "Cleaning • BMI • Analysis",
  },
  {
    number: "09",
    title: "Food Delivery Analysis",
    category: "Python",
    description:
      "Analyzing food orders, delivery times, customer ratings, payment methods, and cancellations.",
    tools: "Python • Pandas • Seaborn",
    link: "https://github.com/Mahraja1718/maharaja-portfolio/tree/main/Project/Food-Delivery-Analysis",
    visual: "food",
    visualTitle: "FOOD DELIVERY",
    visualSubtitle: "Orders • Ratings • Delivery",
  },
  {
    number: "10",
    title: "E-commerce Dataset Analysis",
    category: "Python",
    description:
      "Cleaning and exploring e-commerce product data, categories, and product-related trends.",
    tools: "Python • Pandas • NumPy",
    link: "https://github.com/Mahraja1718/maharaja-portfolio/tree/main/Project/Ecommerce-Dataset-Analysis",
    visual: "ecommerce",
    visualTitle: "E-COMMERCE DATA",
    visualSubtitle: "Products • Categories • Sales",
  },
  {
    number: "11",
    title: "Excel Dashboard",
    category: "Excel",
    description:
      "An interactive dashboard using Pivot Tables, charts, and slicers to explore business data.",
    tools: "Excel • Pivot Tables • Charts",
    link: "https://github.com/Mahraja1718/Excel/tree/main/EXCEL",
    visual: "excel",
    visualTitle: "EXCEL ANALYTICS",
    visualSubtitle: "Pivot Tables • Charts • Insights",
  },
];

function App() {
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          Maharaja<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>

          <a
            href={`${import.meta.env.BASE_URL}Maharaja_K_Data_Analyst_Resume.pdf`}
            download="Maharaja_K_Data_Analyst_Resume.pdf"
            className="primary-button"
          >
            Download Resume <span>↓</span>
          </a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        {/* HOME */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              Aspiring Data Analyst
            </div>

            <p className="hero-small">HELLO, I'M</p>

            <h1>
              Maharaja <span>K.</span>
            </h1>

            <h2>
              Turning Data Into
              <br />
              <span>Meaningful Insights.</span>
            </h2>

            <p className="hero-description">
              I am an aspiring Data Analyst passionate about transforming
              raw data into meaningful insights through analysis,
              visualization, and storytelling.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work <span>↗</span>
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Mahraja1718"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/maharaja-k/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="data-card">
              <div className="card-top">
                <span>DATA ANALYTICS</span>
                <span className="card-dot">●</span>
              </div>

              <div className="chart-heading">
                <h3>Data Insights</h3>
                <p>Analyze · Visualize · Discover</p>
              </div>

              <div className="chart">
                {[35, 58, 45, 75, 55, 88, 68, 100].map(
                  (height, index) => (
                    <div className="bar-wrapper" key={index}>
                      <div
                        className="bar"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  )
                )}
              </div>

              <div className="chart-footer">
                <span>RAW DATA</span>
                <span className="chart-arrow">→</span>
                <span>INSIGHTS</span>
              </div>

              <div className="visual-tags">
                <span>Python</span>
                <span>SQL</span>
                <span>Power BI</span>
              </div>
            </div>

            <div className="floating-label">
              Data Driven Mindset ✦
            </div>
          </div>

          <div className="scroll-indicator">
            SCROLL TO EXPLORE ↓
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="section-label">01 / ABOUT ME</p>
            <h2>
              A little about <span>myself.</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-image">
              <img src={profilePhoto} alt="Maharaja K" />
            </div>

            <div className="about-text">
              <h3>
                Curious mind. Analytical thinking. Continuous learning.
              </h3>

              <p>
                I am a B.Tech Information Technology graduate with a
                strong interest in Data Analytics. I enjoy exploring
                datasets, identifying patterns, and converting complex
                information into clear and useful insights.
              </p>

              <p>
                I work with Python, SQL, Excel, Power BI, and Tableau.
                Through hands-on projects, I am continuously improving
                my analytical and technical skills.
              </p>

              <p>
                My goal is to begin my career as a Data Analyst and grow
                into a professional who helps businesses make
                data-driven decisions.
              </p>

              <a href="#contact" className="text-link">
                Let's connect <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="section-label">02 / MY SKILLS</p>
            <h2>
              Tools I work <span>with.</span>
            </h2>
            <p className="section-subtitle">
              Technologies and tools I use to explore, analyze, and
              visualize data.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{skill}</h3>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="section-label">03 / MY WORK</p>
            <h2>
              Featured <span>projects.</span>
            </h2>
            <p className="section-subtitle">
              A collection of analytical projects where I turn data into
              meaningful stories.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number} / PROJECT</span>
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-thumbnail">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                    />
                  ) : (
                    <div className={`thumbnail-art ${project.visual}`}>
                      <div className="thumbnail-grid-lines"></div>

                      <div className="thumbnail-content">
                        <span className="thumbnail-kicker">
                          DATA ANALYSIS PROJECT
                        </span>

                        <strong>{project.visualTitle}</strong>

                        <span className="thumbnail-subtitle">
                          {project.visualSubtitle}
                        </span>

                        <div className="thumbnail-bars">
                          {[35, 65, 45, 85, 55, 100, 72].map(
                            (height, index) => (
                              <span
                                key={index}
                                style={{ height: `${height}%` }}
                              ></span>
                            )
                          )}
                        </div>
                      </div>

                      <span className="thumbnail-mark">↗</span>
                    </div>
                  )}
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tools">
                  {project.tools}
                </div>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View source code for ${project.title}`}
                >
                  View Source Code <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section education-section" id="education">
          <div className="section-heading">
            <p className="section-label">04 / EDUCATION</p>
            <h2>
              My learning <span>journey.</span>
            </h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-date">2022 — 2026</div>
              <h3>B.Tech — Information Technology</h3>
              <p>SNS College of Engineering, Coimbatore</p>
              <span className="education-score">CGPA: 7.07</span>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-date">Professional Training</div>
              <h3>Data Analytics</h3>
              <p>QSpiders — Data Analytics Training</p>
              <span className="education-score">
                Practical learning and projects
              </span>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="section-heading">
            <p className="section-label">GET IN TOUCH</p>
            <h2>Let's Work Together</h2>
            <p>
              Have an opportunity or project in mind?
              I'd love to connect and discuss how I can help.
            </p>
          </div>

          <div className="contact-container">
            {/* Contact Information */}
            <div className="contact-info">
              <h3>Let's Connect</h3>

              <p>
                I'm actively looking for Data Analyst opportunities.
                Feel free to reach out!
              </p>

              <div className="contact-item">
                <span>✉️</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:maharaja1761@gmail.com">
                    maharaja1761@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span>💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/maharaja-k/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View LinkedIn Profile ↗
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span>💻</span>
                <div>
                  <h4>GitHub</h4>
                  <a
                    href="https://github.com/Mahraja1718"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub Profile ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();

                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const email = formData.get("email");
                const message = formData.get("message");

                const subject = encodeURIComponent(
                  `Portfolio Contact - ${name}`
                );

                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                );

                window.location.href =
                  `mailto:maharaja1761@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <h3>Send Me a Message</h3>

              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your message..."
                rows="5"
                required
              />

              <button type="submit" className="primary-button">
                Send Message →
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          Maharaja<span>.</span>
        </a>

        <p>Designed & built with passion.</p>
        <p>© 2026 Maharaja K. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
