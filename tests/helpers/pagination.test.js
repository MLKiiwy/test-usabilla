import applyPagination from '../../src/helpers/pagination';

describe('helpers.filters', () => {
  describe('pagination', () => {
    const data = [];
    for (let i = 1; i <= 100; i += 1) {
      data.push(i);
    }

    it('should return the first page of 2 elements', () => {
      expect(applyPagination(1, 2, data)).toEqual([1, 2]);
    });

    it('should return the 3rd page of 5 elements', () => {
      expect(applyPagination(3, 5, data)).toEqual([11, 12, 13, 14, 15]);
    });

    it('should return the last page', () => {
      expect(applyPagination(20, 5, data)).toEqual([96, 97, 98, 99, 100]);
    });

    it('should return the last page not complete', () => {
      expect(applyPagination(13, 8, data)).toEqual([97, 98, 99, 100]);
    });
  });
});
