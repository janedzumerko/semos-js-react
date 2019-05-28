import React from 'react';
import SizeFilter from '../../component/SizeFilter/SizeFilter';
import Products from '../../component/Products/Products';

class Store extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            currentSelected: new Set(),
            filtered: []
        }
    }

    updateFiltered = () => {
        if (this.state.currentSelected.size === 0) {
            this.setState((prevState, props) => ({ filtered: prevState.products }));
            console.log("Prikazi site")
        } else {
            const filtered = [];
            for (let i = 0; i < this.state.products.length; i++) {
                for (let j = 0; j < this.state.products[i].availableSizes.length; j++) {
                    if (this.state.currentSelected.has(this.state.products[i].availableSizes[j])) {
                        filtered.push(this.state.products[i]);
                        break;
                    }
                }
            }
            this.setState({ filtered })
        }
    }

    handleProductClick = (id) => {
        console.log('Clicked product with id : ', id);
        this.props.history.push(`/store/${id}`);
    }



    handleSelectedFilter = (size) => {

        const tmpSet = this.state.currentSelected;
        if (tmpSet.has(size)) {
            tmpSet.delete(size);
        } else {
            tmpSet.add(size);
        }
        console.log(tmpSet)

        this.setState({ currentSelected: tmpSet });
        this.updateFiltered()
    }




    componentDidMount() {
        fetch('http://localhost:8080/products')
            .then(response => response.json())
            .then(data => this.setState({ products: data.products, filtered: data.products }));
    }



    render() {
        return (
            <>
                <SizeFilter
                    click={this.handleSelectedFilter}
                    selected={this.state.currentSelected} />

                <p>{this.state.filtered.length} item{this.state.filtered.length !== 1 ? 's' : ''}</p>

                <Products
                    click={this.handleProductClick}
                    filtered={this.state.filtered} />
            </>
        )
    }

}

export default Store;