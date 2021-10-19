import { ButtonProps, ButtonPropsTwo } from '../model/compModel'

export const Button = (props: ButtonProps) => {
    return <button onClick={props.handleClick} >Click</button>
}

export const ButtonTwo = (props: ButtonPropsTwo) => {
    return <button onClick={props.handleClickProps} >click 2</button>
}