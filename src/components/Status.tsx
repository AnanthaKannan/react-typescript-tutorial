import { statusProps } from '../model/compModel'

export function Status(props:statusProps) {
    return (
        <div>
            { props.status }
        </div>
    )
}
