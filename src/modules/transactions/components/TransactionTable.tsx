import { Transaction } from "@modules/transactions/definitions/Transaction"
import { Table } from "@mui/joy"

interface TransactionTableProps{

    transactions: Transaction[]
}

export default function TransactionTable({ transactions }: TransactionTableProps){

    return( 
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(transaction => 
                    <tr>
                        <td>{transaction.id}</td>
                        <td>{transaction.senderAccountNumber}</td>
                        <td>{transaction.receiverAccountNumber}</td>
                        <td>{transaction.amount}$</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}