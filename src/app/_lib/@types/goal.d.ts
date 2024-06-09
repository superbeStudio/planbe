export type GoalList = {
  goalSequence: number;
  goalName: string;
  categorySequence: number;
  categoryName: string;
  goalAmount: number;
  priority: number;
  goalTime: string;
  goalUrl: string;
  createDatetime: string;
  updateDatetime: string;
};

export type CreateGoalBody = {
  goalName: string;
  categorySequence: number;
  goalAmount: number;
  priority: number;
  goalTime: string;
  goalUrl: string;
};
