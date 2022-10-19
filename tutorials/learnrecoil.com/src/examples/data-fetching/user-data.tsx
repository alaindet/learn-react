import { Heading, Text } from '@chakra-ui/layout';
import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';

import { userAtom, weatherAtom } from './async-state';
import { useRefetchWeather } from './use-refetch-weather';

interface UserDataProps {
  userId: number | undefined;
}

export function UserData({
  userId,
}: UserDataProps) {

  const user = useRecoilValue(userAtom(userId));

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
      <Suspense fallback={<p>Loading weather...</p>}>
        <UserWeather userId={userId} />
      </Suspense>
    </div>
  );
}

function UserWeather({ userId }: { userId: number | undefined }) {
  const user = useRecoilValue<any>(userAtom(userId));
  const weather = useRecoilValue<any>(weatherAtom(userId));
  const refetch = useRefetchWeather(userId);

  return (
    <Text>
      <strong>Weather for {user.address.city}: </strong>
      {weather} °C
      &nbsp;
      <button type="button" onClick={refetch}>(Update)</button>
    </Text>
  );
}
