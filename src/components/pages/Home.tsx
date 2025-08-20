import Title from "../Title";
import Button from "../Button";

const Home = () => {
  return (
    <div>
      <div className="paragraph-image-container">
        <Title>
          Hi, I'm <span className="name">Rhys Campbell</span>
        </Title>
        <img src="/portrait.png"></img>
      </div>
      <p className="intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum
        velit eget leo convallis, vel viverra velit iaculis. Etiam tempus, nunc
        eu dignissim eleifend, urna magna posuere felis, at scelerisque nulla
        risus eu orci. Sed sagittis dapibus ipsum id viverra. In convallis,
        libero at mollis aliquam, justo urna gravida lectus, a placerat ipsum
        odio non eros.
      </p>
      <span className="portfolio-link-container">
        <Button onClick={() => console.log("github")}>Github</Button>
        <Button onClick={() => console.log("github")}>Itch.io</Button>
        <Button onClick={() => console.log("github")}>X</Button>
      </span>
    </div>
  );
};

export default Home;
