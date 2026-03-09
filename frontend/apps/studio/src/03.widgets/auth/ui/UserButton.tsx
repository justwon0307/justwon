import { useUser } from "@justkits/react-jwt";
import { Popover, Text } from "@justwon/designs/components";

import { LogoutButton } from "@features/auth/logout";
import { RefetchUserButton } from "@features/auth/refetch-user";
import { UserAvatar, UserProfile } from "@entities/user";
import { styles } from "./styles.css";

export function UserButton() {
  const { user } = useUser();

  if (user) {
    return (
      <Popover title="내 정보" trigger={<UserAvatar user={user} />} width={240}>
        <div className={styles.wrapper}>
          <UserProfile user={user} />
          <LogoutButton />
        </div>
      </Popover>
    );
  }

  return (
    <Popover
      title="오류 발생"
      description="유저 정보를 불러오는데 실패했습니다."
      trigger={<UserAvatar user={user} />}
      variant="warning"
    >
      <Text variant="description" as="span">
        아래 버튼을 눌러 다시 시도하거나, 페이지를 새로고침 해주세요.
      </Text>
      <RefetchUserButton />
    </Popover>
  );
}
