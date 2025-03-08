import { styled } from "next-yak";

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 1rem;
  padding-left: 0.5rem;
  font-weight: bold;
`

export const Input = styled.input`
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  background: #FFFFFFDD;
  border-color: transparent;
`