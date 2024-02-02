import { useRouter } from "next/router"

export default function detailProdutcPage() {
    const {query} = useRouter();
    console.log(query)
    return(
        <div>
            <h2>Detail Product Page</h2>
            <p>Product : {query.id}</p>
        </div>
    )
}