function booksTemplate(index) {
  return `

      <div class="books">
        <h2>${books[index].name}</h2>
        
        
        <a href=""></a>
        
        <table>
          <tr>
            <th>${books[index].price}€</th>
            <th>${books[index].likes} ${books[index].liked}</th>

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
          <tr>
            <td>${books[index].comments[0].name}:</td>
            <td>${books[index].comments[0].comment}</td>

          </tr>
        </table>



      </div>
`;
}
