import { colors } from "@/theme/colors.yak";
import { styled } from "next-yak";

export const Button = styled.button`
  border-radius: 0.5rem;
  border-color: ${colors.primary.light};
  background-color: ${colors.primary.main};
  color: ${colors.primary.contrastText};
  display: flex;
  gap: 0.75rem;
  align-items: center;
  padding: 0.5rem 0.75rem 0.5rem 1rem;
  font-size: 1rem;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${colors.primary.light};
  }
`