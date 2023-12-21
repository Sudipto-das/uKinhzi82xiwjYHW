import React, { useState } from 'react';
import { z } from 'zod';
import { Link } from 'react-router-dom';
const BmiInputSchema = z.object({
  height: z
    .number()
    .positive({ message: 'Height must be a positive number' })
    .min(0.1, { message: 'Height must be greater than or equal to 0.1' })
    .max(3.0, { message: 'Height must be less than or equal to 3.0' }),
  weight: z
    .number()
    .positive({ message: 'Weight must be a positive number' })
    .min(1, { message: 'Weight must be greater than or equal to 1' })
    .max(300, { message: 'Weight must be less than or equal to 300' }),
});

function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);
  const [heightError, setHeightError] = useState(null);
  const [weightError, setWeightError] = useState(null);

  const handleHeightChange = (event) => {
    const value = event.target.value;
    setHeight(value);
    setHeightError(null); 
  };

  const handleWeightChange = (event) => {
    const value = event.target.value;
    setWeight(value);
    setWeightError(null); 
  };

  const calculateBMI = () => {
    try {
      const inputData = BmiInputSchema.parse({
        height: Number(height),
        weight: Number(weight),
      });
      const bmi = calculateBMIValue(inputData.height, inputData.weight);
      setResult(bmi);
      
    } catch (validationError) {
      setResult(null) // clear the result 
      if (validationError instanceof z.ZodError) {
        validationError.errors.forEach((error) => {
          if (error.path[0] === 'height') {
            setHeightError(error.message);
          } else if (error.path[0] === 'weight') {
            setWeightError(error.message);
          }
        });
      } else {
        setResult(null);
      }
    }
  };

  const calculateBMIValue = (height, weight) => {
    return (weight / Math.pow(height, 2)).toFixed(2);
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label htmlFor='height'>Height (m): </label>
        <input
          id='height'
          type="number"
          value={height}
          onChange={(e) => handleHeightChange(e)}
          placeholder="Enter height (0.1 - 3.0)"
        />
        {heightError && <p style={{ color: 'red' }}>{heightError}</p>}
      </div>
      <br />
      <div>
        <label htmlFor='weight'>Weight (kg): </label>
        <input
          id='weight'
          type="number"
          value={weight}
          onChange={(e) => handleWeightChange(e)}
          placeholder="Enter weight (1.0 - 300.0)"
        />
        {weightError && <p style={{ color: 'red' }}>{weightError}</p>}
      </div>
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {result !== null && <p>Your BMI is: {result}</p>}

      <br />
      <br />
      <Link to={'/'}>Back to Previous Page</Link>
    </div>
    
  );
}

export default BmiCalculator;
