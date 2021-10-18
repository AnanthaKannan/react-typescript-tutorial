import { GreetProps } from '../model/compModel'

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2> Name: { props.name}  Age: {props.age} isMarried: { `${props.isMarried}`} </h2>
        </div>
    )
}
