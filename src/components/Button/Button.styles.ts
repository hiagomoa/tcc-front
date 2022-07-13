import styled, { css } from 'styled-components'

export type ButtonVariant = 'green'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  green: '#04D361',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }}
`
