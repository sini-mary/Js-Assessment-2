const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];

//Create a function called getAvailableBooks that returns an array of all available
//books.

function getAvailableBooks(books){

    newEmpty=[]
    for (i=0;i>=books;i++){
        if (i.key==title){
           console.log( newEmpty[i].push(i));
        }
    }
}
console.log(getAvailableBooks(books));
//Create a function getBooksByAuthor that takes an author's name as an argument and
//returns an array of all books by that author.
function getBooksByAuthor(author){
    newEmpty=[]
    for (i=0;i<=books.author;i++){
        if (i==books[i].author){
           console.log( newEmpty.push(i));
        }
    }
}
let author="J.D Salinger";
getBooksByAuthor(author);
//Create a function addNewBook that takes a book object as an argument and adds it
//to the library, ensuring that the new book has all required properties (title, author,
   // publicationYear, and isAvailable).

function addNewBook(Newbook){
   
 console.log(Newbook.Assign(books));
}
Newbook= {
    title:"The Silent Patient",
    author:"Fred Cameron",
    publicationYear:2015
 }
addNewBook(Newbook);
//Create a function checkoutBook that takes a book title as an argument and changes
//the book's isAvailable property to false. If the book is not found in the library, the
//function should return a message indicating that the book is not available.
function checkoutBook(title){
  
  for (i=0;i<=books.title;i++){
    if (i==books.isAvailable){
        return true
    }
    else{
        return false
    }
  }    
}
let   title="Joseph"

console.log(checkoutBook(title));
    
//Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.

function returnBook(title){

books.isAvailable=false
for (title=0;books.title<=books;title++){
if (title==books[i].title){
    books.isAvailable=true
}
else{
    console.log("The book does not exist in the library")
}
}
}
title="Seth Rowland"
console.log(returnBook(title));