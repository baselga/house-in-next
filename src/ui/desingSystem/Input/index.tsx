import React, { useId } from "react"
import * as S from "./styled"

type InputProps = {
  label?: string
} & React.InputHTMLAttributes<HTMLInputElement>
export const Input = (props: InputProps) => {
  const id = useId()
  const { label, type = "text", ...rest } = props
  
  return (
    <S.Root>
      {label &&
      <S.Label htmlFor={id}>{label}</S.Label>
      }
      <S.Input id={id} type={type} {...rest}  /> 
    </S.Root>
  )
}