function booksTemplate(index) {
  return `

      <div class="books">
        <h2>${books[index].name}</h2>
        <a href=""></a>

        <table>
          <tr>
            <th>${books[index].price}€</th>
            <th id="likes-${index}">
          </tr>
          <tr>
            <td>Author:</td>
            <td>${books[index].author}</td>
          </tr>
          <tr>
            <td>Erscheinungsjahr:</td>
            <td>${books[index].publishedYear}</td>
          </tr>
          <tr>
            <td>
              <h3>Kommentare:</h3>
            </td>
          </tr>
            <tbody id="comments-${index}"></tbody>

          
        </table>
      <!-- Eingabefelder für neue Kommentare -->
      <div class="comment-input">
        <input id="name-input-${index}" type="text" placeholder="Dein Name" />
        <input id="comment-input-${index}" type="text" placeholder="Dein Kommentar" />
        <button onclick="addComment(${index})">Absenden</button>
      </div>
      </div>
`;
}
