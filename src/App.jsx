
import "./App.css";
import profilePhoto from "./assets/maharaja-photo.jpeg";

const skills = [
  "Python", "SQL", "Excel", "Power BI",
  "Tableau", "Pandas", "NumPy", "MySQL",
  "DAX", "Data Cleaning", "EDA", "Data Visualization",
];

const projects = [
  {
    number: "01",
    title: "Sales Dashboard",
    category: "Power BI",
    description: "An interactive sales dashboard to analyze revenue, profit, product performance, and business trends.",
    tools: "Power BI • DAX • Excel",
  },
  {
    number: "02",
    title: "Hospital Data Analysis",
    category: "Power BI",
    description: "A hospital analytics report exploring patient information, hospital performance, and healthcare metrics.",
    tools: "Power BI • DAX • Data Analysis",
  },
  {
    number: "03",
    title: "Healthcare Analysis",
    category: "Power BI",
    description: "A healthcare dashboard designed to understand patient visits, ratings, and operational performance.",
    tools: "Power BI • DAX • Excel",
  },
  {
    number: "04",
    title: "Global Layoffs Analysis",
    category: "SQL",
    description: "An exploratory data analysis project identifying global layoff patterns, industries, and company trends.",
    tools: "MySQL • SQL • EDA",
  },
  {
    number: "05",
    title: "Housing Price Analysis",
    category: "Tableau",
    description: "A visualization project exploring housing prices and property-related trends.",
    tools: "Tableau • Data Visualization",
  },
  {
    number: "06",
    title: "Hotel Booking Analysis",
    category: "Power BI",
    description: "An interactive hotel booking report analyzing bookings, cancellations, guest metrics, and stay duration.",
    tools: "Power BI • DAX • Excel",
  },
];

function App() {
  return (
    <div className="portfolio">
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
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        {/* HOME SECTION */}
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
                {[35, 58, 45, 75, 55, 88, 68, 100].map((height, index) => (
                  <div className="bar-wrapper" key={index}>
                    <div
                      className="bar"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                ))}
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

        {/* ABOUT SECTION */}
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

        {/* SKILLS SECTION */}
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

        {/* PROJECTS SECTION */}
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

                <div className="project-icon">↗</div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tools">
                  {project.tools}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
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

        {/* CONTACT SECTION */}
        <section className="contact-section section" id="contact">
          <p className="section-label">05 / GET IN TOUCH</p>

          <h2>
            Let's turn data
            <br />
            into <span>something meaningful.</span>
          </h2>

          <p>
            I'm looking forward to starting my career and connecting
            with people who love data and technology.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="primary-button"
            >
              Email Me ↗
            </a>

            <a
              href="https://www.linkedin.com/in/maharaja-k/"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

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
