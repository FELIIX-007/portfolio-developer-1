document.addEventListener("DOMContentLoaded", function () {
  const typedTextSpan = document.querySelector(".texto-animado");
  const textArray = ["Design", "Criativo", "Web"];
  const typingDelay = 100;
  const erasingDelay = 150;
  const newTextDelay = 1000;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 500);
    }
  }

  function init() {
    typedTextSpan.textContent = textArray[textArrayIndex];
    charIndex = textArray[textArrayIndex].length;
    setTimeout(erase, newTextDelay);
  }

  init();
});

// tela de carregamento do index
let progress = 0;
    const loadingNumber = document.getElementById("loading-number");
    const loadingContainer = document.getElementById("loading-container");
    const mainContent = document.getElementById("main-content");

    function updateLoading() {
      progress++;
      loadingNumber.textContent = `${progress}%`;

      if (progress < 100) {
        setTimeout(updateLoading, 7);
      } else {
        setTimeout(() => {
          loadingContainer.style.animation = "disappear 1s forwards";
          setTimeout(() => {
            loadingContainer.style.display = "none";
            mainContent.style.display = "block"; // Exibe o conteúdo
          }, 1000);
        }, 500);
      }
    }

    updateLoading();