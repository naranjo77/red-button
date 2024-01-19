document.querySelector(".DoNotPress").addEventListener("click", () => {
    document.querySelectorAll(".hidden").forEach((item) => {
      item.classList.toggle("showing");
    });
});