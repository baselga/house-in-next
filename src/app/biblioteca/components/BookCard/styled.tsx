import { colors } from "@/theme/colors.yak";
import { styled } from "next-yak";

export const Root = styled.div`
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: ${colors.background.paper};
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 80px;
  & > img,
  & > svg {
    width: 100%;
    height: auto;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Author = styled.span`
  font-size: 1rem;
  font-style: italic;
  padding-left: 1.5rem;
`;

export const BookSaga = styled.span`
  font-weight: bold;
  font-size: 1.25rem;
`;
