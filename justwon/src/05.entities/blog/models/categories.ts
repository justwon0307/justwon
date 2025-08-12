type CommonFields = {
  id: number;
  name: string;
  kor_name: string;
  slug: string;
  icon: string;
  description: string;
};

export type CategoryGroupType = Pick<
  CommonFields,
  "id" | "name" | "kor_name" | "slug" | "icon"
> & {
  categories: CategoryType[];
};

export type CategoryType = Pick<
  CommonFields,
  "id" | "name" | "icon" | "slug"
> & {
  cover_image: string;
  num_posts: number;
  group: CategoryGroupRelatedType;
};

export type CategoryGroupRelatedType = Pick<
  CommonFields,
  "id" | "name" | "slug"
>;

export type CategoryGroupDetailsType = Pick<
  CommonFields,
  "id" | "name" | "kor_name" | "slug" | "icon" | "description"
> & {
  categories: CategoryType[];
};

export type CategoryDetailsType = Pick<
  CommonFields,
  "id" | "name" | "kor_name" | "slug" | "icon" | "description"
> & {
  group: CategoryGroupRelatedType;
};
