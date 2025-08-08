import {
  CategoryGroupRelatedType,
  CategoryGroupType,
  CategoryType,
} from "../models/categories";

const sampleRelatedCategoryGroups: CategoryGroupRelatedType[] = [
  {
    id: 1,
    name: "Web Development",
    slug: "web-development",
  },
  {
    id: 2,
    name: "Data Science",
    slug: "data-science",
  },
];

export const sampleCategories: CategoryType[] = [
  {
    id: 101,
    name: "Frontend",
    slug: "frontend",
    num_posts: 150,
    group: sampleRelatedCategoryGroups[0],
  },
  {
    id: 102,
    name: "Backend",
    slug: "backend",
    num_posts: 100,
    group: sampleRelatedCategoryGroups[0],
  },
];

const sampleCategoryGroup: CategoryGroupType = {
  id: 1,
  name: "Web Development",
  kor_name: "웹 개발",
  slug: "web-development",
  icon: "web",
  categories: sampleCategories,
};

export const sampleCategoryGroups: CategoryGroupType[] = [
  sampleCategoryGroup,
  {
    id: 2,
    name: "Data Science",
    kor_name: "데이터 과학",
    slug: "data-science",
    icon: "data-science",
    categories: [
      {
        id: 201,
        name: "Machine Learning",
        slug: "machine-learning",
        num_posts: 120,
        group: sampleRelatedCategoryGroups[1],
      },
      {
        id: 202,
        name: "Data Visualization",
        slug: "data-visualization",
        num_posts: 80,
        group: sampleRelatedCategoryGroups[1],
      },
    ],
  },
];
