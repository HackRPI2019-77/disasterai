// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Home from '../Home/Home';
// import image from './hat.jpg';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         DisasterAI
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const styles = theme => ({
//   root: {
//     height: '100vh',
//   },
//   image: {
//     backgroundImage: 'url(https://source.unsplash.com/random)',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// });

// export default class Welcome extends React.Component {
//     constructor(props){
//         super()
//         this.state = {
//             loadHome: false
//         };
//     }

//     // handleClick() {
//     //     return(
//     //         <Home/>
//     //     )
//     // }
//     render() {
//        const{classes} = this.props
//        if(this.state.loadHome){
//            return(
//                <Home/>
//            )
//        }
//        return (
        
//         //<Grid container component="main">
//         <div>
//             <img src={image} width="1200" height="1200"/>
//             <Button
//                   type="submit"
//                   //fullWidth
//                   variant="contained"
//                   color="primary"
//                   align= "flex-end"
//                   onClick={this.state.loadHome = true}
//                 >
//                   Get Started
//                 </Button>
//           <CssBaseline />
//           {/* <Grid item xs={false} sm={4} md={7}/> */}
//             <div>
//             <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              
//                 <Box mt={5}>
//                   <Copyright />
//                 </Box>
//             </Grid>
//             </div>
//           {/* 
//         </Grid> */}
//         </div>
//       );
//     }
// }
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import image from './hat.jpg';
import Home from '../Home/Home';
import logo from './Logo_transparent.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <img color="inherit"src ={logo}/>
        DisasterAI {" "}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Welcome extends React.Component{
    constructor(props){
        super()
        this.state = {

        }
    }
    render() {
        const { classes } = this.props
        return (
            <Grid container component="main" className={classes.root}>
              <CssBaseline />
              <Grid item xs={false} sm={4} md={7} className={classes.image} />
              <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                  <form className={classes.form} noValidate>
                    {/* <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Get Started */}
                      <Grid container  justify="center">
                            <Grid item>
                                <Link href="/home" variant="body1">
                                    {"Get Started"}
                                </Link>
                            </Grid>
                      </Grid>
                    {/* </Button> */}
                    <Box mt={5}>
                      <Copyright />
                    </Box>
                  </form>
                </div>
              </Grid>
            </Grid>
          );
    }
}

export default withStyles(styles)(Welcome);