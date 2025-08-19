import {
  CategoryGroupRelatedType,
  CategoryGroupType,
  CategoryGroupDetailsType,
} from "../models/category-group";
import { sampleCategories } from "./testCategories";

export const sampleRelatedCategoryGroups: CategoryGroupRelatedType[] = [
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

const sampleCategoryGroup: CategoryGroupType = {
  id: 1,
  name: "Web Development",
  slug: "web-development",
  icon: "web",
  categories: sampleCategories,
};

export const sampleCategoryGroups: CategoryGroupType[] = [
  sampleCategoryGroup,
  {
    id: 2,
    name: "Data Science",
    slug: "data-science",
    icon: "data-science",
    categories: [
      {
        id: 201,
        name: "Machine Learning",
        slug: "machine-learning",
        icon: "machine-learning",
        cover_image_url: "machine-learning-cover.jpg",
        num_posts: 120,
        group: sampleRelatedCategoryGroups[1],
      },
      {
        id: 202,
        name: "Data Visualization",
        slug: "data-visualization",
        icon: "data-visualization",
        cover_image_url: "data-visualization-cover.jpg",
        num_posts: 80,
        group: sampleRelatedCategoryGroups[1],
      },
    ],
  },
];

export const sampleCategoryGroupDetails: CategoryGroupDetailsType = {
  id: 101,
  name: "Frontend",
  kor_name: "프론트엔드",
  slug: "frontend",
  icon: "frontend",
  description:
    "Frontend development covers the visual aspects of web applications.",
  categories: sampleCategories,
};
