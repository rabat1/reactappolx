// import React from 'react';
// import Main from './main';

// import Card from 'react-bootstrap/Card';
// import { makeStyles } from '@material-ui/core/styles'

// import { Grid} from '@material-ui/core/';
// import carr from './images/car.jpg';
// import house from './images/house.jpg'
// import cupboard from './images/cupboard.jpg'
// import cupboard1 from './images/cupboard1.jpg'
// import sofa from './images/sofa1.jpg';
// import watch from './images/watch.jpeg';
// import watch2 from './images/watch2.jpeg';
// import house2 from './images/house2.jpeg';


// import {Link} from 'react-router-dom';



// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//         padding: theme.spacing(2)
//     }
// }))

// export default function AltCard() {
//     const classes = useStyles()
    
//     var carinfo = [
//         // name : value syntax
//         {'name': 'click', "price":"$3334","src":carr},
//         // values separated by comma
//         {'name': 'click it helll',"price":"$77734","src":house},
//         {'name': 'click it right nowww',"price":"$330","src":cupboard},
//         {'name': 'you know you want to click it',"price":"$200","src":cupboard1},
//         {'name': 'click this button which is very long will help you',"price":"$114","src":sofa},
//         {'name': 'click this button which is very long ',"price":"$98","src":watch},
//         {'name': 'click this button ',"price":"$100","src":watch2},
//         {'name': ' which is very long ',"price":"$77780","src":house2}
     
     
//      ];
//     return (
       
              
//         <div >
//             <Main />
       
//       <div className='container'>
//             <Grid
//                 container
//                 spacing={2}
//                 direction="row"
//                 justify="flex-start"
//                 alignItems="flex-start"
//             >
                    
//                 {carinfo.map(elem => (
//                     <Grid item xs={12} sm={6} md={3} key={carinfo.indexOf(elem)}>
//                        <Link  to={{  pathname:"/Cardselect",  data: elem}}   >
                          
//                       <Card >
//           <Card.Img variant="top" src={elem.src} alt="car" height='140px'/>
//           <Card.Body>
          
//             <Card.Title>Price : {elem.price} </Card.Title>
//             <Card.Text>
//             I am a {elem.name}
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         </Link>
//        </Grid>
//                 ))}
//             </Grid>
//             </div>
          
//         </div>
       
//     )
// }