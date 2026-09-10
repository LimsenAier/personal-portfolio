function Exploring() {

  const areas = [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Full-Stack Development",
    "Mobile Application Development",
    "Generative AI"
  ];

  return (
    <section className="section">

      <div className="section-heading">
        <p>05</p>
        <h2>CURRENTLY EXPLORING</h2>
      </div>

      <div className="exploring-list">

        {areas.map((area, index) => (
          <div className="exploring-item" key={area}>

            <span>
              0{index + 1}
            </span>

            <p>{area}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Exploring;