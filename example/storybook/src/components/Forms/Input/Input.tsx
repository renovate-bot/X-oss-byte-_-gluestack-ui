import React from 'react';
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Center,
  Button,
  ButtonText,
  Box,
  VStack,
  Text,
  Heading,
  Icon,
  SearchIcon,
  FormControl,
} from '@gluestack-ui/themed';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { useState } from 'react';

const InputBasic = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  let inputIconSize = '';
  switch (props.size) {
    case 'sm':
      inputIconSize = 'xs';
      break;
    case 'md':
      inputIconSize = 'sm';
      break;
    case 'lg':
      inputIconSize = 'lg';
      break;
    case 'xl':
      inputIconSize = 'xl';
      break;
  }

  return (
    <Input {...props}>
      <InputField
        onChange={(e: any) => {
          setValue(e.nativeEvent.text);
        }}
        value={value}
        placeholder="Enter Text here"
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Text',
            'size': props.size,
          }),
        }}
      />
      <InputSlot pr="$4">
        <InputIcon
          as={SearchIcon}
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'SearchIcon',
              'size': inputIconSize,
            }),
          }}
        />
      </InputSlot>
    </Input>
  );
};

export default InputBasic;

export {
  Input,
  InputField,
  InputIcon,
  Center,
  Button,
  ButtonText,
  Box,
  VStack,
  Text,
  Heading,
  useState,
  Icon,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  InputSlot,
};
