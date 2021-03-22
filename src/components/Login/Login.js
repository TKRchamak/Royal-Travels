import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import './Login.css'


const Login = () => {

    // Initialize Firebase
    if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
    }   

    const[loggedInUser, setLoggedInUser] = useContext(UserContext)


    const GoogleSignInHandler = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
            // debugger
            firebase.auth().signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
                console.log(user);
                setLoggedInUser(user.displayName);
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }


    // const inputSubmit = (event) => {
    //     if (newUser && user.email && user.password) {
    //       firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    //       .then((res) => {
    //         const newUserInfo = {...user};
    //         newUserInfo.error = '';
    //         newUserInfo.creatUser = true;
    //         setUser(newUserInfo);
    //         setLoggedInUser(newUserInfo)
    //       })
    //       .catch((error) => {
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         const newUserInfo = {...user};
    //         newUserInfo.error = errorMessage;
    //         newUserInfo.creatUser = false;
    //         setUser(newUserInfo)
    //         console.log(error.code, error.message)
    //         });
    //     }
    //     if (!newUser && user.email && user.password) {
    //       firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    //       .then((res) => {
    //           const newUserInfo = {...user};
    //           newUserInfo.error = '';
    //           newUserInfo.creatUser = true;
    //           setUser(newUserInfo);
    //           setLoggedInUser(newUserInfo);
    //           history.replace(from);
    //       })
    //       .catch((error) => {
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //       });
    //     }
    //     event.preventDefault();
    //   }
  


    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <div class='login-form'>
                    <form  action='submit' method='submit'>
                        <h2 class='text-center'>Sign in</h2>
                        <div class='form-group'>
                            <div class='input-group'>
                                <input type='text' class='form-control' name='email' placeholder='email' required='required' />
                            </div>
                            </div>
                        <div class='form-group'>
                        <div class='input-group'>
                            <input type='password' class='form-control' name='password' placeholder='Password' required='required'/>
                        </div>
                        </div>
                        <div class='form-group'>
                            <button type='submit' class='btn btn-primary login-btn btn-block'> Sign in </button>
                        </div>
                        <div class='clearfix'>
                            <label class='float-left form-check-label'>
                                <input type='checkbox' /> Remember me
                            </label>
                            <a href='#' class='float-right'> Forgot Password? </a>
                        </div>
                        <div class='or-seperator'>
                            <i>or</i>
                        </div>
                        <p class='text-center'>Login with your social media account</p>
                        
                    </form>
                    
                </div>
                <div class='text-center social-btn'>
                        <button className='btn btn-danger' onClick={GoogleSignInHandler}>Google Login</button>
                </div>
                <div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Login;





