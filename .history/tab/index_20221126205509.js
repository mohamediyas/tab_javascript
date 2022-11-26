const tabs = document.querySelectorAll("#nav-tab li a");

const tabClick = (e) => {
  const activeTabs = document.querySelectorAll(".active");

  activeTabs.forEach((el) => {
    el.classList.remove("active");
  });
  e.target.parentElement.className += "active";
};

tabs.forEach((el) => {
  el.addEventListener("click", tabClick);
});

console.log(tabs);
