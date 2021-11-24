export default function () {
  let themeswitch = document.querySelector("#themeswitch > i");
  //console.log(document.querySelector("#themeswitch > i"));
  themeswitch.classList.toggle("bi-moon-fill");
  themeswitch.classList.toggle("bi-brightness-high-fill");
  document.documentElement.classList.toggle("sakaiUserTheme-dark");
}
