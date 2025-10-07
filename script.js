//Books render in Container

function renderBooks() {
  let books_container = document.getElementById("books_container");
  for (let renderIndex = 0; renderIndex < books.length; renderIndex++) {
    books_container.innerHTML += booksTemplate(renderIndex);
  }

  console.log(books);
}

function getComments(index) {
  let content = "";
  for (let i = 0; i < books[index].comments.length; i++) {
    let comment = books[index].comments[i];
    content += getCommentsTemplate(comment);
  }

  return content;
}

function getCommentsTemplate(comment) {
  return `<tr>
          <td>${comment.name}:</td>
          <td>${comment.comment}</td>
          </tr>;`;
}
