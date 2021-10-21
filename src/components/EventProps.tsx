import { Button, ButtonTwo } from './Button'
import { Input } from './Input'

export const EventProps = () => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <Button handleClick={()=> {
                console.log('test')
            }} />

            <ButtonTwo handleClickProps={(event, id)=> {
                console.log(id, event)
            }} />

            <Input value="name is here" handleChange={handleInputChange} />
        </div>
    )
}
