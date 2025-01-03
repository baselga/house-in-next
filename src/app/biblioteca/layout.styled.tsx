import { colors } from "@/theme/colors.yak";
import { styled } from "next-yak";

export const LayoutHeader = styled.header`
  background-color: ${colors.secondary.dark};
  color: ${colors.secondary.contrastText};
  margin-bottom: 2rem;
  & > div {
    display: flex;
    min-height: 140px;
    align-items: center;
    font-size: 2.4rem;
  }
`;
