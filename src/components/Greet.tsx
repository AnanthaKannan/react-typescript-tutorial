import { GreetProps } from '../model/compModel'

export const Greet = (props: GreetProps) => {
    const { isMarried = true} = props
    return (
        <div>
            <h2> Name: { props.name}  Age: {props.age} isMarried: { `${isMarried}`} </h2>
        </div>
    )
}
