import { Button, ButtonTwo } from './Button'

export const EventProps = () => {
    return (
        <div>
            <Button handleClick={()=> {
                console.log('test')
            }} />

            <ButtonTwo handleClickProps={(event)=> {
                console.log('test')
            }} />
        </div>
    )
}
