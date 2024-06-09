import { parseExerciseCalculatorArguments } from "./utils";

interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface Rating {
  rating: number;
  ratingDescription: string;
}

const getRating = (success: boolean, exercisedDaily: boolean): Rating => {
  if (success && exercisedDaily) {
    return {
      rating: 3,
      ratingDescription: "Excellent! Keep up the good work!",
    };
  } else if (success) {
    return {
      rating: 2,
      ratingDescription: "Not too bad but could be better",
    };
  }
  return {
    rating: 1,
    ratingDescription: "It's not too late to improve yourself",
  };
};

const calculateExercises = (
  exerciseHours: number[],
  target: number
): ExerciseResult => {
  const periodLength = exerciseHours.length;
  const trainingDays = exerciseHours.filter((h) => h).length;
  const average =
    exerciseHours.reduce((sum, curr) => sum + curr, 0) / exerciseHours.length;
  const success = average >= target;
  const { rating, ratingDescription } = getRating(
    success,
    periodLength === trainingDays
  );

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

try {
  const { target, hours } = parseExerciseCalculatorArguments(process.argv);
  console.log(calculateExercises(hours, target));
} catch (error: unknown) {
  let errorMessage = "Something went wrong.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}

// npm run calculateExercises 2 1 0 2 4.5 0 3 1 0 4
// { periodLength: 9,
//     trainingDays: 6,
//     success: false,
//     rating: 2,
//     ratingDescription: 'not too bad but could be better',
//     target: 2,
//     average: 1.7222222222222223
//   }
