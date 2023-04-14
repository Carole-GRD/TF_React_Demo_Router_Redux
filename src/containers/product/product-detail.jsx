import data from './product.data.json'
import PriceDisplay from '../../components/price-display/price-display'
import { useSelector } from 'react-redux'

const ProductDetail = ({productId}) => {

    // Récupérer le détail du produit
    // const product = data[0];
    // TODO : Récupérer depuis le store le produit le produit via l'id
    const product = useSelector(state => state.prod.products.find(p => p.id === productId))
     // ↑ prod -> alias reducer
    // ↑ products viens de l'initialState du Reducer

    if (!product) {
        return (
            <p>Produit inconnu 🤔</p>
        )
    }

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