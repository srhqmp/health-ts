/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";

import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

const app = express();

app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;
  if (!height || !weight) {
    return res.status(400).json({ error: "malformatted parameters" });
  }
  const bmi = calculateBmi(Number(height), Number(weight));
  return res.status(200).json({ weight, height, bmi });
});

app.post("/exercises", (req, res) => {
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    return res.status(400).send({ error: "parameters missing" });
  }
  if (
    isNaN(Number(target)) ||
    daily_exercises.find((h: string) => isNaN(Number(h)))
  ) {
    return res.status(400).send({ error: "malformatted parameters" });
  }

  const exercises = daily_exercises.map((h: unknown) => Number(h));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculateExercises(exercises, Number(target));
  return res.json(result);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Server starts on PORT", PORT);
});
