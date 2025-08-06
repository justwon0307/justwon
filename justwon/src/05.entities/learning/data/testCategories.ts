import {
  LearningCategoryGroupType,
  LearningCategoryType,
} from "../models/categories";

export const sampleCategories: LearningCategoryType[] = [
  {
    id: 101,
    name: "Frontend",
    slug: "frontend",
    num_posts: 150,
    category_group_id: 1,
    category_group_slug: "web-development",
  },
  {
    id: 102,
    name: "Backend",
    slug: "backend",
    num_posts: 100,
    category_group_id: 1,
    category_group_slug: "web-development",
  },
];

export const sampleCategoryGroups: LearningCategoryGroupType[] = [
  {
    id: 1,
    name: "Web Development",
    kor_name: "웹 개발",
    slug: "web-development",
    categories: sampleCategories,
  },
  {
    id: 2,
    name: "Data Science",
    kor_name: "데이터 과학",
    slug: "data-science",
    categories: [
      {
        id: 201,
        name: "Machine Learning",
        slug: "machine-learning",
        num_posts: 120,
        category_group_id: 2,
        category_group_slug: "data-science",
      },
      {
        id: 202,
        name: "Data Visualization",
        slug: "data-visualization",
        num_posts: 80,
        category_group_id: 2,
        category_group_slug: "data-science",
      },
    ],
  },
];
