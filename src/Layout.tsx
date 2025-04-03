import Header from "@modules/shared/components/Header";
import { Outlet } from "react-router";

export default function Layout(){

    return(
        <>
            <Header className="px-16 py-2"/>
            <main className="px-16 py-2">
                <Outlet/>
            </main>
        </>
    )
}