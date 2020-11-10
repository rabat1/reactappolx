import React, { Component, Fragment } from "react";
import fire from './firebase.js';
import Header from './Header'
import Footer from './footer.js';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
          cart: [],
        }
      }

      componentDidMount() {
        const userRef = fire.database().ref('cart');
        userRef.on('value', (snapshot) => {
          let cart =  snapshot.val();
          let userCart = [];
          for (let data in cart) {
            userCart.push({
              src:cart[data].src,
              price:cart[data].price,
              name: cart[data].name,
              
            })
            
           
          }
          this.setState({
            cart:userCart,
          })
        })
     }
      
     render() {
      
        return (
    
         <div>
           <Header />
             <div className='container' >
                <h1>Your favourite products</h1>
             {this.state.cart.map(elem => (
              <div className='row'>   
              <div className='col-lg-6'>     
             <h4>{elem.name}</h4></div>
             <div className='col-lg-6'>
             <h4>{elem.price}</h4>
             </div>
             </div>
        
                ))}
                </div>
                <Footer />
                
        
    
              
            </div>   
        );
      }



    }
    export default Cart;