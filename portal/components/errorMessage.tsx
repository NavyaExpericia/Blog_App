export const Error=({message, className}: {message: string; className?: string})=>{
    return(
        <small className={`text-red-500 ${className || ''}`}>{message}</small>
    )
}