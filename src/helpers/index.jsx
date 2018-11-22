/**
 * Calculates in percent, the change between 2 numbers.
 * e.g from 1000 to 500 = 50%
 *
 * @param oldNumber The initial value
 * @param newNumber The value that changed
 */
export function getPercentageChange(oldNumber, newNumber) {
  return ((newNumber - oldNumber) / newNumber) * 100;
}
