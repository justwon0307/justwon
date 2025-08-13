import { BlogInitializerResponseType } from "../models/response";
import { sampleCategoryGroups } from "@entities/blog/categories";
import { samplePostClassifications } from "@entities/blog/post-classifications";
import { sampleSeries } from "@entities/blog/series";
import { sampleTags } from "@entities/blog/tags";

export const sampleBlogInitializerResponse: BlogInitializerResponseType = {
  category_groups: sampleCategoryGroups,
  post_types: samplePostClassifications,
  series: sampleSeries,
  tags: sampleTags,
};
