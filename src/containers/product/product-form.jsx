import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { productActionCreate } from '../../store/actions/product.action'
import { useId } from 'react'
import style from './product.module.css'



const productSchema = yup.object({
    name: yup.string().trim().required(),
    code: yup.string().matches(/^[a-z]{4}[0-9]{3}$/i).required(),
    description: yup.string(),
    price: yup.number().positive().required(),
    discount: yup.number().transform((value, original) => (original === "" ? null : value)).positive().nullable(),
    inStock: yup.boolean().required()
})



const ProductForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(productSchema),
        defaultValues: {name: '', code: '', description: '', price: '', discount: '', inStock: true}
    })


    const navigate = useNavigate();
    const idForm = useId();
    const dispatch = useDispatch()


    const handleProductSubmit = (product) => {
        // TODO : Use store to add product
        console.log(product);

        dispatch(productActionCreate(product));

        navigate('/product')
    }


    const handleProductReset = (e) => {
        e.preventDefault();
        // TODO
        reset();

    }

    
    return (
        <form onSubmit={handleSubmit(handleProductSubmit)}
                onReset={handleProductReset}
                className={style['product-form']}>
            <div>
                <label htmlFor={idForm + 'name'}>Nom : </label>
                <input id={idForm + 'name'} type="text" {...register('name')} />
                { errors.name && (
                    <span>Le nom est obligatoire !</span>
                )}
            </div>
            <div>
                <label htmlFor={idForm + 'code'}>Code : </label>
                <input id={idForm + 'code'} type="text" {...register('code')} />
                { errors.code && (
                    <span>Le code est obligatoire et doit contenir 4 lettres suivies de  3 chiffres !</span>
                )}
            </div>
            <div>
                <label htmlFor={idForm + 'desc'}>Description : </label>
                <textarea id={idForm + 'desc'} type="text" {...register('description')} />
                { errors.description && (
                    <span>La description est obligatoire !</span>
                )}
            </div>
            <div>
                <label htmlFor={idForm + 'price'}>Prix : </label>
                <input id={idForm + 'price'} type="text" {...register('price')} />
                { errors.price && (
                    <span>Le prix est obligatoire et doit être positif !</span>
                )}
            </div>
            <div>
                <label htmlFor={idForm + 'discount'}>Réduction : </label>
                <input id={idForm + 'discount'} type="text" {...register('discount')} />
                { errors.discount && (
                    <span>{errors.discount.message}</span>
                )}
            </div>
            <div>
                <label htmlFor={idForm + 'stock'}>En stock : </label>
                <input id={idForm + 'stock'} type="checkbox" {...register('inStock')} />
            </div>

            <div>
                <button type="submit">Ajouter</button>
                <button type="reset">Effacer le formulaire</button>
            </div>
        </form>
    )
}


export default ProductForm