import React from 'react';
const Navbar = (props) => {

    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src='https://cdn-icons-png.flaticon.com/512/2838/2838895.png' alt='cart-icon'/>
                <span style={styles.cartCount}> {props.count} </span>
            </div>      
        </div>
    );
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20,
   
        
    },
    nav: {
        height: 50,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'white',
        borderRadius: '50%',
        padding: '1px 7px',
        position: 'absolute',
        right: 5,
        top: -5
    }
};

export default Navbar;