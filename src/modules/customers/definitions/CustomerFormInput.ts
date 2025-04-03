import { z } from 'zod' 
import { CustomerSchema } from "@modules/customers/definitions/Customer"

export const CustomerFormInputSchema = CustomerSchema.pick({
    firstName: true,
    lastName: true,
    balance: true
})

export type CustomerFormInput = z.infer<typeof CustomerFormInputSchema>