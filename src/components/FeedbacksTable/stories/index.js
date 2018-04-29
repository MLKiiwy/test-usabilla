import React from 'react';
import { storiesOf } from '@storybook/react';
import FeedbacksTable from '../';

const sampleList = [
  { rating: 1, comment: 'one comment', browser: 'Chrome 14', device: 'Desktop', platform: 'OS X', id: 'a' },
  { rating: 1, comment: 'one comment', browser: 'Chrome 14', device: 'Desktop', platform: 'OS X', id: 'b' },
  { rating: 1, comment: 'one comment', browser: 'Chrome 14', device: 'Desktop', platform: 'OS X', id: 'c' },
  { rating: 1, comment: 'one comment', browser: 'Chrome 14', device: 'Desktop', platform: 'OS X', id: 'd' },
  { rating: 1, comment: 'one comment', browser: 'Chrome 14', device: 'Desktop', platform: 'OS X', id: 'e' },
];

storiesOf('FeedbacksTable', module)
  .add('Default', () => <FeedbacksTable />)
  .add('Default loading', () => <FeedbacksTable loading />)
  .add('With list of 5 elements', () => <FeedbacksTable list={sampleList} />);
