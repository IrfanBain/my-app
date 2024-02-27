/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link"
import { useRouter } from "next/router"
import styles from './auth.module.css'

export default function loginPage() {
    const {push} = useRouter()
    // const {push} = router
    
        const handlerLogin = () => {
            push("/products")
        }
    return(
        <div className={styles.login}>
            <h1 className="text-3xl font-bold">Login Page</h1>
            <span style={{
                padding: '5px',
                borderRadius: '8px',
            }}>
                Belum punya akun? Daftar <Link style={{
                    color: 'red'
                }} 
                href={"/auth/register"}> Disini</Link>
            </span>

            <div className="form">
                <button className="
                bg-slate-700 
                p-2 
                text-white" onClick={() => handlerLogin()}>Login</button>
            </div>
        </div>
    )
}