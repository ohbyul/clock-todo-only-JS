const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImageLoad() {
  console.log("finished loading");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jfif`;
  image.classList.add("bgImage");
  body.prepend(image);
  //image.addEventListener("loadend", handleImageLoad);
  //니코의 실수?
}

function genRandom() {
  const number = Math.floor(Math.random() * 6);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
