import { styled } from "next-yak";
import { colors } from "@/theme/colors.yak";
import { zIndex } from "@/theme/constants.yak";

export const Header = styled.header`
  color: ${colors.primary.contrastText};
  padding: 1rem 0;
  background-color: ${colors.primary.main};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  z-index: ${zIndex.header};
  top: 0;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & h1 {
    color: ${colors.secondary.light};
  }
`;

export const Nav = styled.nav`
  & ul {
    display: flex;
    gap: 1rem;
  }
  & li {
    list-style: none;
  }
  & a {
    color: ${colors.primary.contrastText};
    text-decoration: none;
  }
`;
