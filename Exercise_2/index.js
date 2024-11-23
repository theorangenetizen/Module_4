const data = [
  { name: "bob", age: 23 },
  { name: "alice", age: 39 },
];

function addCard(name, age) {
  // clone the template
  const template = document
    .getElementById("card-templated")
    .content.cloneNode(true);
  // populate the template
  template.querySelector(".card-title").innerText = name;
  template.querySelector(".card-text").innerText = `Age: ${age}`;
  // include the populated template into the page
  document.querySelector("#card-list").appendChild(template);

  data.forEach((card) => {
    addCard(card.name, card.age);
  });
}
addCard(data.name, data.age);
