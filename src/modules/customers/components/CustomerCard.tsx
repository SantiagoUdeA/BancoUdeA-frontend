import { Customer } from '@modules/customers/definitions/Customer'
import { Card, CardContent, IconButton, Typography } from '@mui/joy'
import { Pencil, Trash } from 'lucide-react'

interface CustomerCardProps {
    customer: Customer
    onDelete: (id: string) => void
    onEdit: (customer: Customer) => void
}

export default function CustomerCard({
    customer,
    onDelete,
    onEdit,
}: CustomerCardProps) {
    return (
        <Card>
            <Typography level="title-lg">{`${customer.firstName} ${customer.lastName}`}</Typography>
            <Typography level="body-sm">{customer.accountNumber}</Typography>
            <CardContent orientation="horizontal">
                <div>
                    <Typography level="body-xs">Balance:</Typography>
                    <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>
                        ${customer.balance}
                    </Typography>
                </div>
                <div className="ml-auto flex gap-2">
                    <IconButton
                        variant="outlined"
                        color="neutral"
                        onClick={() => onEdit(customer)}
                    >
                        <Pencil />
                    </IconButton>
                    <IconButton
                        variant="outlined"
                        color="danger"
                        onClick={() => onDelete(customer.id)}
                    >
                        <Trash />
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    )
}
