class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn; // Bar code
  }
  printIsbn() {
    console.log(this.isbn)
  }
}
let book = new Book('title', 'pag', 'isbn');


class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn);
    this.technology = technology;
  }
  printTechnology() {
    console.log(this.technology);
  }
}
let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'javaScript')
console.log(jsBook.title)
