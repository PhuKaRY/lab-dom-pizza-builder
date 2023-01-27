// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const whiteSauce = document.querySelector('.sauce-white');
  if (state.whiteSauce) {
    whiteSauce.style.visibility = 'visible';
  } else {
    whiteSauce.style.visibility = 'hidden';
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.style.visibility = 'visible';
  } else {
    crust.style.visibility = 'hidden';
  }
}

function renderButtons() {
  //Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) {
    document.querySelector('.btn-pepperoni').classList.add('active');
  } else {
    document.querySelector('.btn-pepperoni').classList.remove('active');
  }

  if (state.mushrooms) {
    document.querySelector('.btn-mushrooms').classList.add('active');
  } else {
    document.querySelector('.btn-mushrooms').classList.remove('active');
  }

  if (state.greenPeppers) {
    document.querySelector('.btn-green-peppers ').classList.add('active');
  } else {
    document.querySelector('.btn-green-peppers ').classList.remove('active');
  }

  if (state.whiteSauce) {
    document.querySelector('.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn-sauce').classList.remove('active');
  }

  if (state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn-crust').classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
