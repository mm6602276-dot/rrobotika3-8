const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const productTabs = document.querySelectorAll(".product-tab");
const productLinks = document.querySelectorAll("[data-product]");
const productPanels = document.querySelectorAll(".product-panel");

const setActiveProduct = (productId) => {
  productTabs.forEach((tab) => {
    const isActive = tab.dataset.productTarget === productId;
    tab.classList.toggle("active", isActive);
  });

  productPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === productId);
  });
};

if (dropdown && dropdownToggle) {
  dropdownToggle.addEventListener("click", () => {
    const isOpen = dropdown.classList.toggle("open");
    dropdownToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
      dropdownToggle.setAttribute("aria-expanded", "false");
    }
  });
}

productTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveProduct(tab.dataset.productTarget);
  });
});

productLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.dataset.product;
    setActiveProduct(target);
    dropdown?.classList.remove("open");
    dropdownToggle?.setAttribute("aria-expanded", "false");
  });
});
