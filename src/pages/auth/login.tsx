/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link"
import { useRouter } from "next/router"

export default function loginPage() {
    const router = useRouter()
    const {push} = router
    
        const handlerLogin = () => {
            push("/products")
        }
    return(
        <div>
            <h1>Login Page</h1>
            <span>Belum punya akun? <Link href={"/auth/register"}>Daftar Disini</Link></span>

            <div className="form">
                <button onClick={() => handlerLogin()}>Login</button>
            </div>
        </div>
    )
}