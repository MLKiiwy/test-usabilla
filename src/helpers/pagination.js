import { slice } from 'lodash';

export default (page, pageSize, data) => {
  const start = (page - 1) * pageSize;
  if (start > data.length) {
    throw new Error(`page ${page} doesn't exist`);
  }

  return slice(data, start, start + pageSize);
};
