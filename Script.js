const api_key = "7d636327d2274c83a60cb487a941863d";
const apiUrl =
  "https://newsapi.org/v2/everything?q=bangladeshs&apiKey=7d636327d2274c83a60cb487a941863d";

const toogleBtn = document.querySelector(".toogle-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");
const searchIcon = document.querySelector(".search_icon");
const searchEl = document.querySelector(".large_screen_search ");
const searchInput = document.querySelector(".search_input");
const sportsEl = document.querySelector(".sports");
const politicsEl = document.querySelector(".politics");
const entertainmentEl = document.querySelector(".entertainment");

toogleBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("top-16");
});
searchIcon.addEventListener("click", () => {
  searchEl.classList.toggle("active");
});
const container = document.querySelector(".container");
async function load_news(searchValue) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=7d636327d2274c83a60cb487a941863d`
    );
    const data = await response.json();
    const news = data.articles;

    container.innerHTML = `${news
      .map((singleNews) => {
        const { url, title, author, content, urlToImage, publishedAt, source } =
          singleNews;

        const date = publishedAt.split("T");

        if (author) {
          return `  <a
              href=${url}
              class=" flex flex-col gap-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                class="rounded-t-lg"
                src=${urlToImage}
                alt=""
              />
              <div class="flex flex-col gap-2 p-4">
                <h5
                  class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  ${title}
                </h5>
                <p class="mr-3 text-lg">${source.name}<span class="p-5">${date[0]} ${date[1]}</span></p>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                 ${content}
                </p>
              </div>
            </a>`;
        }
      })
      .join("")}`;
  } catch (error) {
    container.innerHTML = error.msg;
  }
}
load_news("Bangladesh");

searchInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    dropdownMenu.classList.toggle("top-16");

    load_news(e.target.value);
    e.target.value = "";
  }
});
searchEl.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    dropdownMenu.classList.toggle("top-16");

    load_news(e.target.value);
    e.target.value = "";
  }
});
sportsEl.addEventListener("click", () => {
  load_news("sports");
});
politicsEl.addEventListener("click", () => {
  load_news("politics");
});
entertainmentEl.addEventListener("click", () => {
  load_news("entertainment");
});
