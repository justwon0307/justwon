import { CategoryGroupType } from "@entities/blog/categories";
import { PostClassificationType } from "@entities/blog/post-classifications";
import { SeriesType } from "@entities/blog/series";
import { TagType } from "@entities/blog/tags";

export type BlogInitializerResponseType = {
  category_groups: CategoryGroupType[];
  post_types: PostClassificationType[];
  series: SeriesType[];
  tags: TagType[];
};
