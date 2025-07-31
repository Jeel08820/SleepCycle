import { z } from "zod";

// Schemas
export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const insertSleepCalculationSchema = z.object({
  userId: z.string().optional(),
  calculationType: z.string(), // 'wakeup' or 'bedtime'
  inputTime: z.string(), // The time user input (wake time or current time)
  targetTime: z.string(), // The calculated result time
  sleepCycles: z.number(),
  totalSleepHours: z.string(),
  isOptimal: z.boolean().optional(),
});

export const insertSleepTipSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(), // 'duration', 'schedule', 'environment', etc.
  isActive: z.boolean().optional(),
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = {
  id: string;
  username: string;
  password: string;
  createdAt: Date;
};

export type InsertSleepCalculation = z.infer<typeof insertSleepCalculationSchema>;
export type SleepCalculation = {
  id: string;
  userId: string | null;
  calculationType: string;
  inputTime: string;
  targetTime: string;
  sleepCycles: number;
  totalSleepHours: string;
  isOptimal: boolean | null;
  createdAt: Date;
};

export type InsertSleepTip = z.infer<typeof insertSleepTipSchema>;
export type SleepTip = {
  id: string;
  title: string;
  description: string;
  category: string;
  isActive: boolean | null;
  createdAt: Date;
};
