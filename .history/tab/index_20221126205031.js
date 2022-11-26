const tabs = document.querySelectorAll("#nav-tab li a");

const tabClick = (e) => {
  e.target.parentElement.className += "active";
};

tabs.forEach((el) => {
  el.addEventListener("click", tabClick);
});

console.log(tabs);
