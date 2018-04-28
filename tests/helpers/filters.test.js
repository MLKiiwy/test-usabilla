import { applyFilters, applyNewRatingFilter } from '../../src/helpers/filters';

describe('helpers.filters', () => {
  describe('applyNewRatingFilter', () => {
    it('should add a rating filter 5', () => {
      expect(applyNewRatingFilter([], 5, true)).toEqual([5]);
    });

    it('should not add a rating filter 5, because already present', () => {
      expect(applyNewRatingFilter([5], 5, true)).toEqual([5]);
    });

    it('should remove a rating filter 5, because present', () => {
      expect(applyNewRatingFilter([7, 5, 6], 5, false)).toEqual([7, 6]);
    });

    it('should not remove a rating filter 5, because not present', () => {
      expect(applyNewRatingFilter([7, 6], 5, false)).toEqual([7, 6]);
    });
  });

  describe('applyFilters', () => {
    it('should return same input, because no filters', () => {
      const input = [
        { comment: 'belle offre de services', rating: 5 },
        { comment: 'bouton ne fonctionne pas', rating: 2 },
        { comment: 'new layout awesome', rating: 4 },
      ];

      const filters = {
        ratings: [],
        comment: null,
      };

      expect(applyFilters(filters, input)).toEqual(input);
    });

    it('should return only 1 element, because filtering with rating = 5 only', () => {
      const input = [
        { comment: 'belle offre de services', rating: 5 },
        { comment: 'bouton ne fonctionne pas', rating: 2 },
        { comment: 'new layout awesome', rating: 4 },
      ];

      const filters = {
        ratings: [5],
        comment: null,
      };

      const output = [{ comment: 'belle offre de services', rating: 5 }];

      expect(applyFilters(filters, input)).toEqual(output);
    });

    it('should return 2 elements, because filtering with rating 5 or 4', () => {
      const input = [
        { comment: 'belle offre de services', rating: 5 },
        { comment: 'bouton ne fonctionne pas', rating: 2 },
        { comment: 'new layout awesome', rating: 4 },
      ];

      const filters = {
        ratings: [5, 4],
        comment: null,
      };

      const output = [
        { comment: 'belle offre de services', rating: 5 },
        { comment: 'new layout awesome', rating: 4 },
      ];

      expect(applyFilters(filters, input)).toEqual(output);
    });

    it('should return only 1 element, because filtering with rating 5 or 4 AND comment with "new"', () => {
      const input = [
        { comment: 'belle offre de services', rating: 5 },
        { comment: 'bouton ne fonctionne pas', rating: 2 },
        { comment: 'new layout awesome', rating: 4 },
      ];

      const filters = {
        ratings: [5, 4],
        comment: 'new',
      };

      const output = [{ comment: 'new layout awesome', rating: 4 }];

      expect(applyFilters(filters, input)).toEqual(output);
    });
  });
});
