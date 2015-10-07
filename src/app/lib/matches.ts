export default Matches;

import isHorizontal from './matches/horizontal';
import isVertical from './matches/vertical';
import isDiagonal from './matches/diagonal';

/**
 * Does this grid contain any matches?
 * @param {Array} grid    6x7 muldimentional array containing our grid
 */
function Matches(grid) {
  return isHorizontal(grid) || isVertical(grid) || isDiagonal(grid);
}
