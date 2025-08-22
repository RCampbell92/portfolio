import Title from "../../Title";

const RenoCalculators = () => {
  return (
    <div>
      <Title>Renovation Calculators</Title>
      <div className="paragraph-image-container">
        <p className="info">
          This website makes it easy to calculate how much materials you need
          and how much it costs. It automatically gets prices from websites
          daily, such as Bunnings and Mitre 10.
        </p>
        <img src="./renocalculators-screenshot.png"></img>
      </div>
      <h1>Features</h1>
      <p className="info">
        <b>1. Three types of calculators: </b>
        Three different calculators to help your research into renovations:
        Paint, flooring and plaster. Select a product (if applicable). Enter the
        width, length and height of your room. Alternatively, just enter the
        perimeter. Include the ceiling if you want. Click "Calculate" to get an
        estimate on amount of materials and price.
        <br />
        <b>2. Prices updated automatically: </b>
        Every day, python scripts are run on a schedule to collect the prices of
        all products listed in the calculators. The products come from Bunnings
        and Mitre 10.
      </p>
    </div>
  );
};

export default RenoCalculators;
