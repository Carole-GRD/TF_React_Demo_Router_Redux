import { Link } from "react-router-dom"

const ProductListPage = () => {

    return (
        <>
            <h1>Liste des produits</h1>

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