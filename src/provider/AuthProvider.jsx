import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
// import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
const [user,setUser] = useState('jamal');
const [loading,setLoading] = useState(true);
    

    // creatUser
    const creatUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // logIn
    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // logOut
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

       // Update userProfile
       const updateUser = (name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
    }

    // observer
    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth,(currentUser)=>{
            setLoading(false)
            setUser(currentUser)
        })
        return () =>{
            unSubscriber()
        }
    },[])


       // GoogleLogin
       const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // Github Login
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }


    const authInfo = {
        user,
        creatUser,
        loading,
        logIn,
        logOut,
        updateUser,
        googleLogin,
        githubLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

// propTypes validation
AuthProvider.propTypes = {
    children: PropTypes.node,
  };
export default AuthProvider;