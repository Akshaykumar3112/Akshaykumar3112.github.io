

import React from "react";
import './bmiCalculator.css';

function BmiCalculator() {
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [heightErrorMessage, setHeightErrorMessage] = React.useState("");
  const [weightErrorMessage, setWeightErrorMessage] = React.useState("");
  const [calculatedBMI, setCalculatedBMI] = React.useState("");
  const [bmiRange, setBmiRange] = React.useState("");
  const [rangeColor, setRangeColor] = React.useState("");

  const calculateBMI = () => {
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);

    if (heightValue <= 0 || isNaN(heightValue)) {
      setHeightErrorMessage("Enter valid Height");
      setCalculatedBMI("");
      return;
    }
    setHeightErrorMessage("");

    if (weightValue <= 0 || isNaN(weightValue)) {
      setWeightErrorMessage("Enter valid Weight");
      setCalculatedBMI("");
      return;
    }
    setWeightErrorMessage("");

    const bmi = weightValue / ((heightValue / 100) ** 2);
    setCalculatedBMI(bmi.toFixed(2));

    if (bmi < 18.5) {
      setRangeColor("orange");
      setBmiRange("Under BMI Range");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setRangeColor("green");
      setBmiRange("Within BMI Range");
    } else {
      setRangeColor("red");
      setBmiRange("Over BMI Range");
    }
  };

  return (
    <section className="bmi" style={{minHeight: '100vh'}} >
      <div className="container"  >
        <h1>BMI Calculator</h1>
        <div className="bmi-card">
          <label htmlFor="height">Enter Height In CM</label><br />
          <input
            type="number"
            min={0}
            name="height"
            id="height"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          /><br />
          <span style={{ color: 'red' }}>{heightErrorMessage}</span><br />
          <label htmlFor="weight">Enter Weight In KG</label><br />
          <input
            type="number"
            min={0}
            name="weight"
            id="weight"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          /><br />
          <span style={{ color: 'red' }}>{weightErrorMessage}</span><br />
          <button onClick={calculateBMI}>Calculate</button><br />
          {calculatedBMI && (
            <>
              <span id="bmi">BMI = {calculatedBMI}</span><br />
              <span style={{ color: rangeColor }}>{bmiRange}</span><br />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default BmiCalculator;

