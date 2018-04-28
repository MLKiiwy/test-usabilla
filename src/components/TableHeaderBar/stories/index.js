import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TableHeaderBar from '../';

storiesOf('TableHeaderBar', module)
  .add('Count: 5, page 1, no filter set', () => (
    <TableHeaderBar
      onCommentFilterChange={action('onCommentFilterChange')}
      onRatingFilterChange={action('onRatingFilterChange')}
      onPageChange={action('onPageChange')}
      count={5}
      actualPage={1}
      activeRatings={[]}
    />
  ))
  .add('Count: 100, 10 pages, on page 4, filter rating 1,4', () => (
    <TableHeaderBar
      onCommentFilterChange={action('onCommentFilterChange')}
      onRatingFilterChange={action('onRatingFilterChange')}
      onPageChange={action('onPageChange')}
      count={100}
      actualPage={4}
      activeRatings={[1, 4]}
    />
  ));
