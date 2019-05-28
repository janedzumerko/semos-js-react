import React from 'react';
import classes from './FullProduct.module.css';

class FullProduct extends React.Component {

    state = {
        currentProduct: {
            availableSizes: []
        }
    }

    componentDidMount() {
        console.log(this.props)
        fetch(`http://localhost:8080/products/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => this.setState({ currentProduct: data }));
    }


    //   "availableSizes": [
    //     "S",
    //     "XS"
    //   ],
    //   "currencyFormat": "$",
    //   "currencyId": "USD",
    //   "description": "4 MSL",
    //   "id": 12,
    //   "pieces": 9,
    //   "isFreeShipping": true,
    //   "price": 10.9,
    //   "style": "Black with custom print",
    //   "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg",
    //   "title": "Cat Tee Black T-Shirt"
    // }

    render() {
        const {
            title, imgUrl, style, price,
            isFreeShipping, pieces, description,
            currencyId, currencyFormat, availableSizes
        } = this.state.currentProduct;
        return (
            <div className={classes.wrapper}>
                <h1>
                    {title}
                </h1>
                <img src={imgUrl} alt={description} />
                <h4>
                    {isFreeShipping ? 'free shipping' : null}
                </h4>
                <p>{style}</p>
                <p>{currencyFormat}{price} {currencyId}</p>
                <p>Available pieces :  {pieces}</p>
                <p>
                    Available sizes:
                    {
                        availableSizes.map(size => <span key={size} style={{ margin: '5px' }}>{size}</span>)
                    }
                </p>
            </div>

        )
    }

}

export default FullProduct;