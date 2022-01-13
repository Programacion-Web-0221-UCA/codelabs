const eventListeners = () => {
  const $done = document.getElementById("done");
  const $arrowBack = document.getElementById("arrow-back");

  $done.setAttribute("href", "https://hencor2019.github.io/nvm-guide");
  $arrowBack.setAttribute("href", "https://hencor2019.github.io/nvm-guide");
};

const $app = () => {
  eventListeners();
};

window.onload = $app;
