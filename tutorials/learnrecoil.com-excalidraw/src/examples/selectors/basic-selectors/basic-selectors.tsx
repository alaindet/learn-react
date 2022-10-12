import { Box, FormControl, FormLabel, Heading, HStack, Icon, NumberInput, NumberInputField, Switch } from '@chakra-ui/react';
import { ArrowRight } from 'react-feather';
import { useRecoilState } from 'recoil';

import { usdAtom, eurAtom, commissionEnabledAtom, commissionValueAtom } from './state';

export function BasicSelectorsExample() {

  const [usd, setUsd] = useRecoilState(usdAtom);
  const [eur, setEur] = useRecoilState(eurAtom);

  return (
    <div style={{ padding: 20 }}>
      <Heading size="lg" mb={2}>Currency converter</Heading>
      <InputStack>
        <CurrencyInput label="usd" amount={usd} onChange={usd => setUsd(usd)}/>
        <CurrencyInput label="eur" amount={eur} onChange={eur => setEur(eur)}/>
      </InputStack>
      <Commission />
    </div>
  );
}

// You can ignore everything below this line.
// It's just a bunch of UI components that we're using in this example.
const InputStack: React.FC = ({children}) => {
  return (
    <HStack
      width="300px"
      mb={4}
      spacing={4}
      divider={
        <Box
          border="0 !important"
          height="40px"
          alignItems="center"
          display="flex"
        >
          <Icon as={ArrowRight} />
        </Box>
      }
      align="flex-end"
    >
      {children}
    </HStack>
  )
}

const CurrencyInput = ({
  amount,
  onChange,
  label,
}: {
  label: string
  amount: number
  onChange?: (amount: number) => void
}) => {
  let symbol = label === 'usd' ? '$' : '€'

  return (
    <FormControl id={label.toUpperCase()}>
      <FormLabel>{label.toUpperCase()}</FormLabel>
      <NumberInput
        value={`${symbol} ${amount}`}
        onChange={(value) => {
          const withoutSymbol = value.split(' ')[0]
          onChange?.(parseFloat(withoutSymbol || '0'))
        }}
      >
        <NumberInputField />
      </NumberInput>
    </FormControl>
  );
}

function Commission() {

  const [value, setValue] = useRecoilState(commissionValueAtom);
  const [enabled, setEnabled] = useRecoilState(commissionEnabledAtom);

  return (
    <Box width="300px">
      <FormControl display="flex" alignItems="center" mb={2}>
        <FormLabel htmlFor="includeCommission" mb="0">
          Include forex commission? (% value)
        </FormLabel>
        <Switch
          id="includeCommission"
          isChecked={!!enabled}
          onChange={(event) => setEnabled(event.currentTarget.checked)}
        />
      </FormControl>
      <NumberInput
        isDisabled={!enabled}
        value={value}
        onChange={val => setValue(parseFloat(val || '0'))}
      >
        <NumberInputField />
      </NumberInput>
    </Box>
  );
}
