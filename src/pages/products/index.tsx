/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function productPages() {
    const [isLogin,  setIsLogin] = useState(false)
    const router = useRouter()
    const {push} = router
    useEffect(() => {
        if(!isLogin) {
            push('/auth/login')
        }
    }, [])
    return(
        <div>
            <h1>Produtc Pages</h1>
        </div>
    )
}