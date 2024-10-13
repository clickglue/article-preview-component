const socialsButton = document.getElementById("socials-button");
const socialsBanner = document.getElementById("socials-banner");
const socialsButtonBackground = document.getElementById("button-background");

socialsButton.onclick = function () {
  if (socialsBanner.style.display === "none") {
    socialsBanner.style.display = "block";
  } else {
    socialsBanner.style.display = "none";
  }
};

function renderMobileScreen() {
  document.getElementById("socials-banner").innerHTML = `               
    <div class="socials--pressed__icons">
        <h1>share</h1>
        <img src="./images/icon-facebook.svg" alt="facebook" />
        <img src="./images/icon-twitter.svg" alt="twitter" />
        <img src="./images/icon-pinterest.svg" alt="pinterest" />
    </div>
    `;
}
function renderLargeScreen() {
  document.getElementById("socials-banner").innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="socials-callout">
        <rect width="248" height="47" rx="15" ry="15"/>
        <polygon points="0,0 40,0 20,20 0,0" transform="translate(104,47)"/>
    <div class="socials--pressed__icons">
        <h1>share</h1>
        <img src="./images/icon-facebook.svg" alt="facebook" />
        <img src="./images/icon-twitter.svg" alt="twitter" />
        <img src="./images/icon-pinterest.svg" alt="pinterest" />
    </div>
    </svg>              
      `;
}

function checkScreenSize() {
  if (window.matchMedia("(min-width: 1440px)").matches) {
    renderLargeScreen();
  } else {
    renderMobileScreen();
  }
}

// Check screen size on load
checkScreenSize();

// Listen for screen size changes
window.addEventListener("resize", checkScreenSize);
