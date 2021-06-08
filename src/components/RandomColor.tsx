function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomColor() {
  const cyan = "#8be9fd";
  const green = "#50fa7b";
  const orange = "#ffb86c";
  const pink = "#ff79c6";
  const purple = "#bd93f9";
  const yellow = "#f1fa8c";

  const colors = [cyan, green, orange, pink, purple, yellow];
  const randomArrayNumber = getRandomInt(1, 6) - 1;

  return colors[randomArrayNumber];
}

export default RandomColor;
