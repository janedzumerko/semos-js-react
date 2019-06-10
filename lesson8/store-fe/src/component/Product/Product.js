
import React from 'react';
import { Button } from 'reactstrap';
import classes from './Product.module.css';

function Product(props) {
    return (
        <div onClick={props.click} className={classes.wrapper}>
            <h3 className={classes.title}>{props.title}</h3>
            <img className={classes.productStyle} src={props.imgUrl} alt={props.title} />
            <p className={classes.price}>{props.currencyFormat}{props.price} {props.currencyId}</p>
            <Button outline color="primary">ADD TO CART</Button>
        </div>
    )
}

export default Product;