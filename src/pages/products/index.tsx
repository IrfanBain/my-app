/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function productPages() {
    const [isLogin,  setIsLogin] = useState(true)
    const [product, setIsProduct] = useState([])
    const router = useRouter()
    const {push} = router
    useEffect(() => {
        if(!isLogin) {
            push('/auth/login')
        }
    }, [])

    useEffect( () => {
        fetch('/api/product')
        .then(res => res.json())
        .then(data => {
            setIsProduct(data.data)
        })
    })

    return(
        <div>
            <h1>Produtcs Pages</h1>
            {product.map((item: any) => (
                <div key={item.id}>
                    <h3>nama : {item.name}</h3>
                    <p>harga:  {item.price}</p>
                    <p style={{marginBottom: '10px'}}>ukuran:  {item.size}</p>
                </div>
            ))}
        </div>
    )
}