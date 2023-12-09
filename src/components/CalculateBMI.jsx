import { useState } from "react"
const CalculateBmi = () =>{


    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi,setBmi] = useState(null)

    const BmiCalculate = () =>{
        const weightValue = parseFloat(weight)
        const heightValue = parseFloat(height)

        if (isNaN(weightValue) || isNaN(heightValue)) {
            alert('Please enter valid numeric values for weight and height.');
            return;
          }
      
          if (weightValue < 1.0 || weightValue > 300.0 || heightValue < 0.1 || heightValue > 3.0) {
            alert('Please enter valid values for weight (1.0 - 300.0) and height (0.1 - 3.0).');
            return;
          }
      
          const bmiValue = weightValue / Math.pow(heightValue, 2);
          setBmi(bmiValue.toFixed(1));
        };
        return (
            <div>
              <h2>BMI Calculator</h2>
              <div>
                <label>Weight (kg):</label>
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter weight (1.0 - 300.0)"
                />
              </div>
              <div>
                <label>Height (m):</label>
                <input
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter height (0.1 - 3.0)"
                />
              </div>
              <button onClick={BmiCalculate}>Calculate BMI</button>
        
              {bmi !== null && (
                <div style={{ marginTop: '20px' }}>
                  <h3>Your BMI is: {bmi}</h3>
                </div>
              )}
            </div>
          );
}
export default CalculateBmi;