import { Link } from "react-router-dom"
import ProductTable from "../../../containers/product/product-table"

const ProductListPage = () => {

    return (
        <>
            <h2>Liste des produits</h2>
            <Link to='/product/create'><button>Ajouter un produit</button></Link>
            <ProductTable />

            <div>
                {/* chemin relatif */}
                <Link to='13'>Produit 13</Link>
            </div>
            <div>
                {/* chemin absolu */}
                <Link to='/product/42'>Produit 42</Link>
            </div>

        </>
    )
}

export default ProductListPage