console.log(customers);

let bodyContent = `<section>
  <span><h1>Internal Company Directory</h1></span>
  <main id="mainContent">

  </main>
</section>`;

document.querySelector("body").innerHTML = bodyContent;

let employeeBox = document.querySelector("#mainContent");

for (var i = 0; i < customers.results.length; i++) {
  let employeeContent = `<div class="employee">
    <img src="${customers.results[i].picture.large}" alt="${customers.results[i].name.first}'s face">
    <h2 class="name">${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
    <p class="email">${customers.results[i].email}</p>
    <p class="address">${customers.results[i].location.street}</p>
    <p class="address">${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}</p>
    <p>${customers.results[i].cell}</p>
    <h3 class="ssn">${customers.results[i].id.value}</h3>
  </div>`;
  employeeBox.innerHTML += employeeContent;
}
