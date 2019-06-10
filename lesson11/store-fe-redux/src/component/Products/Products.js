import React from 'react';
import classes from './Products.module.css';
import Product from '../Product/Product';

function Products(props) {
    return (
        < div className={classes.wrapper} >
            {
                props.filtered.map(product => <Product
                    addToCart={(e) => props.addToCart(e, product.id)}
                    click={() => props.click(product.id)}
                    currencyFormat={product.currencyFormat}
                    currencyId={product.currencyId}
                    key={product.id}
                    imgUrl={product.imgUrl}
                    title={product.title}
                    price={product.price} />)
            }
        </div >
    )
}

export default Products;