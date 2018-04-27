import React from 'react';
import { storiesOf } from '@storybook/react';
import FeedbacksTable from '../FeedbacksTable';

const sampleList = [
  { rating: 1, comment: 'one comment', browser: 'Chrome 14', device: 'Desktop', platform: 'OS X' },
  { rating: 1, comment: 'one comment', browser: 'Chrome 14', device: 'Desktop', platform: 'OS X' },
  { rating: 1, comment: 'one comment', browser: 'Chrome 14', device: 'Desktop', platform: 'OS X' },
  { rating: 1, comment: 'one comment', browser: 'Chrome 14', device: 'Desktop', platform: 'OS X' },
  { rating: 1, comment: 'one comment', browser: 'Chrome 14', device: 'Desktop', platform: 'OS X' },
];

storiesOf('FeedbacksTable', module)
  .add('Default', () => <FeedbacksTable />)
  .add('Default loading', () => <FeedbacksTable loading />)
  .add('With list of 5 elements', () => <FeedbacksTable list={sampleList} />);
