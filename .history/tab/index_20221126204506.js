const tabs = document.querySelectorAll("#nav-tab li a");

const tabClick = (e) => {
  console.log(e);
};

tabs.forEach((el) => {
  el.addEventListener("click", tabClick);
});

console.log(tabs);
