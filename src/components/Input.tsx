import { inputProps } from '../model/compModel'

export const Input = (props: inputProps) => {
    return <input type="text" value={props.value} onChange={props.handleChange} />
}
