// # Class inheritance

// 1. Create a base class called `Publication`.

//     - All publications need an identifier field
//     - All publications need an authors field
//     - All publications need a name field
//     - All publications need a content field
//     - All publications need a created field
//     - When a publication is created, save the current date into the created field
//     - All other fields are null by default
//     - All publications need a method that prints out their description (id, name, authors)
class Publication {
    constructor(name, identifier, authors){
        this.identifier = identifier;
        this.authors = authors;
        this.name = name;
        this.content = null;
        this.created = new Date();
    }

    describe() {
        console.log(`${this.identifier}, ${this.name}, ${this.authors}`);
    }
}

// 2. Create a class called "Blogpost" that is a child of Publication

//     - All blogpost have an edited field (given during their creation)
//     - All blogpost have an address field (given during their creation)


class Blogpost extends Publication {
    constructor(name, identifier, authors) {
        super(name, identifier, authors);
        this.edited = false;
        this.address = null;
    }
}
// 3. Create a class called "Book" that is a child of Publication

//     - All blogpost have an ISBN field  (given during their creation)
//         (for reference https://en.wikipedia.org/wiki/International_Standard_Book_Number)

class Book extends Publication {
    constructor(name, identifier, authors, isbn) {
        super(name, identifier, authors);
        this.isbn = isbn; 
    }
}
// 4. Create a class called "Score" that is a child of Publication

class Score extends Publication {
    constructor(type) {
        super();
        this.type = type;
    }
}
//     - All scores must have a type field (given during their creation)

// 5. Create 3 different blog posts, books and scores and call their description methods.

const firstBlogPost = new Blogpost("dog", "856", "Ben");
const firstBook = new Book("cat", "8695", "Marc" ,7854-484-32);
const firstScore = new Score("idontknow");

firstBlogPost.describe();
firstBook.describe();
firstScore.describe();