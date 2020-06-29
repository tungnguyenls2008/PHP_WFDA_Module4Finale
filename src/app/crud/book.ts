export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;

  updateBook(id: number, book: Book): any;
}
