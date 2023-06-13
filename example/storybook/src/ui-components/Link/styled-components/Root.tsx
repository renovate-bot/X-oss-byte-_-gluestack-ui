import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    _text: {
      'fontWeight': '$normal',
      'textDecorationLine': 'underline',
      'color': '$info700',
      ':hover': {
        color: '$info600',
        textDecorationLine: 'none',
      },
      ':active': {
        color: '$info700',
      },
      ':disabled': {
        opacity: 0.4,
      },
      '_dark': {
        'color': '$info300',
        ':hover': {
          color: '$info400',
          textDecorationLine: 'none',
        },
        ':active': {
          color: '$info300',
        },
        ':disabled': {
          opacity: 0.4,
        },
      },
    },
    _web: {
      ':disabled': {
        // @ts-ignore
        pointerEvents: 'all !important',
        cursor: 'not-allowed',
      },
    },
  },
  {
    descendantStyle: ['_text'],
  }
);
