const nextBtn = document.querySelector(".next");
const img = document.querySelector("img");
const url = "https://thatcopy.pw/catapi/rest/";

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getimage();
});

async function getimage() {
  const res = await fetch(url);
  const data = await res.json();
  img.src = data.url;
}
