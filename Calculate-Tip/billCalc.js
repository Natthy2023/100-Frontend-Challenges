/**
 * Calculate the tip amount.
 * @param {number} base - The base bill amount.
 * @param {number} tipPercentage - Tip rate (e.g., 0.15 for 15%).
 * @returns {number} Tip amount.
 */
export function tipAmount(base, tipPercentage) {
  return base * tipPercentage;
}

/**
 * Calculate how much each person should pay.
 * @param {number} base - The base bill amount.
 * @param {number} tipPercentage - Tip rate.
 * @param {number} numOfPeople - Number of people splitting the bill.
 * @returns {number} Amount per person.
 */
export function billPerPerson(base, tipPercentage, numOfPeople) {
  const total = base + tipAmount(base, tipPercentage);
  return total / numOfPeople;
}

/**
 * Calculate total bill including tip.
 * @param {number} tipAmount - The calculated tip amount.
 * @param {number} base - The base bill amount.
 * @returns {number} Total bill.
 */
export function totalBill(tipAmount, base) {
  return tipAmount + base;
}
