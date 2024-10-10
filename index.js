// Unit Tests

// Multiplication Test - A function called multiplication that returns the product of two numbers
test("multiplication takes two numbers 5 and 2 and returns 10", () => {
  expect(multiplication(5, 2)).toEqual(10);
});

test("multiplication takes two negative numbers -3 and -4 and returns 12", () => {
  expect(multiplication(-3, -4)).toEqual(12);
});

test("multiplication takes zero and any number and returns 0", () => {
  expect(multiplication(0, 5)).toEqual(0);
});

// Concatenation Test - A function that takes two arrays, filters the odd numbers, concatenates them, and returns a sorted array with unique odd numbers in ascending order.
test("concatOdds takes [3, 2, 1] and [9, 1, 1, 1, 4, 15, -1] and returns [-1, 1, 3, 9, 15]", () => {
  expect(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toEqual([-1, 1, 3, 9, 15]);
});

test("concatOdds takes two arrays with no odd numbers and returns an empty array", () => {
  expect(concatOdds([2, 4, 6], [8, 10])).toEqual([]);
});

test("concatOdds takes two empty arrays and returns an empty array", () => {
  expect(concatOdds([], [])).toEqual([]);
});

test("concatOdds takes arrays with duplicates and returns sorted unique odd numbers", () => {
  expect(concatOdds([1, 3, 3, 7], [7, 9, 1])).toEqual([1, 3, 7, 9]);
});

// Functional Tests

/*
User Scenario: When a user checks out a product in the cart, they should have the option oto pay as a guest or create an account.

User Stories:

When a user clicks checkout, they should view the product and itemized costs, and be prompted to checkout as a guest or create an account. 

When a user clicks on checkout as a guest, they are directed to the payments page. 

When a user clicks on create an account, they are directed to the account creation workflow, and then redirected back to the payments page. 

When a user is ready to purchase, they should be presented with following payment options: credit card, Affirm BNPL, ACH, Paypal or Shop Pay.

When a user selects credit card, they should be prompted to include their address and credit card information.

When a user selects a third-party service for payment, they should be directed to the provider's workflow to confirm the purchase, and the be redirected back to our checkout flow.

When a user completed the purchase, they shouuld receive a confirmation
*/
