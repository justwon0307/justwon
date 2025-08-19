import { CategoryType, CategoryDetailsType } from "../models/category";
import { sampleRelatedCategoryGroups } from "./testCategoryGroups";

export const sampleCategories: CategoryType[] = [
  {
    id: 101,
    name: "Frontend",
    slug: "frontend",
    icon: "frontend",
    cover_image_url: "frontend-cover.jpg",
    num_posts: 150,
    group: sampleRelatedCategoryGroups[0],
  },
  {
    id: 102,
    name: "Backend",
    slug: "backend",
    icon: "backend",
    cover_image_url: "backend-cover.jpg",
    num_posts: 100,
    group: sampleRelatedCategoryGroups[0],
  },
];

export const sampleCategoryDetails: CategoryDetailsType = {
  id: 101,
  name: "Frontend",
  kor_name: "프론트엔드",
  slug: "frontend",
  icon: "frontend",
  cover_image_url: "frontend-cover.jpg",
  num_posts: 150,
  description:
    "Frontend development covers the visual aspects of web applications.",
  group: sampleRelatedCategoryGroups[0],
};
