import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RoundedButton from '../';

storiesOf('RoundedButton', module)
  .add('Default (label)', () => <RoundedButton />)
  .add('Mode label, with 8', () => <RoundedButton rating={8} />)
  .add('Inactive, with click handler and 6', () => (
    <RoundedButton rating={6} onClick={action('click')} />
  ))
  .add('Active, with click handler and 6', () => (
    <RoundedButton rating={6} onClick={action('click')} active />
  ));
