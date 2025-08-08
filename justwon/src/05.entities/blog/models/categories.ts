type CommonFields = {
  id: number;
  name: string;
  kor_name: string;
  slug: string;
  icon: string;
  cover_image: string;
  image_credit_html: string;
  description: string;
};

export type CategoryGroupType = Pick<
  CommonFields,
  "id" | "name" | "kor_name" | "slug" | "icon"
> & {
  categories: CategoryType[];
};

export type CategoryType = Pick<CategoryGroupType, "id" | "name" | "slug"> & {
  num_posts: number;
  group: CategoryGroupRelatedType;
};

export type CategoryGroupRelatedType = Pick<
  CommonFields,
  "id" | "name" | "slug"
>;
