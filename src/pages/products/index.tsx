/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from '@/styles/products.module.scss'

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
        <div className={styles.product}>
            <h1 className={styles.product__title}>Produtcs</h1>
            <div className={styles.product__content}>
                {product.length > 0 ? (
                    <>
                        {product.map((item: any) => (
                        <div key={item.id} className={styles.product__content__item}>
                        <div className={styles.product__content__item__image}>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <h4 className={styles.product__content__item__name}>
                            {item.name}
                        </h4>
                        <p className={styles.product__content__item__category}>
                            {item.category}
                        </p>
                        <p className={styles.product__content__item__price}>
                            {item.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}
                        </p>
                    </div>
                ))}
                    </>
                ) : (
                    <>
                        <div className={styles.product__content__skeleton}>
                        <div className={styles.product__content__skeleton__image} />
                        <div className={styles.product__content__skeleton__name} />
                        <div className={styles.product__content__skeleton__category} />
                        <div className={styles.product__content__skeleton__price} />
                        </div>
                    </>
                )}
              
            </div>
        </div>
    )
}