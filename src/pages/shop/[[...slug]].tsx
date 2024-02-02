import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"

export default function ShopPage() {
  const router = useRouter()
  const { slug }: ParsedUrlQuery = router.query
  return (
    <div>
      <h2>Shop Page</h2>
      <p>Shop : {slug?.[0]} - {slug?.[1]}</p>
      <span> {slug?.[2]}</span>
    </div>
  )
}