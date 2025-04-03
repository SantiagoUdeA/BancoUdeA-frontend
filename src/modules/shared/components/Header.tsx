import { customersRoute, makeTransactionRoute, searchTransactionsRoute } from '@lib/router/routes'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router'

interface HeaderProps {
    className?: string
}

export default function Header({ className }: HeaderProps) {
    const location = useLocation()

    const links = [
        {
            label: 'Customers',
            route: customersRoute,
        },
        {
            label: 'Transactions',
            route: searchTransactionsRoute,
        },
        {
            label: 'Transfer',
            route: makeTransactionRoute,
        },
    ]

    return (
        <header
            className={clsx(
                'w-screen bg-primary text-white flex justify-between items-center',
                className,
            )}
        >
            <h1 className="text-3xl font-primary">BancoUdeA</h1>
            <nav>
                <ul className="flex gap-2">
                    {links.map((link) => (
                        <li
                            key={link.label}
                            className={clsx(
                                'text-white/70 hover:text-white transition-colors ease-out hover:ease-in duration-100',
                                link.route === location.pathname
                                    ? '!text-white'
                                    : '',
                            )}
                        >
                            <Link to={link.route}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
