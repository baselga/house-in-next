import { styled } from "next-yak";

export const Root = styled.div`
  position: relative;
  flex: 1;
  & > svg {
    position: absolute;
    left: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  font-size: 1.12rem;
  border-radius: 0.25rem;
  background: #FFFFFFDD;
`