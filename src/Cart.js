import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    render() {
        return(
            <div className='cart'>
                <div> <CartItem /> </div>
                <div> <CartItem /> </div>
                <div> <CartItem /> </div>
                <div> <CartItem /> </div>
            </div>
            
        )
    }

}


export default Cart;