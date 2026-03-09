import { type UserType } from "@justkits/react-jwt";
import { AppIcon } from "@justwon/designs/icons";

import { styles } from "./styles.css";

interface Props {
  user: UserType | null;
}

/**
 * 유저 아바타 버튼 컴포넌트
 *  - 유저 정보가 없을 경우 에러 아이콘이 나타나며,
 *  - 그렇지 않으면 기본적으로 프로필 사진이 나타난다.
 *  - 프로필 사진이 없는 유저라면 기본 프로필 사진이 나타난다.
 * @returns
 */
export function UserAvatar({ user }: Readonly<Props>) {
  const DEFAULT_AVATAR_URL = "https://cdn.justwon.dev/profiles/profile.png";

  if (!user) {
    return <AppIcon className={styles.error} icon="error-fill" />;
  }

  return (
    <img
      src={user.avatar_url ? user.avatar_url : DEFAULT_AVATAR_URL}
      alt="User Avatar"
      className={styles.avatar}
    />
  );
}
