import { Author } from './Author.js';
import { User } from './User.js';

/**
 * @param {string} title
 * @param {Date} year
 * @param {User} publicationBy
 * @param {Author[]} authors
 * @constructor
 * @property {string} title
 * @property {Date} year
 * @property {Author[]} authors
 * @property {User[]} likedUsers
 * @property {User} publicationBy
 */
export function Book(title, year, publicationBy, authors) {
    this.title = title;
    this.year = year;
    this.publicationBy = publicationBy;
    this.authors = authors;

    publicationBy.myBooks.push(this);
    authors.forEach((author) => {
        author.books.push(this);
    });

    Object.defineProperty(this, 'suggestedPublicators', {
        get() {
            return this.author.reduce((accum, author) => {
                const uniqueBooks = new Set([...accum, ...author.books])

                return[...uniqueBooks];
            }, []);
        }
    })
}
