import { z } from 'zod'

export const MakeTransactionSchema = z.object({
    senderAccountNumber: z.string({ message: 'Must be alphanumeric' }).nonempty({ message: 'Sender account is required'}),
    receiverAccountNumber: z.string({ message: 'Must be alphanumeric' }).nonempty({ message: 'Receiver account is required'}),
    amount: z.coerce.number({ message: 'Amount must be a number '}).positive({ message: 'Amount must be positive'})
})

export type MakeTransactionFormInput = z.infer<typeof MakeTransactionSchema>