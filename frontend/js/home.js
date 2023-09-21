import { particlesCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const pc = particlesCursor({
  el: document.getElementById("app"),
  gpgpuSize: 512,
  colors: [0x00ff00, 0x0000ff],
  color: 0xff0000,
  coordScale: 0.5,
  noiseIntensity: 0.001,
  noiseTimeCoef: 0.0001,
  pointSize: 5,
  pointDecay: 0.0025,
  sleepRadiusX: 250,
  sleepRadiusY: 250,
  sleepTimeCoefX: 0.001,
  sleepTimeCoefY: 0.002,
});

document.body.addEventListener("click", () => {
  pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
  pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
  pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
  pc.uniforms.uPointSize.value = 1 + Math.random() * 10;
});

var coll = document.getElementsByClassName("outline");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var a = $("#simple-timer").syotimer({
  year: 2023,
  month: 2,
  day: 10,
  hour: 9,
  minute: 30,
});
console.log(a);

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

document.querySelector(".tabgroup > div").hide();
document.querySelector(".tabgroup > div:first-of-type").show();
document.querySelector(".tabs a").click(function (e) {
  e.preventDefault();
  var $this = document.querySelector(this),
    tabgroup = "#" + $this.parents(".tabs").data("tabgroup"),
    others = $this.closest("li").siblings().children("a"),
    target = $this.attr("href");
  others.classList.remove("active");
  $this.classList.add("active");
  document.querySelector(tabgroup).children("div").hide();
  document.querySelector(target).show();
});
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
