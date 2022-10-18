import { ReactNode, useState, ChangeEvent, KeyboardEvent } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState, useRecoilCallback } from 'recoil';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Box, Divider, Heading, VStack } from '@chakra-ui/layout';

import { itemState, idsState } from './state';

export function AtomEffects() {

  const ids = useRecoilValue(idsState);
  const resetList = useResetRecoilState(idsState);
  const nextId = ids.length;

  const insertNewItem = useRecoilCallback(({ set }) => (label: string) => {
    set(idsState, [...ids, nextId]);
    set(itemState(nextId), { label, checked: false });
  });

  return (
    <Container onClear={resetList}>
      {ids.map(id => <Item key={id} id={id} />)}
      <NewItemInput onInsert={insertNewItem} />
    </Container>
  )
}

interface ContainerProps {
  onClear: () => void;
  children: ReactNode;
}

function Container({ children, onClear }: ContainerProps) {
  return (
    <Box display="flex" flexDir="column" alignItems="center" pt={10}>
      <Box width="400px" backgroundColor="yellow.100" p={5} borderRadius="lg">
        <Heading size="lg" mb={4}>
          Shopping List
        </Heading>
        <VStack spacing={3} divider={<Divider borderColor="rgba(86, 0, 0, 0.48)" />}>
          {children}
        </VStack>
      </Box>
      <Button variant="link" mt={3} onClick={onClear}>
        Clear list
      </Button>
    </Box>
  )
}

interface ItemProps {
  id: number;
}

function Item({ id }: ItemProps) {

  const [item, setItem] = useRecoilState(itemState(id));

  function onClick() {
    setItem({ ...item, checked: !item.checked });
  }

  return (
    <Box
      rounded="md"
      textDecoration={item.checked ? 'line-through' : ''}
      opacity={item.checked ? 0.5 : 1}
      _hover={{ textDecoration: 'line-through' }}
      cursor="pointer"
      width="100%"
      onClick={onClick}
    >
      {item.label}
    </Box>
  )
}

interface NewItemInputProps {
  onInsert: (label: string) => void;
}

function NewItemInput({ onInsert }: NewItemInputProps) {

  const [value, setValue] = useState('');

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  function onKeyPress({ key }: KeyboardEvent<HTMLInputElement>) {
    if (key === 'Enter') {
      onInsert(value);
      setValue('');
    }
  }

  return (
    <Input
      value={value}
      placeholder="New item"
      padding={0}
      height="auto"
      border="none"
      _focus={{ border: 'none' }}
      _placeholder={{ color: 'rgba(86, 0, 0, 0.48)' }}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  )
}
