import useAxios from "@modules/shared/hooks/useAxios";
import handleAxiosError from "@modules/shared/utils/HandleAxiosError";
import { MakeTransactionFormInput } from "@modules/transactions/definitions/MakeTransactionFormInput";
import { Transaction } from "@modules/transactions/definitions/Transaction";

export default function useTransaction(){

    const axios = useAxios()
    const transactionsEndpoint = '/transactions'

    const makeTransaction = async (data: MakeTransactionFormInput) => {
        try{
            await axios.post(transactionsEndpoint, data)
        }catch(err){
            handleAxiosError(err)
        }
        
    }

    const getTransactions = async (accountNumber: string) => {
        try{
            const res = await axios.get<Transaction[]>(`${transactionsEndpoint}/${accountNumber}`)
            return res.data
        }catch(err){
            handleAxiosError(err)
            return null
        }
    }

    return { makeTransaction, getTransactions}
}