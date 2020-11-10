import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fire from './firebase.js';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Main from './main';
import { Grid} from '@material-ui/core/';
import Header from './Header'
import Footer from './footer.js';

class Data extends React.Component {
    constructor(handleLogout) {
        super(handleLogout);
        this.state = {
          accounts: [],
          sss:this.props.handleLogout,
          users: [],
        }
      }
      


      

      
  componentDidMount() {
    const userRef = fire.database().ref('adddata');
    userRef.on('value', (snapshot) => {
      let users =  snapshot.val();
      let newUserState = [];
      for (let data in users) {
        newUserState.push({
          src:users[data].src,
          price:users[data].price,
          name: users[data].name,
          details: users[data].details,
          one: users[data].one,
          two: users[data].two,
          three: users[data].three,
          four: users[data].four,
        })
        
        console.log(data)
      }
      this.setState({
        users:newUserState,
      })
    })
 }
  

  render() {
      
    return (

     <Fragment >
     <div>
       <Header handleLogout={this.state.sss} />
     <Main />
         <div className='container'>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                    
                {this.state.users.map(elem => (
                    <Grid item xs={12} sm={6} md={3} key={this.state.users.indexOf(elem)}>
                        <Link  to={{  pathname:"/Cardselect",  data: elem  } }  >
                         
                      <Card style={{'marginTop':'30px'}} >
          <Card.Img variant="top" src={elem.src} alt="car" height='140px'/>
          <Card.Body>
          
            <Card.Title>Price : {elem.price} </Card.Title>
            <Card.Text>
            I am a {elem.name}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </Link>
      
        
       </Grid>
                ))}
            </Grid>
            </div>
    

          
        </div> 
        <Footer />  
     </Fragment>
    );
  }
}
export default Data;