import { useParams } from "react-router-dom"

const ProductDetailPage = () => {

    const { productId } = useParams()

    return (
        <>
            <h1>Détail du produit : {productId}</h1>

        </>
    )
}

export default ProductDetailPage