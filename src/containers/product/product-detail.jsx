import data from './product.data.json'
import PriceDisplay from '../../components/price-display/price-display'

const ProductDetail = ({productId}) => {

    // Récupérer le détail du produit
    // TODO : Récupérer depuis le store le produit le produit via l'id
    const product = data[0];

    return (
        <> 
            <p>{product.name} [{product.code}]</p>
            {!product.inStock && (
                <p>Le produit est actuellement indisponible 😭</p>
            )}
            <p>Prix : <PriceDisplay price={product.price} discount={product.discount} /></p>
            <p>{product.description}</p>
        </>
    )
}

export default ProductDetail