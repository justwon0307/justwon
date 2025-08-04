import {
  LearningCategoryButton,
  LearningCategoryGroupType,
} from "@entities/learning";
import {
  ExpandableSidebarItem,
  SidebarItemContainer,
} from "@shared/ui/Sidebar";

interface Props {
  groups: LearningCategoryGroupType[];
}

export function CategoryGroupSidebar({ groups }: Readonly<Props>) {
  return (
    <SidebarItemContainer>
      {groups.map((group) => (
        <ExpandableSidebarItem title={group.name} key={group.id}>
          {group.categories.map((category) => (
            <LearningCategoryButton key={category.id} category={category} />
          ))}
        </ExpandableSidebarItem>
      ))}
    </SidebarItemContainer>
  );
}
