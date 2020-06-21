const line = document.querySelector(".line");
document.querySelectorAll("li").forEach((element) =>
  element.addEventListener("mouseover", function () {
    toggeler(this);
  })
);

function toggeler(thisElement) {
  let { width, top, left } = thisElement.getBoundingClientRect(),
    color = thisElement.getAttribute("data-color");
    console.log(top)
  line.style.cssText = `width: ${width}; top: ${
    top + 30
  }; left: ${left}; background: ${color}`;
}
