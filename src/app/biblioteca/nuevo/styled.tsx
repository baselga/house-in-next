import { styled } from "next-yak";
import { colors } from "@/theme/colors.yak";

export const Crad = styled.section`
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${colors.background.paper};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`