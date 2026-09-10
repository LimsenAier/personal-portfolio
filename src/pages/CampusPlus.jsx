import { useNavigate } from "react-router-dom";

function CampusPlus() {
    const navigate = useNavigate();
  return (
    <div className="project-page">

      <div className="project-page-container">

        <button
         onClick={() => navigate(-1)}
        className="back-button"> 
          ← Back to Portfolio
        </button>

        <div className="project-page-header">

          <p className="project-page-label">
            02 · MOBILE APPLICATION
          </p>

          <h1>
            CAMPUS
            <br />
            <span>PLUS</span>
          </h1>

          <p className="project-page-intro">
            A campus-focused mobile application developed to
            bring useful student activities and campus-related
            functionality into a single application.
          </p>

        </div>


        <div className="project-detail-grid">

          <div>
            <p className="detail-label">PROJECT TYPE</p>
            <p>Mobile Application</p>
          </div>

          <div>
            <p className="detail-label">PLATFORM</p>
            <p>Mobile</p>
          </div>

          <div>
            <p className="detail-label">ROLE</p>
            <p>Developer</p>
          </div>

          <div>
            <p className="detail-label">TECHNOLOGIES</p>
            <p>React Native · Expo · JavaScript · Firebase</p>
          </div>

        </div>


        <section className="project-section">

          <p className="detail-label">01 · OVERVIEW</p>

          <h2>About the project</h2>

          <p>
            CampusPlus is a mobile application concept focused on
            providing students with useful campus-related features
            through a single application.
          </p>

          <p>
            The project was developed as a practical exercise in
            mobile application development and working with
            application data and user-focused interfaces.
          </p>

        </section>


        <section className="project-section">

          <p className="detail-label">02 · DEVELOPMENT</p>

          <h2>Building the application</h2>

          <p>
            The application was developed using React Native and
            Expo, allowing the interface to be developed for
            mobile platforms using JavaScript.
          </p>

          <p>
            Firebase was explored for backend-related functionality
            and application data management.
          </p>

        </section>


        <section className="project-section">

          <p className="detail-label">03 · TECHNOLOGY STACK</p>

          <h2>Built with</h2>

          <div className="technology-list">

            <span>React Native</span>
            <span>Expo</span>
            <span>JavaScript</span>
            <span>Firebase</span>
            <span>Git</span>
            <span>GitHub</span>

          </div>

        </section>


        <section className="project-page-footer">

          <h2>Want to see the code?</h2>

          <a
            href="https://github.com/LimsenAier"
            target="_blank"
            rel="noreferrer"
            className="project-button"
          >
            View on GitHub →
          </a>

        </section>

      </div>

    </div>
  );
}

export default CampusPlus;