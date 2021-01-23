window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {

  const values = { amount: 10000, years: 10, rate: 4.5 };
  const amountUI = document.querySelector('#loan-amount');
  const yearsUI = document.querySelector("#loan-years");
  const rateUI = document.querySelector("#loan-rate");
  amountUI.value = values.amount;
  yearsUI.value = values.years;
  rateUI.value = values.rate;
  update();
}

function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

function calculateMonthlyPayment(values) {

  let paymentCount = values.years * 12;
  if (paymentCount >= 0){} else {
    alert("Term in Years must be a positive number. Please re-enter the value for years.");
    return montly = (0).toFixed(2);
  };
  let interest = (values.rate/100) / 12;
  if (interest >= 0){} else {
    alert("please enter a positive interest rate value");
    return montly = (0).toFixed(2);;
  };
  let numerator = values.amount * interest;
  let denominator = 1 - (Math.pow(1 + interest, -paymentCount));
  let monthly = (numerator/denominator).toFixed(2);
 
  return monthly;
}

function updateMonthly(monthly) {
  const monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerText = monthly;
}
