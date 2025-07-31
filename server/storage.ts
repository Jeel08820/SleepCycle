import { 
  type User, 
  type InsertUser, 
  type SleepCalculation, 
  type InsertSleepCalculation,
  type SleepTip,
  type InsertSleepTip
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Sleep calculation methods
  saveSleepCalculation(calculation: InsertSleepCalculation): Promise<SleepCalculation>;
  getUserSleepCalculations(userId: string, limit?: number): Promise<SleepCalculation[]>;
  getRecentSleepCalculations(limit?: number): Promise<SleepCalculation[]>;
  
  // Sleep tips methods
  getAllSleepTips(): Promise<SleepTip[]>;
  getSleepTipsByCategory(category: string): Promise<SleepTip[]>;
  createSleepTip(tip: InsertSleepTip): Promise<SleepTip>;
}

export class InMemoryStorage implements IStorage {
  private users: User[] = [];
  private sleepCalculations: SleepCalculation[] = [];
  private sleepTips: SleepTip[] = [
    {
      id: "1",
      title: "Maintain a Sleep Schedule",
      description: "Go to bed and wake up at the same time every day, even on weekends.",
      category: "routine",
      isActive: true,
      createdAt: new Date()
    },
    {
      id: "2",
      title: "Create a Bedtime Ritual",
      description: "Develop a relaxing pre-sleep routine to signal your body it's time to wind down.",
      category: "routine",
      isActive: true,
      createdAt: new Date()
    },
    {
      id: "3",
      title: "Optimize Your Sleep Environment",
      description: "Keep your bedroom cool, dark, and quiet for the best sleep quality.",
      category: "environment",
      isActive: true,
      createdAt: new Date()
    }
  ];
  private nextId = 1;

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      ...insertUser,
      id: (this.nextId++).toString(),
      createdAt: new Date()
    };
    this.users.push(user);
    return user;
  }

  // Sleep calculation methods
  async saveSleepCalculation(calculation: InsertSleepCalculation): Promise<SleepCalculation> {
    const saved: SleepCalculation = {
      ...calculation,
      id: (this.nextId++).toString(),
      userId: calculation.userId || null,
      isOptimal: calculation.isOptimal || null,
      createdAt: new Date()
    };
    this.sleepCalculations.push(saved);
    return saved;
  }

  async getUserSleepCalculations(userId: string, limit = 10): Promise<SleepCalculation[]> {
    return this.sleepCalculations
      .filter(calc => calc.userId === userId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }

  async getRecentSleepCalculations(limit = 50): Promise<SleepCalculation[]> {
    return this.sleepCalculations
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }

  // Sleep tips methods
  async getAllSleepTips(): Promise<SleepTip[]> {
    return this.sleepTips
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getSleepTipsByCategory(category: string): Promise<SleepTip[]> {
    return this.sleepTips
      .filter(tip => tip.category === category)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createSleepTip(tip: InsertSleepTip): Promise<SleepTip> {
    const saved: SleepTip = {
      ...tip,
      id: (this.nextId++).toString(),
      isActive: tip.isActive || null,
      createdAt: new Date()
    };
    this.sleepTips.push(saved);
    return saved;
  }
}

export const storage = new InMemoryStorage();
