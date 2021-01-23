
it('should calculate the monthly rate correctly', function () {
  values = {amount: 10000, years: 10, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toEqual('103.64');
});


it("should return a result with 2 decimal places", function() {
  values = {amount: 15000, years: 10, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toEqual('155.46');
});

it("should be a positive number larger than zero", function() {
  values = {amount: 15000, years: 10, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toBeGreaterThan(0);
});
