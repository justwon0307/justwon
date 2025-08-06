export type LearningCategoryGroupType = {
  id: number;
  name: string;
  kor_name: string;
  slug: string;
  categories: LearningCategoryType[];
};

export type LearningCategoryType = {
  id: number;
  name: string;
  slug: string;
  num_posts: number;
  category_group_id: number;
  category_group_slug: string;
};
