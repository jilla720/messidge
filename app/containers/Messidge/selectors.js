import { createSelector } from 'reselect';

/**
 * Direct selector to the messidge state domain
 */
const selectMessidgeDomain = () => (state) => state.get('messidge');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Messidge
 */

const makeSelectMessidge = () => createSelector(
  selectMessidgeDomain(),
  (substate) => substate.toJS()
);

export default makeSelectMessidge;
export {
  selectMessidgeDomain,
};
