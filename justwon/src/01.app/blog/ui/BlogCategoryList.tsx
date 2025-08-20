import { SidebarListContainer } from "@widgets/sidebars";
import {
  CategoriesInitializer,
  CategoryGroupMenu,
} from "@entities/blog/categories";
import { getCategories } from "@entities/blog/categories/server";
import { Skeleton } from "@shared/ui/Skeleton";

export async function BlogCategoryList() {
  const groups = await getCategories();

  return (
    <SidebarListContainer>
      <CategoriesInitializer data={groups} />
      {groups.map((group) => (
        <CategoryGroupMenu key={group.id} group={group} />
      ))}
    </SidebarListContainer>
  );
}

export function BlogCategoryLoading() {
  return (
    <SidebarListContainer>
      <Skeleton width="100%" height={36} />
      <Skeleton width="100%" height={36} />
      <Skeleton width="100%" height={36} />
      <Skeleton width="100%" height={36} />
      <Skeleton width="100%" height={36} />
    </SidebarListContainer>
  );
}
