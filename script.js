//Books render in Container

function renderBooks() {
  let books_container = document.getElementById("books_container");
  for (let renderIndex = 0; renderIndex < books.length; renderIndex++) {
    books_container.innerHTML += booksTemplate(renderIndex);
  }

  console.log(books);
}

function getComments(index) {
  heartButtonElement = document.getElementById(`heart${index}`);
  let content = "";
  for (let i = 0; i < books[index].comments.length; i++) {
    let comment = books[index].comments[i];
    content += getCommentsTemplate(books[index].comments[i]);
  }

  return content;
}

function getCommentsTemplate(comment) {
  return `<tr>
          <td>${comment.name}:</td>
          <td>${comment.comment}</td>
          </tr>;`;
}

function likes(i) {
  heartButtonElement = document.getElementById(`heart${i}`);
  //Schauen, ob das Buch schon gelike wurde
  console.log(books[i].liked);
  let isLiked = books[i].liked;

  if (isLiked) {
    // Herz rot machen
    console.log(heartButtonElement.src);
    heartButtonElement.src = "./assets/icons/heart.png";
  } else {
    heartButtonElement.src = "./assets/icons/heart2.png";
  }
}
