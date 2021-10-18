import { FullName } from '../model/compModel'

export function SendObj(props:FullName) {
    return (
        <div>
            { JSON.stringify(props) }
        </div>
    )
}
