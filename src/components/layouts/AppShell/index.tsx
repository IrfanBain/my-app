
import { useRouter } from "next/router";
import Navbar from "../navbar";
//mengimpor

type AppShellProps = {
    children: React.ReactNode;
}

const disableNavbar = ["/auth/login", "/auth/register", "/404"]
export default function AppShell(props: AppShellProps) {
    const {children} = props
    const { pathname } = useRouter()
    return(
        <main>
            {!disableNavbar.includes(pathname) && <Navbar /> }
            {children}
        </main>
    )
}