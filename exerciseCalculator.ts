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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
