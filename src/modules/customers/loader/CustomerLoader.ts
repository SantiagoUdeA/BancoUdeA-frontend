import { Customer } from "@modules/customers/definitions/Customer"
import useAxios from "@modules/shared/hooks/useAxios"

const customerLoader = async () => {
    const axios = useAxios()
    const res = await axios.get<Customer[]>('/customers')
    return res.data
}

export default customerLoader