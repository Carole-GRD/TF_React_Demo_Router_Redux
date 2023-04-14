import PropTypes from 'prop-types'
import style from './price-display.module.css'


const PriceDisplay = ({price, discount, currency}) => {

    const PriceFormatted = ({price, currency, className}) => (
        <span className={className}>{price.toLocaleString(undefined, {style: 'currency', currency})}</span>
    )

    const inDiscount = discount && discount > 0

    let priceDiscount;
    if (inDiscount) {
        priceDiscount = price - ((price * discount) / 100)
    }

    return (
        <>
            <PriceFormatted className={inDiscount ? style['price-discount'] : ''} price={price} currency={currency} />
            {inDiscount && (
               <PriceFormatted price={priceDiscount} currency={currency} />
            )}
        </>
    )
}


PriceDisplay.propTypes = {
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
    currency: PropTypes.oneOf(['EUR', 'USD'])
}

PriceDisplay.defaultProps = {
    currency: 'EUR'
}
    

export default PriceDisplay