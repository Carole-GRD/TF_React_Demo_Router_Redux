import { Link } from "react-router-dom"
import ProductForm from "../../../containers/product/product-form"
import style from './../style/product-page.module.css'



const ProductCreatePage = () => {

    

    return (
        <>
            <div className={style['title-with-link']}>
                <h2>Ajouter un nouveau produit</h2>
                <Link to={'/product'}><button>Retour à la liste</button></Link>
            </div>
            <ProductForm />
        </>
    )
}



export default ProductCreatePage