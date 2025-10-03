//Books render in Container

function renderBooks() {
  let books_container = document.getElementById("books_container");
  for (let renderIndex = 0; renderIndex < books.length; renderIndex++) {
    books_container.innerHTML += booksTemplate(renderIndex);
  }

  console.log(books);
}


function noComments(){
  const comments >= ${books[index].comments[0].comment[]}

}