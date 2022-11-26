const tabs = document.querySelectorAll("#nav-tab li a");

const tabClick = (e) => {
  const activeTabs = document.querySelectorAll(".active");

  activeTabs.forEach((el) => {
    el.classList.remove("active");
  });

  const pages = document.querySelectorAll(".page");

  pages.forEach((page) => {
    page.classList.remove("page-active");
  });

  e.target.parentElement.className += "active";

  let id = e.target.href.split("#")[1];

  const page = document.getElementById(id);

  page.classList.add("page-active");
};

tabs.forEach((el) => {
  el.addEventListener("click", tabClick);
});
