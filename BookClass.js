class Book extends Media {
    constructor(author, title, pages ,isCheckedOut = false, ratings = []) {
        super(title = title, isCheckedOut = false, ratings = []);
        this._author = author;
        this._pages = pages;

    }
    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }



}