
export const DiffEnv = () => {
    return (
        <div>
            CURRENT ENV - { process.env.ENVIRONMENT }
            { process.env.REACT_APP_SECRET_NAME}
            <p>
            NODE_ENV - { process.env.NODE_ENV }
            </p>
            <p>
                { JSON.stringify(process.env)}
            </p>
        </div>
    )
}
