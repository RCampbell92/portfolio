import Title from "../Title";

const Skills = () => {
  return (
    <div className="page">
      <Title>Skills</Title>
      <div className="paragraph-image-container">
        <div className="intro">
          <p>I am proficient in the following skills:</p>
          <ul>
            <li>HTML, CSS, JS</li>
            <li>Python</li>
            <li>C# and Unity</li>
            <li>React</li>
            <li>Django</li>
          </ul>
        </div>
        <img src="/skills.png" className="img-skills"></img>
      </div>
    </div>
  );
};

export default Skills;
