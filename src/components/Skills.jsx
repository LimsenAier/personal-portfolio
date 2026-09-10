function Skills() {

  const skillGroups = [
    {
      title: "PROGRAMMING",
      skills: ["JavaScript", "Python", "MATLAB"]
    },
    {
      title: "DEVELOPMENT",
      skills: ["ReactJS", "React Native", "Expo", "HTML", "CSS"]
    },
    {
      title: "AI / MACHINE LEARNING",
      skills: [
        "ResNet50",
        "VGG16",
        "ConvNeXt",
        "Computer Vision",
        "Image Classification"
      ]
    },
    {
      title: "TOOLS",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Google Colab",
        "Android Studio",
        "Firebase"
      ]
    }
  ];

  return (
    <section id="skills" className="section">

      <div className="section-heading">
        <p>02</p>
        <h2>SKILLS</h2>
      </div>

      <div className="skills-grid">

        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>

            <span>{group.title}</span>

            <div className="skill-list">

              {group.skills.map((skill) => (
                <div className="skill-item" key={skill}>
                  {skill}
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;