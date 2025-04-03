import SearchTransactionsForm from '@modules/transactions/components/SearchTransactionsForm'
import TransactionTable from '@modules/transactions/components/TransactionTable'
import { Transaction } from '@modules/transactions/definitions/Transaction'
import { useState } from 'react'

export default function SearchTransactionsPage() {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    return (
        <>
            <section className="max-w-[1200px] m-auto pt-4">
                <SearchTransactionsForm setTransactions={setTransactions} />
                {transactions.length > 0 && (
                    <TransactionTable transactions={transactions} />
                )}
            </section>
        </>
    )
}
