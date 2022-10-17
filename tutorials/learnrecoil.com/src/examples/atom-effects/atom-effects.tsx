import { ReactNode, useState, ChangeEvent, KeyboardEvent } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Box, Divider, Heading, VStack } from '@chakra-ui/layout';
import produce from 'immer';

import { shoppingListState } from './state';

export function AtomEffects() {

  const [items, setItems] = useRecoilState(shoppingListState);
  const resetList = useResetRecoilState(shoppingListState);

  function toggleItem(index: number)  {
    setItems(
      produce(items, draftItems => {
        draftItems[index].checked = !draftItems[index].checked;
      }),
    )
  }

  function insertNewItem(label: string) {
    setItems([...items, { label, checked: false }])
  }

  return (
    <Container onClear={resetList}>
      {items.map((item, index) => (
        <Item
          key={item.label}
          label={item.label}
          checked={item.checked}
          onClick={() => toggleItem(index)}
        />
      ))}
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
  label: string;
  checked: boolean;
  onClick: () => void;
}

function Item({ label, checked, onClick }: ItemProps) {
  return (
    <Box
      rounded="md"
      textDecoration={checked ? 'line-through' : ''}
      opacity={checked ? 0.5 : 1}
      _hover={{ textDecoration: 'line-through' }}
      cursor="pointer"
      width="100%"
      onClick={onClick}
    >
      {label}
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
