import { styleProps } from '../model/compModel'

export const StyleProps = (props: styleProps) => {
    return (
        <div style={props.styles}>
            Text content goes here
        </div>
    )
}
