//Books render in Container

function renderBooks() {
  let books_container = document.getElementById("books_container");
  books_container.innerHTML = "";
  for (let renderIndex = 0; renderIndex < books.length; renderIndex++) {
    books_container.innerHTML += booksTemplate(renderIndex);
    renderLikes(renderIndex);
    renderComments(renderIndex);
  }

  console.log(books);
}

function renderComments(index) {
  let commentsContainer = document.getElementById(`comments-${index}`);

  let content = "";

  for (let comment of books[index].comments) {
    content += getCommentsTemplate(comment);
  }

  commentsContainer.innerHTML = content;
}

// function getComments(index) {
//   heartButtonElement = document.getElementById(`heart${index}`);
//   let content = "";
//   for (let i = 0; i < books[index].comments.length; i++) {
//     let comment = books[index].comments[i];
//     content += getCommentsTemplate(books[index].comments[i]); // man könnte es auch so schreiben  content += getCommentsTemplate(books[index].comments[i]) und zeile 16 weglasse lesbarer ist die version  }
//   }
//   return content;
// }

function getCommentsTemplate(comment) {
  return `<tr>
          <td>${comment.name}:</td>
          <td>${comment.comment}</td>
          </tr>`;
}

function renderLikes(booksIndex) {
  let likesContainer = document.getElementById(`likes-${booksIndex}`);
  let singleBook = books[booksIndex];
  if (singleBook.liked) {
    likesContainer.innerHTML = `<span>${singleBook.likes}</span>
    <img id="heart${booksIndex}" onclick="likes(${booksIndex})" src="./assets/icons/heart2.png" class="heart" />
    
    `;
  } else {
    likesContainer.innerHTML = `<span>${singleBook.likes}</span>
    <img id="heart${booksIndex}" onclick="likes(${booksIndex})" src="./assets/icons/heart.png" class="heart" />
    
    `;
  }
}

// function likes(i) {
//   heartButtonElement = document.getElementById(`heart${i}`);
//   //Schauen, ob das Buch schon gelike wurde
//   console.log(books[i].liked);
//   let isLiked = books[i].liked;

//   if (isLiked) {
//     // Herz rot machen
//     console.log(heartButtonElement.src);
//     heartButtonElement.src = "./assets/icons/heart.png";
//   } else {
//     heartButtonElement.src = "./assets/icons/heart2.png";
//   }
// }

function likes(i) {
  // Das aktuelle Buch aus dem Array holen
  let book = books[i];

  // Prüfen, ob es bereits geliked wurde
  if (book.liked) {
    // Wenn ja → Like entfernen
    book.liked = false;
    book.likes--;
  } else {
    // Wenn nein → Like hinzufügen
    book.liked = true;
    book.likes++;
  }

  // Anzeige aktualisieren (Herz & Like-Zahl)
  renderLikes(i);
}

function addComment(index) {
  // Eingabefelder holen
  let nameInput = document.getElementById(`name-input-${index}`);
  let commentInput = document.getElementById(`comment-input-${index}`);

  // Werte auslesen
  let name = nameInput.value.trim();
  let comment = commentInput.value.trim();

  // Validierung: leere Eingaben verhindern
  if (name === "" || comment === "") {
    alert("Bitte Name und Kommentar eingeben!");
    return;
  }

  // Kommentar in das jeweilige Buch-Objekt einfügen
  books[index].comments.push({
    name: name,
    comment: comment,
  });

  // Eingabefelder leeren
  nameInput.value = "";
  commentInput.value = "";

  // Kommentare neu rendern
  renderComments(index);
}
