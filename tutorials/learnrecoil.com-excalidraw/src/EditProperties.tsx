import { ReactNode } from 'react';
import { InputGroup, InputRightElement, NumberInput, NumberInputField, Text, VStack } from '@chakra-ui/react';

export function EditProperties() {
  return (
    <Card>
      <Section heading="Position">
        <Property label="Top" value={1} onChange={(top) => { }} />
        <Property label="Left" value={1} onChange={(left) => { }} />
      </Section>
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
