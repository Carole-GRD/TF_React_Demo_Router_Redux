import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PriceDisplay from '../../components/price-display/price-display';
import style from './product.module.css';

import data from './product.data.json';

const ProductTableHead = () => (
    <thead>
        <tr>
            <th>Nom</th>
            <th>Code</th>
            <th>Prix</th>
            <th>En stock</th>
            <th></th>
        </tr>
    </thead>
)

const ProductTableRow = ({id, name, code, price, discount, inStock, onDetail, onRemove}) => (
   <tr>
        <td onClick={() => onDetail(id)}>{name}</td>
        <td onClick={() => onDetail(id)}>{code}</td>
        <td onClick={() => onDetail(id)}>
            <PriceDisplay price={price} discount={discount} />
        </td>
        <td>{inStock ? 'V' : 'X'}</td>
        <td>
            <button onClick={() => onRemove(id)}>Supprimer</button>
        </td>
   </tr>
)


const ProductTable= () => {

    const navigate = useNavigate();

    // Récupération des données (mockup)
    // TODO : à remplacer par celles du store Redux
    const products = data;

    const handleDetail = useCallback((id) => {
        navigate('/product/'+ id);
    })

    const handleRemove = useCallback((id) => {
        // TODO Remove product (=> Redux)
        console.log('Remove product', id);
    })

    return (
        <table className={style['product-table']}>
            <ProductTableHead />
            <tbody>
                {products.map(product =>(
                    <ProductTableRow {...product} key={product.id}
                        onDetail={handleDetail}
                        onRemove={handleRemove} />
                ))}
            </tbody>
        </table>
    )

}

export default ProductTable