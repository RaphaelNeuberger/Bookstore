function booksTemplate(index) {
  return `

      <div class="books">
        <h2>${books[index].name}</h2>
        
        
        <a href=""></a>
        
        <table>
          <<tr>
            <th>${books[index].price}€</th>
            <th>${books[index].likes} ${
    books[index].liked
  } <img class="heart" id="heart${index}" onclick="likes(${index})" src="./assets/icons/${index}"></th>

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



          ${getComments(index)}
         
        </table>



      </div>
`;
}
