const categories = (bmi: number): string => {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal (healthy weight)";
  } else if (bmi >= 15 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

// height = cm, weight = kg
const calculateBmi = (height: number, weight: number): string => {
  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  return categories(bmi);
};

console.log(calculateBmi(180, 74));
