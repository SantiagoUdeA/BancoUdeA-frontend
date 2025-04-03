import { Transaction } from '@modules/transactions/definitions/Transaction'
import useTransaction from '@modules/transactions/hooks/useTransaction'
import {
    Button,
    Card,
    CardActions,
    Divider,
    FormControl,
    FormLabel,
    Input,
    Typography,
} from '@mui/joy'
import { InfoIcon, Search } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

interface SearchTransactionsFormProps {
    setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>
}

export default function SearchTransactionsForm({
    setTransactions,
}: SearchTransactionsFormProps) {
    const [query, setQuery] = useState('')
    const { getTransactions } = useTransaction()

    function handleSearch(
        _event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ): void {
        if(query === '') {
            toast.info('Please enter a valid ID')
            return
        }
        toast
            .promise(getTransactions(query), {
                pending: 'Searching transactions',
                error: {
                    render({ data }) {
                        return <p>{(data as { message: string }).message}</p>
                    },
                },
            })
            .then((transactions) => {
                if (transactions) setTransactions(transactions)
            })
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setQuery(event.target.value)
    }

    return (
        <Card>
            <Typography level="title-lg" startDecorator={<InfoIcon />}>
                Search transactions by account number
            </Typography>
            <Divider sx={{ marginTop: '.25rem' }} />
            <FormControl>
                <FormLabel>Account number</FormLabel>
                <Input
                    placeholder="Enter the account number"
                    required
                    onChange={handleChange}
                />
            </FormControl>
            <CardActions>
                <Button
                    color="neutral"
                    startDecorator={<Search />}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </CardActions>
        </Card>
    )
}
