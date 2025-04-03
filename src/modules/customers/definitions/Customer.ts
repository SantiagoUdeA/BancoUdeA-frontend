import { z } from 'zod'

export const CustomerSchema = z.object({
    id: z.string().nonempty(),
    firstName: z.string().nonempty({ message: 'First name is required'}),
    lastName: z.string().nonempty({ message: 'Last name is required'}),
    accountNumber: z.string().nonempty(),
    balance: z.coerce.number().min(0, {message: 'Balance cant be negative'}),
})

export type Customer = z.infer<typeof CustomerSchema>
