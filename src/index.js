import { User } from './User.js';
import { Book } from './Book.js';
import { Author } from './Author.js';

const rammfall = new User('Bohdan', new Date());
const yura = new User('Yura', new Date());
const julia = new User('Julia', new Date());
const horror = new Book('IT', 'Stephen King');
const manga = new Book('Jojo');

rammfall.addToFriends(yura);
rammfall.addToFriends(julia);
rammfall.likeBook(manga);

rammfall[friendsNames];
console.log(rammfall);

