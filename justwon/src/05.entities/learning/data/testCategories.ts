import { LearningCategoryGroupType, LearningCategoryType } from "../models/categories";

export const sampleCategories: LearningCategoryType[] = [
      {
        id: 101,
        name: "Frontend",
        num_posts: 150,
      },
      {
        id: 102,
        name: "Backend",
        num_posts: 200,
      },
    ]

export const sampleCategoryGroups: LearningCategoryGroupType[] = [
  {
    id: 1,
    name: "Web Development",
    kor_name: "웹 개발",
    categories: sampleCategories,
  },
  {
    id: 2,
    name: "Data Science",
    kor_name: "데이터 과학",
    categories: [
      {
        id: 201,
        name: "Machine Learning",
        num_posts: 120,
      },
      {
        id: 202,
        name: "Data Visualization",
        num_posts: 80,
      },
    ],
  },
]
