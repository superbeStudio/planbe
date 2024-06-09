export {};

declare global {
  type CategoryType = "G" | "E";

  type Category = {
    categorySequence: number;
    categoryName: string;
    categoryType: CategoryType;
    userSequence: number;
    createDatetime: string;
    updateDatetime: string;
  };

  type CreateCategoryParams = {
    categoryName: string;
    categoryType: CategoryType;
  };

  type EditCategoryParams = {
    categorySequence: number;
    categoryName: string;
    categoryType: CategoryType;
  };
}
