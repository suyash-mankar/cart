import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {

  constructor(){

    super();
    this.state = {
        products: [
            {
                price: 99,
                title: 'Apple Watch',
                qty: 1,
                img: 'https://www.applestore.pk/wp-content/uploads/2021/04/MTPL2ref_VW_34FRwatch-44-stainless-graphite-cell-6s_VW_34FR_WF_CO.jpg',
                id: 1
            },
            {
                price: 999,
                title: 'iPhone',
                qty: 10,
                img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204',
                id: 2
            },
            {
                price: 999,
                title: 'Macbook',
                qty: 4,
                img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653493200207',
                id: 3
            },
        ]
    }

}

  handleIncreaseQuantity = (product) => {

    const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty +=1;

      this.setState({
          // products: products
          products
      })
  }

  handleDecreaseQuantity = (product) => {
            
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0){
          return;
      }

      products[index].qty -=1;

      this.setState({
          // products: products
          products
      })
  }


  handleDeleteProduct = (id) => {
      const {products} = this.state;
      const items = products.filter((item) => item.id !== id);
      this.setState({
          products: items
      })
  }


  getCartCount = () => {
    const {products} = this.state;
    
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;

  }

  getCartTotal = () => {
    const {products} = this.state;
    
    let cartTotal = 0;

    products.forEach((product) => {
      cartTotal = cartTotal + (product.qty * product.price)
    })

    return cartTotal;

  }

  render(){

    const {products} = this.state;


    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />

        <div style={ {fontSize: 20, padding: 10} }> TOTAL: {this.getCartTotal()} </div>
      
      </div>
    );  
  }
  
}

export default App;
