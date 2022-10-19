import { ReactNode } from 'react';
// import { useRecoilState } from 'recoil';
import { InputGroup, InputRightElement, NumberInput, NumberInputField, Text, VStack } from '@chakra-ui/react';

// import { selectedElementPropertiesAtom } from './state';
// import { Element } from './types';
import { editPropertyAtom } from './state';
import { useRecoilValue } from 'recoil';

// type ElementPropKey = 'top' | 'left' | 'width' | 'height';

// // TODO: Use Immer?
// const PROP_HANDLERS: { [key in ElementPropKey]: (element: Element, value: number) => Element } = {
//   top: (el, top) => ({ style: { ...el!.style, position: { ...el!.style.position, top } } }),
//   left: (el, left) => ({ style: { ...el!.style, position: { ...el!.style.position, left } } }),
//   width: (el, width) => ({ style: { ...el!.style, size: { ...el!.style.size, width } } }),
//   height: (el, height) => ({ style: { ...el!.style, size: { ...el!.style.size, height } } }),
// };

export function EditProperties() {
  // const [element, setElement] = useRecoilState(selectedElementPropertiesAtom);

  // if (!element) {
  //   return null;
  // }

  // const { top, left } = element.style.position;
  // const { width, height } = element.style.size;

  // function handleElementChange(key: ElementPropKey) {
  //   const handler = PROP_HANDLERS[key];
  //   return function(value: number) {
  //     if (!element) return;
  //     const newElement = handler(element, value);
  //     setElement(newElement);
  //   }
  // }

  const top = useRecoilValue(editPropertyAtom('style.position.top'));

  return (
    <Card>
      <Section heading="Position">
      <Property label="Top" value={1} onChange={top => {}} />
        {/* <Property label="Top" value={top} onChange={handleElementChange('top')} />
        <Property label="Left" value={left} onChange={handleElementChange('left')} /> */}
      </Section>
      {/* <Section heading="Position">
        <Property label="Width" value={width} onChange={handleElementChange('width')} />
        <Property label="Height" value={height} onChange={handleElementChange('height')} />
      </Section> */}
    </Card>
  )
}

interface SectionProps {
  heading: string;
  children: ReactNode;
}

function Section({ heading, children }: SectionProps) {
  return (
    <VStack spacing={2} align="flex-start">
      <Text fontWeight="500">{heading}</Text>
      {children}
    </VStack>
  )
}

interface PropertyProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

function Property({ label, value, onChange }: PropertyProps) {
  return (
    <div>
      <Text fontSize="14px" fontWeight="500" mb="2px">
        {label}
      </Text>
      <InputGroup size="sm" variant="filled">
        <NumberInput value={value} onChange={(_, value) => onChange(value)}>
          <NumberInputField borderRadius="md" />
          <InputRightElement pointerEvents="none" children="px" lineHeight="1" fontSize="12px" />
        </NumberInput>
      </InputGroup>
    </div>
  )
}

function Card({ children }: { children: ReactNode }) {
  return (
      <VStack
      position="absolute"
      top="20px"
      right="20px"
      backgroundColor="white"
      padding={2}
      boxShadow="md"
      borderRadius="md"
      spacing={3}
      align="flex-start"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </VStack>
  );
}
