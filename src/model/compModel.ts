export type GreetProps = {
    name: string,
    age: number,
    isMarried ?: boolean // "?" this is optional
}

export type FullName = {
    name: {
        first: string,
        last: string
    }
}

export type NameList = {
    names: {
        first: string,
        last: string,
        id: number
    }[]
}

export type statusProps = {
    status: 'loading' | 'success' | 'error'
}

export type ChildProps = {
    children: string
}

export type OscarProps = {
    children: React.ReactNode
}

export type ButtonProps = {
    handleClick: () => void
}

export type ButtonPropsTwo = {
    handleClickProps: (event: React.MouseEvent<HTMLButtonElement>) => void
}