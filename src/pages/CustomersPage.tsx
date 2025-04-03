import CustomerCard from '@modules/customers/components/CustomerCard'
import CustomerForm from '@modules/customers/components/CustomerForm'
import { Customer } from '@modules/customers/definitions/Customer'
import useCustomer from '@modules/customers/hooks/useCustomer'
import Modal from '@modules/shared/components/Modal'
import { Button, Typography } from '@mui/joy'
import { useState } from 'react'
import { useLoaderData } from 'react-router'
import { toast } from 'react-toastify'

export default function CustomersPage() {
    const { deleteCustomer } = useCustomer()
    const [currentCustomer, setCurrentCustomer] = useState<Customer | null>(
        null,
    )
    const [openCreateModal, setOpenCreateModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)
    const customers = useLoaderData<Customer []>()

    const onDeleteCustomer = (id: string) => {
        toast.promise(deleteCustomer(id), {
            success: 'Customer deleted',
            pending: 'Deleting customer',
            error: {
                render({ data }) {
                    return <p>{(data as { message: string }).message}</p>
                },
            },
        })
    }

    const onEditCustomer = (customer: Customer) => {
        setOpenEditModal(true)
        setCurrentCustomer(customer)
    }

    return (
        <>
            <Typography level="title-lg">Customers</Typography>
            <div className="mt-4">
                <Button onClick={() => setOpenCreateModal(true)}>
                    Create customer
                </Button>
            </div>
            <div className="mt-2 grid md:grid-cols-3 gap-4">
                {customers.map((customer) => (
                    <CustomerCard
                        key={customer.id}
                        customer={customer}
                        onDelete={onDeleteCustomer}
                        onEdit={onEditCustomer}
                    />
                ))}
            </div>
            <Modal open={openCreateModal} setOpen={setOpenCreateModal}>
                <CustomerForm />
            </Modal>
            <Modal open={openEditModal} setOpen={setOpenEditModal}>
                {currentCustomer && (
                    <CustomerForm edit={true} defaultValues={currentCustomer} />
                )}
            </Modal>
        </>
    )
}
