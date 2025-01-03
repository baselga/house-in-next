import { Book } from "@/db/book/book.type";
import * as S from "./styled";
import { colors } from "@/theme/colors.yak";
import GameIconsBookCover from "../GameIconsBookCover";

function BookCard({ book }: { book: Book }) {
  return (
    <S.Root>
      <S.ImageWrapper>
        <GameIconsBookCover color={colors.primary.main} />
      </S.ImageWrapper>
      <S.DataWrapper>
        <S.Title className="title">{book.title}</S.Title>
        <div>
          <S.BookSaga className="sagaBook">{book.sagaBook?.name}</S.BookSaga>
          <S.Author className="author">{book.author?.name}</S.Author>
        </div>
      </S.DataWrapper>
    </S.Root>
  );
}

export default BookCard;