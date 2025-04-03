import { zodResolver } from '@hookform/resolvers/zod'
import { Customer } from '@modules/customers/definitions/Customer'
import {
    CustomerFormInput,
    CustomerFormInputSchema,
} from '@modules/customers/definitions/CustomerFormInput'
import useCustomer from '@modules/customers/hooks/useCustomer'
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
import { CircleDollarSign, DollarSign, InfoIcon } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

interface CustomerFormProps {
    edit?: boolean
    defaultValues?: Customer
}

export default function CustomerForm({
    edit = false,
    defaultValues,
}: CustomerFormProps) {
    const { updateCustomer, createCustomer } = useCustomer()
    const { register, handleSubmit, formState } = useForm<CustomerFormInput>({
        resolver: zodResolver(CustomerFormInputSchema),
        defaultValues: {
            firstName: defaultValues ? defaultValues.firstName : '',
            lastName: defaultValues ? defaultValues.lastName : '',
            balance: defaultValues ? defaultValues.balance : 0,
        },
    })
    const onSubmit: SubmitHandler<CustomerFormInput> = (data) => {
        if (edit) {
            if (!defaultValues) return toast.error('Please try again')
            toast.promise(
                updateCustomer({
                    ...defaultValues,
                    ...data,
                }),
                {
                    success: 'Customer updated',
                    pending: 'Updating customer',
                    error: {
                        render({ data }) {
                            return (
                                <p>{(data as { message: string }).message}</p>
                            )
                        },
                    },
                },
            )
        } else {
            toast.promise(createCustomer(data), {
                success: 'Customer created',
                pending: 'Creating customer',
                error: {
                    render({ data }) {
                        return <p>{(data as { message: string }).message}</p>
                    },
                },
            })
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card>
                <Typography level="title-lg" startDecorator={<InfoIcon />}>
                    {edit ? 'Edit customer' : 'Create new customer'}
                </Typography>
                <Divider sx={{ marginTop: '.25rem' }} />
                <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" placeholder="John" {...register('firstName')} />
                    <FormHelperText>
                        {formState.errors.firstName?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input placeholder="Doe" {...register('lastName')} />
                    <FormHelperText>
                        {formState.errors.lastName?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Balance</FormLabel>
                    <Input
                        placeholder="Initial balance"
                        type="number"
                        {...register('balance')}
                        endDecorator={<CircleDollarSign />}
                    />
                    <FormHelperText>
                        {formState.errors.balance?.message}
                    </FormHelperText>
                </FormControl>
                <CardActions>
                    <Button type="submit" color="neutral">
                        Submit
                    </Button>
                </CardActions>
            </Card>
        </form>
    )
}
