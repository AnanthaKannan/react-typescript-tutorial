import { NameList } from '../model/compModel'

export function ListDetails(props: NameList) {
    return (
        <div>
            {
                props.names.map((name) => {
                    return (
                    <h5 key={name.first}> 
                        { name.first} {name.last} 
                    </h5>)
                })
            }
        </div>
    )
}
