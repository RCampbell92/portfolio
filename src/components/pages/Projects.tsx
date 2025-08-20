import Title from "../Title";

const Projects = () => {
  return (
    <div>
      <Title>Projects</Title>
      <div className="project">
        <h1>
          <a href="/renocalculators">Renovation Calculators</a>
        </h1>
        <div className="paragraph-image-container">
          <p className="info">
            This website makes it easy to calculate how much materials you need
            and how much it costs. It automatically gets prices from websites
            daily, such as Bunnings and Mitre 10.
          </p>
          <img src="/renocalculators-screenshot.png" width={600}></img>
        </div>
      </div>

      <div className="project">
        <h1>Nhill Silos</h1>
        <div className="paragraph-image-container">
          <p className="info">
            I built this website for my parents business. They run a grain silo
            manufacturing company. It includes a dynamic price list, where you
            can select a size, cone angle and whether or not it needs a safety
            ladder, and you'll get a price in return.
          </p>
          <img src="/nhill-silos-screenshot.png" width={600}></img>
        </div>
      </div>

      <div className="project">
        <h1>Wonky Train</h1>
        <div className="paragraph-image-container">
          <p className="info">
            This is my latest game, built in Unity. It's a 3D physics-based game
            where you drive a train to deliver goods, make money and upgrade
            your train.
          </p>
          <div>
            <img src="/wonky-train1.png" width={600}></img>
            <img src="/wonky-train2.png" width={600}></img>
            <img src="/wonky-train3.png" width={600}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
