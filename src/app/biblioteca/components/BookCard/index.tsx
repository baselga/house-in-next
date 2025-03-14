import { Book } from "@/db/book/book.type";
import GameIconsBookCover from "../GameIconsBookCover";

function BookCard({ book }: { book: Book }) {
  return (
      <article className="bg-base-200 p-4 rounded-sm text-base-content flex flex-wrap gap-4 shadow-sm">
        <div className="w-full max-w-20">
          <GameIconsBookCover className="w-full h-auto text-primary" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">{book.title}</h2>
          <div>
            <span className="text-xl font-bold">{book.sagaBook?.name}</span>
            <span className="pl-6 italic">{book.author?.name}</span>
          </div>
        </div >
      </article>
  );
}

export default BookCard;
