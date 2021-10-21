import { ButtonProps, ButtonPropsTwo } from '../model/compModel'

export const Button = (props: ButtonProps) => {
    return <button onClick={props.handleClick} >Click</button>
}

export const ButtonTwo = (props: ButtonPropsTwo) => {
    return <button onClick={(event) => props.handleClickProps(event, 10)} >click 2</button>
}