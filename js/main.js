const body = document.querySelector(`body`);
const screens = body.querySelectorAll(`template`);
const screenContainer = body.querySelector(`main`);
const LEFT_ARROW_KEYCODE = 37;
const RIGHT_ARROW_KEYCODE = 39;
let screenNumber = 0;
const arrowsWrapTemplate =
`
  <div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 95px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn"><-</button>
    <button class="arrows__btn">-></button>
  </div>
`;
let arrowsWrapElement = document.createElement(`div`);
arrowsWrapElement.innerHTML = arrowsWrapTemplate;
arrowsWrapElement = arrowsWrapElement.querySelector(`div`);
const arrowsButtonsArray = [].slice.call(arrowsWrapElement.querySelectorAll(`.arrows__btn`));

const removeAllChilds = function (parentElement) {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
};
const renderScreen = function (numberOfScreen) {
  removeAllChilds(screenContainer);
  screenContainer.appendChild(screens[numberOfScreen].cloneNode(true).content);
};
const moveScreen = function (forwards) {
  if (forwards) {
    if (screenNumber < screens.length - 1) {
      renderScreen(++screenNumber);
    }
  } else {
    if (screenNumber > 0) {
      renderScreen(--screenNumber);
    }
  }
};
body.appendChild(arrowsWrapElement);
arrowsWrapElement.addEventListener(`click`, function (event) {
  if (arrowsButtonsArray.indexOf(event.target) === 0) {
    moveScreen();
  } else if (arrowsButtonsArray.indexOf(event.target) === 1) {
    moveScreen(true);
  }
});
document.addEventListener(`keydown`, function (event) {
  if (event.keyCode === RIGHT_ARROW_KEYCODE) {
    moveScreen(true);
  } else if (event.keyCode === LEFT_ARROW_KEYCODE) {
    moveScreen();
  }
});
