import { AxiosError } from "axios"

export default function handleAxiosError(err: unknown){
    if(err instanceof AxiosError){
        throw new Error(err.response?.data.message)
    }
    throw new Error('Something went wrong, please try again later')
}