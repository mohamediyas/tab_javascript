const tabs = document.querySelectorAll("#nav-tab li a");

const tabClick = (e) => {
  const activeTabs = document.querySelectorAll(".active");

  activeTabs.forEach((el) => {
    el.classList.remove("active");
  });
  e.target.parentElement.className += "active";

  let id = e.target.href;

  console.log(id);
};

tabs.forEach((el) => {
  el.addEventListener("click", tabClick);
});
