import React, { useContext, useState } from 'react';
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

    const[newUser, setNewUser] = useState(false);

    const[loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [user,setUser] = useState({
        isSignIn: false,
        newUser: false,
        name: "",
        email: "",
        password: ""
      })


    const GoogleSignInHandler = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
            // debugger
            firebase.auth().signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                // ...
                const signInUser = {
                    isSignIn: true,
                    name: user.displayName,
                    email: user.email
                }
                console.log(user);
                setLoggedInUser(user);
                setUser(signInUser);
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


    


  const CheckInputValue =(event)=> {
    let isInputHandel = true;
    if (event.target.name === 'email') {
        isInputHandel = /\S+@\S+\.\S+/.test(event.target.value);
    };
    if (event.target.name === 'password') {
        isInputHandel = event.target.value.length >= 6 ;
    }
    if (isInputHandel) {
        const newUserSet = {...user};
        newUserSet[event.target.name] = event.target.value;
        setUser(newUserSet);
        // setLoggedInUser(newUserSet.name)
    }
  }
  const handleSubmit =(event)=> {
    if (newUser && user.email && user.password) {
        console.log(user.email, user.password, user.name)
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            updateUserName(user.name)
            setLoggedInUser(user)
            console.log(user.name)
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(error.code, error.message)
          });
      }
      if (!newUser && user.email && user.password) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            console.log(res.user)
            // setLoggedInUser(res.user.displayName)
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage)
        });
      }
      event.preventDefault();
    }


    const updateUserName = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name
        }).then(function() {
        // Update successful.
        }).catch(function(error) {
        // An error happened.
        });
    }

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <div class='login-form'>
                    <form >
                        {
                            newUser ? <h2 class='text-center'>Sign Up</h2>
                            : <h2 class='text-center'>Sign In</h2>
                        }
                        <div class='form-group'>
                            <input type="checkbox" onClick={()=>setNewUser(!newUser)} name="" id="newUser"/>
                            <br/>
                            <label htmlFor="newUser">Create New Account</label>
                        </div>
                        {
                            newUser ? 
                            <div class='form-group'>
                                <div class='input-group'>
                                    <input onBlur={CheckInputValue} type='text' class='form-control' name='name' placeholder='Name' required />
                                </div>
                            </div>
                            : ""
                            
                        }
                        <div class='form-group'>
                            <div class='input-group'>
                                <input onBlur={CheckInputValue} type='text' class='form-control' name='email' placeholder='email' required />
                            </div>
                        </div>
                        <div class='form-group'>
                            <div class='input-group'>
                                <input onBlur={CheckInputValue} type='password' class='form-control' name='password' placeholder='Password' required/>
                            </div>
                        </div>
                        <div class='form-group'>
                            {
                                newUser ? <button onClick={handleSubmit} type='submit' class='btn btn-primary login-btn btn-block'> Sign Up </button>
                                : <button onClick={handleSubmit} type='submit' class='btn btn-primary login-btn btn-block'> Sign In </button>
                            }
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





