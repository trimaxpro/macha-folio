lucide.createIcons();

const buyButton = document.getElementById("buyButton");

buyButton.addEventListener("click", () => {
  const original = buyButton.innerHTML;

  buyButton.innerHTML = `
    Added to ritual
    <i data-lucide="check"></i>
  `;

  lucide.createIcons();

  setTimeout(() => {
    buyButton.innerHTML = original;
    lucide.createIcons();
  }, 1800);
});
