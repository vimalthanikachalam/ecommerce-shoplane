//Toggle Nav Bar

export const navbar_toogle = () => {
  const nav = document.getElementById("nav_link");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
  console.log("click");
};
