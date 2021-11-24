import { ChildProps } from '../../model/compModel'
import { useState } from 'react'

export const UseState = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() =>setCount(count + 1)} >add</button>
            <button onClick={() =>setCount(count - 1)} >subs</button>
        </div>
    )
}
