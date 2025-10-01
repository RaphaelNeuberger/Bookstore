//Books render in Container
console.log(books);

function renderBooks() {
  let books_container = document.getElementById("books_container");
  for (let renderIndex = 0; renderIndex < books.length; renderIndex++) {
    books_container.innerHTML += "<p>${books.name[renderIndex]}</p>";
  }

  console.log(books);
}
