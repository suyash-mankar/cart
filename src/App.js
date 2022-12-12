import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     });

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] = doc.id;
    //       return data;
    //     })

    //     // console.log(products);

    //     this.setState({
    //       // products: products
    //       products,
    //       loading: false

    //     })

    //   })

    this.db
      .collection("products")
      // .where('price', '==', 999)
      // .where('title', '==', 'iPhone')
      .orderBy("price", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot);

        // snapshot.docs.map((doc) => {
        //   console.log(doc.data());
        // });

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });

        // console.log(products);

        this.setState({
          // products: products
          products,
          loading: false,
        });
      });
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty +=1;

    // this.setState({
    //     // products: products
    //     products
    // })

    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => {
        console.log("Updated successfully");
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    // products[index].qty -=1;

    // this.setState({
    //     // products: products
    //     products
    // })

    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty - 1,
      })
      .then(() => {
        console.log("Updated successfully");
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  handleDeleteProduct = (id) => {
    // const {products} = this.state;
    // const items = products.filter((item) => item.id !== id);
    // this.setState({
    //     products: items
    // })

    const docRef = this.db.collection("products").doc(id);

    docRef
      .delete()
      .then(() => {
        console.log("Deleted successfully");
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.forEach((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });

    return cartTotal;
  };

  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104_GEO_IN_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617923524000",
        price: 900,
        qty: 3,
        title: "ipad",
      })
      .then((docRef) => {
        console.log("product have been added", docRef);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  render() {
    const { products, loading } = this.state;

    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{padding: 10, fontSize:20}}> Add a product </button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />

        {loading && <h1> Loading Products ...</h1>}

        <div style={{ fontSize: 20, padding: 10 }}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
