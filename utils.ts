interface Stats {
  height: number;
  weight: number;
}

interface Exercises {
  target: number;
  hours: number[];
}

const isNotNumber = (val: unknown): boolean => {
  return !isNaN(Number(val));
};

export const parseBMICalculatorArguments = (args: string[]): Stats => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (isNotNumber(args[2]) && isNotNumber(args[3])) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

export const parseExerciseCalculatorArguments = (args: string[]): Exercises => {
  if (args.length < 4) throw new Error("Not enough arguments");

  const [_first, _second, target, ...hours] = args;

  if (isNotNumber(target) && hours.find((h) => isNotNumber(h))) {
    return {
      target: Number(target),
      hours: hours.map((h) => Number(h)),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};
