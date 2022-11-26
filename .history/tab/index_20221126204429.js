const tabs = document.querySelectorAll("#nav-tab li a");

tabs.forEach((el) => {
  el.addEventListener("click", tabClick);
});

const tabClick = (e) => {
  console.log(e);
};

console.log(tabs);
