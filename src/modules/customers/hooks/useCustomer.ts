import { Customer } from '@modules/customers/definitions/Customer'
import { CustomerFormInput } from '@modules/customers/definitions/CustomerFormInput'
import useAxios from '@modules/shared/hooks/useAxios'
import { useRevalidator } from 'react-router'
import { v4 as uuidv4 } from 'uuid'

export default function useCustomer() {
    const customersEndpoint = '/customers'
    const axios = useAxios()
    const { revalidate } = useRevalidator()

    const createCustomer = async (data: CustomerFormInput) => {
        await axios.post(customersEndpoint, {
            accountNumber: uuidv4(),
            ...data,
        })
        revalidate()
    }

    const updateCustomer = async (data: Customer) => {
        await axios.put(`${customersEndpoint}/${data.id}`, data)
        revalidate()
    }

    const deleteCustomer = async (id: string) => {
        await axios.delete(`${customersEndpoint}/${id}`)
        revalidate()
    }

    return { createCustomer, updateCustomer, deleteCustomer }
}
