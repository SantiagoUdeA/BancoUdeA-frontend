import { zodResolver } from '@hookform/resolvers/zod'
import {
    MakeTransactionFormInput,
    MakeTransactionSchema,
} from '@modules/transactions/definitions/MakeTransactionFormInput'
import useTransaction from '@modules/transactions/hooks/useTransaction'
import {
    Button,
    Card,
    CardActions,
    Divider,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Typography,
} from '@mui/joy'
import { InfoIcon } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

interface MakeTransactionFormProps {
    className?: string
}

export default function MakeTransactionForm({
    className,
}: MakeTransactionFormProps) {
    const { register, handleSubmit, formState } =
        useForm<MakeTransactionFormInput>({
            resolver: zodResolver(MakeTransactionSchema),
        })
    const { makeTransaction } = useTransaction()
    const onSubmit: SubmitHandler<MakeTransactionFormInput> = (data) => {
        // sender: 0585dfcc-fd18-4f89-a917-666670edb9d7
        // receiver: 14daba57-366f-49c8-af4b-70f7ed4e263f
        toast.promise(
            makeTransaction(data),
            {
                success: 'Successfull transaction',
                pending: 'Making transaction',
                error: {
                    render({ data }) {
                        return (
                            <p>{(data as { message: string }).message}</p>
                        )
                    },
                },

            }
        )
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
            <Card>
                <Typography level="title-lg" startDecorator={<InfoIcon />}>
                    New transaction
                </Typography>
                <Divider sx={{ marginTop: '.25rem' }} />
                <FormControl>
                    <FormLabel>Sender account</FormLabel>
                    <Input
                        placeholder="Enter the sender account"
                        {...register('senderAccountNumber')}
                    />
                    <FormHelperText>
                        {formState.errors.senderAccountNumber?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Receiver account</FormLabel>
                    <Input
                        placeholder="Enter the receiver account"
                        {...register('receiverAccountNumber')}
                    />
                    <FormHelperText>
                        {formState.errors.receiverAccountNumber?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Amount</FormLabel>
                    <Input
                        placeholder="Enter the amount"
                        type="number"
                        {...register('amount')}
                    />
                    <FormHelperText>
                        {formState.errors.amount?.message}
                    </FormHelperText>
                    <CardActions>
                        <Button type="submit" color="neutral">
                            Submit
                        </Button>
                    </CardActions>
                </FormControl>
            </Card>
        </form>
    )
}
