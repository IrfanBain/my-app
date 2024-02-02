import Link from "next/link"
export default function registerPage() {
    return(
        <div>
            <h1>Register Page</h1>
            <span>Sudah punya akun? <Link href={"/auth/login"}>Login</Link></span>
        </div>
    )
}