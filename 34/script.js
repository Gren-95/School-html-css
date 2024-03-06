document.addEventListener("DOMContentLoaded", function () {
  const lists = document.querySelectorAll(".lub ol");

  lists.forEach((list) => {
    const items = Array.from(list.children);
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));
    items.forEach((item) => list.appendChild(item));
  });
});