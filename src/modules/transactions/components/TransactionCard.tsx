import { Transaction } from '@modules/transactions/definitions/Transaction'
import { Card, CardContent, Typography } from '@mui/joy'

interface TransactionCardProps {
    transaction: Transaction
}

export default function TransactionCard({ transaction }: TransactionCardProps) {
    return (
        <Card>
            <Typography level="title-lg">{`#${transaction.id}`}</Typography>
            <CardContent>
                <Typography level="body-xs">{`To: ${transaction.receiverAccountNumber}`}</Typography>
                <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>
                    ${transaction.amount}
                </Typography>
            </CardContent>
        </Card>
    )
}
