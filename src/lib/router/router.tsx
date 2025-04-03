import { createBrowserRouter, Navigate } from "react-router";
import { customersRoute, makeTransactionRoute, searchTransactionsRoute } from "./routes";
import CustomersPage from "../../pages/CustomersPage";
import Layout from "@/Layout";
import customerLoader from "@modules/customers/loader/CustomerLoader";
import ErrorPage from "@/pages/ErrorPage";
import MakeTransactionPage from "@/pages/MakeTransactionPage";
import SearchTransactionsPage from "@/pages/SearchTransactionsPage";

const browserRouter = createBrowserRouter([
    {
        "path": "/",
        Component: Layout,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Navigate to={customersRoute}/>
            },
            {
                path: customersRoute,
                element: <CustomersPage/>,
                loader: customerLoader,
            },
            {
                path: searchTransactionsRoute,
                element: <SearchTransactionsPage/>
            },
            {
                path: makeTransactionRoute,
                element: <MakeTransactionPage/>
            }
        ]
    },
])

export default browserRouter