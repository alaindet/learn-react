import { Heading, Text } from '@chakra-ui/layout';
import { useRecoilValue } from 'recoil';

import { userAtom } from './async-state';

interface UserDataProps {
  userId: number | undefined;
}

export function UserData({
  userId,
}: UserDataProps) {

  // TODO: Typing
  const user = useRecoilValue<any>(userAtom(userId));

  if (!user) {
    return (
      <p>No user data</p>
    );
  }

  return (
    <div className="user-data">
      <Heading as="h2" size="md" mb={1}>User data</Heading>
      <Text><strong>Name: </strong>{user.name}</Text>
      <Text><strong>Phone: </strong>{user.phone}</Text>
    </div>
  );
}
