const img = document.querySelector("#car-img img");
const svg = document.querySelector("#car-svg svg");
const textTitle = document.querySelector("#text-title");
const textImg = document.querySelector("#text-img");
const textPara = document.querySelector("#text-para");

// Set initial styles for textPara
textPara.style.opacity = "0";

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  // Check screen width
  const isSmallScreen = window.matchMedia("(max-width: 1024px)").matches;

  if (isSmallScreen) {
    // For small screens, set width to 100% and opacity for img only
    img.style.setProperty("width", "100%", "important");
    svg.style.setProperty("width", "100%", "important");

    // Adjust opacity for img only
    const opacity = Math.max(0, 1 - scrollPosition / 900); // Fade out gradually
    img.style.opacity = opacity;
  } else {
    // Calculate opacity and width for img and svg for larger screens
    const opacity = Math.max(0, 1 - scrollPosition / 900); // Fade out gradually
    const width = Math.min(75, 72 + scrollPosition / 260); // Gradually increase width

    img.style.opacity = opacity;
    img.style.setProperty("width", `${width}%`, "important");
    svg.style.setProperty("width", `${width}%`, "important");
  }

  // Fade out textTitle smoothly at 500px
  if (scrollPosition >= 500) {
    textTitle.style.transition = "opacity 0.5s ease"; // Smooth transition
    textTitle.style.opacity = "0";
    textImg.style.transition = "opacity 0.5s ease"; // Smooth transition
    textImg.style.opacity = "0";
  } else {
    textTitle.style.transition = "opacity 0.5s ease"; // Smooth transition
    textTitle.style.opacity = "1";
    textImg.style.transition = "opacity 0.5s ease"; // Smooth transition
    textImg.style.opacity = "1";
  }

  // Fade in textPara smoothly at 700px
  if (scrollPosition >= 700) {
    textPara.style.transition = "opacity 0.5s ease"; // Smooth transition
    textPara.style.opacity = "1";
  } else {
    textPara.style.transition = "opacity 0.5s ease"; // Smooth transition
    textPara.style.opacity = "0";
  }
});

  
  

const fixedBanner = document.querySelector("#fixed-banner");

// Set the transition style once
fixedBanner.style.transition = "margin-top 0.2s";

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const fixedBanner = document.getElementById("fixed-banner");

  if (scrollPosition >= 3300) {
    fixedBanner.style.marginTop = "-1400px"; // Smoothly move up
  } else if (scrollPosition >= 3100) {
    fixedBanner.style.marginTop = "-1200px"; // Smoothly move up
  } else if (scrollPosition >= 2900) {
    fixedBanner.style.marginTop = "-900px"; // Smoothly move up
  } else if (scrollPosition >= 2700) {
    fixedBanner.style.marginTop = "-500px"; // Smoothly move up
  } else {
    fixedBanner.style.marginTop = "0px"; // Smoothly reset
  }
});

