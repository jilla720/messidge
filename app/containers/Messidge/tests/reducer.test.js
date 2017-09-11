
import { fromJS } from 'immutable';
import messidgeReducer from '../reducer';

describe('messidgeReducer', () => {
  it('returns the initial state', () => {
    expect(messidgeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
