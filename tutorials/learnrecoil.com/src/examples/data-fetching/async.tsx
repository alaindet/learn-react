import { Container, Heading } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { Suspense } from 'react';
import { useRecoilState } from 'recoil';

import { userIdAtom } from './async-state';
import { UserData } from './user-data';

const USER_OPTIONS = [
  { value: '1', label: 'User 1' },
  { value: '2', label: 'User 2' },
  { value: '3', label: 'User 3' },
];

export function Async() {

  const [userId, setUserId] = useRecoilState(userIdAtom);

  function onSelectUser(event: { target: { value: any; } }) {
    const value = event.target.value
    setUserId(value ? parseInt(value) : undefined);
  }

  const userFiltersView = (
    <Select
      placeholder="Choose a user"
      mb={4}
      value={userId}
      onChange={onSelectUser}
    >
      {USER_OPTIONS.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </Select>
  );

  return (
    <Container py={10}>
      <Heading as="h1" mb={4}>View Profile</Heading>
      <Heading as="h2" size="md" mb={1}>Choose a user</Heading>
      {userFiltersView}
      <Suspense fallback={<p>Loading...</p>}>
        <UserData userId={userId} />
      </Suspense>
    </Container>
  );
}
