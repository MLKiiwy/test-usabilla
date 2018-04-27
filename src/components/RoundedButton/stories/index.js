import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RoundedButton from '../RoundedButton';

storiesOf('RoundedButton', module)
  .add('Default (label)', () => <RoundedButton />)
  .add('Mode label, with 8', () => <RoundedButton label="8" />)
  .add('Inactive, with click handler and 6', () => <RoundedButton label="6" onClick={action('click')} />)
  .add('Active, with click handler and 6', () => <RoundedButton label="6" onClick={action('click')} active />);
