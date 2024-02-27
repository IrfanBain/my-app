import Link from "next/link"
import styles from './auth.module.css'
export default function registerPage() {
    return(
        <div className={styles.register}>
            <h1 className="text-3xl font-bold">Register Page</h1>
            <span>Sudah punya akun? 
            <Link style={{
                color: 'red',
            }} 
            href={"/auth/login"}>Login</Link></span>
        </div>
    )
}