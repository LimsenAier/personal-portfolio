import { useNavigate } from "react-router-dom";

function NagaShawls() {
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
            01 · AI / ML · MOBILE APPLICATION
          </p>

          <h1>
            NAGA SHAWLS
            <br />
            <span>IDENTIFIER</span>
          </h1>

          <p className="project-page-intro">
            A machine-learning based mobile application designed
            to identify traditional Naga shawls from images.
          </p>

        </div>


        <div className="project-detail-grid">

          <div>
            <p className="detail-label">PROJECT TYPE</p>
            <p>AI / Machine Learning</p>
          </div>

          <div>
            <p className="detail-label">PLATFORM</p>
            <p>Mobile Application</p>
          </div>

          <div>
            <p className="detail-label">ROLE</p>
            <p>Developer / ML</p>
          </div>

          <div>
            <p className="detail-label">TECHNOLOGIES</p>
            <p>React Native · Expo · Python · PyTorch</p>
          </div>

        </div>


        <section className="project-section">

          <p className="detail-label">01 · OVERVIEW</p>

          <h2>About the project</h2>

          <p>
            Naga Shawls Identifier is a mobile application developed
            to help users identify traditional Naga shawls from
            photographs.
          </p>

          <p>
            The project combines mobile application development
            with computer vision and machine learning to create
            an image-based classification system.
          </p>

        </section>


        <section className="project-section">

          <p className="detail-label">02 · OBJECTIVE</p>

          <h2>The problem</h2>

          <p>
            Traditional Naga shawls contain distinctive patterns,
            colours and designs associated with different Naga
            communities. Identifying them manually can require
            knowledge of these traditional characteristics.
          </p>

          <p>
            The objective of this project is to explore how
            computer vision and machine learning can assist in
            identifying these shawls from images.
          </p>

        </section>


        <section className="project-section">

          <p className="detail-label">03 · MACHINE LEARNING</p>

          <h2>Computer vision pipeline</h2>

          <div className="tech-box">

            <div>
              <span>FEATURE EXTRACTION</span>
              <strong>ResNet50</strong>
            </div>

            <div>
              <span>FEATURE EXTRACTION</span>
              <strong>VGG16</strong>
            </div>

            <div>
              <span>FEATURE EXTRACTION</span>
              <strong>ConvNeXt</strong>
            </div>

            <div>
              <span>CLASSIFICATION</span>
              <strong>Machine Learning Models</strong>
            </div>

          </div>

        </section>


        <section className="project-section">

          <p className="detail-label">04 · MOBILE APPLICATION</p>

          <h2>Application</h2>

          <p>
            The mobile application was developed using React Native
            and Expo. Users can capture a shawl image using the
            camera or select an image from their device.
          </p>

          <p>
            The application provides a simple interface designed
            to make the identification process accessible to users.
          </p>

        </section>


        <section className="project-section">

          <p className="detail-label">05 · TECHNOLOGY STACK</p>

          <h2>Built with</h2>

          <div className="technology-list">

            <span>React Native</span>
            <span>Expo</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>PyTorch</span>
            <span>ResNet50</span>
            <span>VGG16</span>
            <span>ConvNeXt</span>
            <span>Computer Vision</span>
            <span>Git</span>

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

export default NagaShawls;