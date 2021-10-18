import { type } from "os"

export type GreetProps = {
    name: string,
    age: number,
    isMarried: boolean
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