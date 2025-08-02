export type LearningCategoryGroupType = {
  id: number;
  name: string;
  kor_name: string;
  categories: LearningCategoryType[];
};

export type LearningCategoryType = {
  id: number;
  name: string;
  num_posts: number;
};
