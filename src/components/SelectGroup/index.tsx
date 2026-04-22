import React from 'react';
import { Container, Label, OptionsRow, Option, OptionText, Dot } from './styles';

type Props = {
  label: string;
  value: boolean | null;
  onChange: (value: boolean) => void;
};

export function SelectGroup({ label, value, onChange }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <OptionsRow>
        <Option
          isSelected={value === true}
          isOnDiet={true}
          onPress={() => onChange(true)}
          activeOpacity={0.7}
        >
          <Dot isOnDiet={true} />
          <OptionText isSelected={value === true}>Sim</OptionText>
        </Option>

        <Option
          isSelected={value === false}
          isOnDiet={false}
          onPress={() => onChange(false)}
          activeOpacity={0.7}
        >
          <Dot isOnDiet={false} />
          <OptionText isSelected={value === false}>Não</OptionText>
        </Option>
      </OptionsRow>
    </Container>
  );
}
