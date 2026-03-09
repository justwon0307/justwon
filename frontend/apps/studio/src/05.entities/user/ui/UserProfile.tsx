import type { UserType } from "@justkits/react-jwt";
import { Text } from "@justwon/designs/components";

import { UserAvatar } from "./UserAvatar";
import { styles } from "./styles.css";

interface Props {
  user: UserType;
}

export function UserProfile({ user }: Readonly<Props>) {
  return (
    <div className={styles.wrapper}>
      <UserAvatar user={user} />
      <Text variant="bodyLarge" as="span">
        {user.username}
      </Text>
    </div>
  );
}
