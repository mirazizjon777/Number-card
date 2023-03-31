// CardFunc()
function CardFunc() {
  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const starBox = document.createElement("div");
  starBox.setAttribute("class", "star-box");

  const imgStar = document.createElement("img");
  imgStar.setAttribute("src", `./images/svg/Star.svg`);

  const h2El = document.createElement("h2");
  h2El.textContent = "How did we do?";

  const pEl = document.createElement("p");
  pEl.textContent =
    "Please let us know how we did with your support request. All feedback isappreciated to help us improve our offering!";

  const boxNum = document.createElement("div");
  boxNum.setAttribute("class", "box-num");

  let circleEl = document.createElement("div");
  let circleEl2 = document.createElement("div");
  let circleEl3 = document.createElement("div");
  let circleEl4 = document.createElement("div");
  let circleEl5 = document.createElement("div");
  circleEl.setAttribute("class", "circle");
  circleEl.textContent = "1";
  circleEl2.setAttribute("class", "circle");
  circleEl2.textContent = "2";
  circleEl3.setAttribute("class", "circle");
  circleEl3.textContent = "3";
  circleEl4.setAttribute("class", "circle");
  circleEl4.textContent = "4";
  circleEl5.setAttribute("class", "circle");
  circleEl5.textContent = "5";

  const btnDiv = document.createElement("div");
  const buttonEl = document.createElement("button");
  buttonEl.textContent = "SUBMIT";
  // --- //
  document.body.append(card);
  card.append(starBox);
  starBox.append(imgStar);
  card.append(h2El);
  card.append(pEl);
  card.append(boxNum);
  boxNum.append(circleEl);
  boxNum.append(circleEl2);
  boxNum.append(circleEl3);
  boxNum.append(circleEl4);
  boxNum.append(circleEl5);
  //
  card.append(btnDiv);
  btnDiv.append(buttonEl);

  //////// BTN ////////
  buttonEl.addEventListener("click", function () {
    card.remove();
    newCardFunc();
  });
  let numLet = 0;

  boxNum.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    e.target.setAttribute("id", "hidden-num");
    boxNum.removeAttribute("id");
    // 
    numLet++;
    console.log(numLet);
  });
}

CardFunc();

function newCardFunc() {
  const newCard = document.createElement("div");
  newCard.setAttribute("class", "card newCard");
  //
  const imgM = document.createElement("img");
  imgM.setAttribute("class", "img-mobile");
  imgM.setAttribute("src", `./images/svg/mobile.svg`);
  //
  const ballDiv = document.createElement("div");
  ballDiv.setAttribute("class", "ball-div");
  ballDiv.textContent = `You selected ${4} out of 5`;

  const h2El = document.createElement("h2");
  h2El.style.marginBottom = "0.7rem";
  h2El.textContent = "Thank you!";

  const pEl = document.createElement("p");
  pEl.textContent =
    "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
  // --- //
  document.body.append(newCard);

  newCard.append(imgM);
  newCard.append(ballDiv);
  newCard.append(h2El);
  newCard.append(pEl);
}
