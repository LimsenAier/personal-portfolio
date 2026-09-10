function About() {
  return (
    <section id="about" className="section">

      <div className="section-heading">
        <p>01</p>
        <h2>ABOUT ME</h2>
      </div>

      <div className="about-grid">

        <div className="about-text">

          <h3>
            Engineering student.
            <br />
            Developer.
            <br />
            Constantly learning.
          </h3>

          <p>
            I'm Limsen, an Electrical and Electronics Engineering
            student at NIT Nagaland, currently pursuing my B.Tech
            degree and expected to graduate in 2028.
          </p>

          <p>
            My interests extend beyond core engineering into
            software development, mobile applications, artificial
            intelligence and machine learning.
          </p>

          <p>
            I enjoy turning ideas into practical applications and
            learning new technologies through hands-on projects.
          </p>

        </div>

        <div className="about-card">

          <div>
            <span>EDUCATION</span>
            <strong>
              B.Tech
              <br />
              Electrical & Electronics Engineering
            </strong>
          </div>

          <div>
            <span>INSTITUTE</span>
            <strong>NIT Nagaland</strong>
          </div>

          <div>
            <span>GRADUATION</span>
            <strong>2028</strong>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;