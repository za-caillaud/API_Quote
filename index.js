const picApi = document.querySelector("#pic");
const quoteApi = document.querySelector("#quote");

const getPicture = () => {
  fetch("https://picsum.photos/1400/1000").then((res) => {
    picApi.innerHTML = `<img src=${res.url} alt="img-picsum">`;
  });
};

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quoteApi.innerHTML = `
          <p>${data.content}</p>
          <br>
          <em>${data.author}</em>
        `;
    });
};

quoteApi.addEventListener("click", () => {
  getPicture();
  getQuote();
});

getPicture();
getQuote();
