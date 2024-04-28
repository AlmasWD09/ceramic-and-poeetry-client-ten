import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../utllity/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const {creatUser,updateUser} = useAuth()
    const navigate = useNavigate();
    const [showPassword,setShowPassword] = useState(false);


    const handleRegister = (e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        // console.log(name,email,photo,password);

         // password validation
        //  const uppercasePassword = /[A-Z]/;
        //  const lowercasePassword = /[a-z]/;
        //  const minLength = 6;
        //  if(!uppercasePassword.test(password)){
        //     return toast.error("'Password must at least one uppercase letter")
        //  }
        //  if(!lowercasePassword.test(password)){
        //      return toast.error("'Password must at least one lowercase letter")
        //  }
        //  if(password.length < minLength){
        //      return toast.error("'Password must at least 6 characters ")
        //  }

        // creatUser
        creatUser(email,password)
        .then(res=>{
            console.log(res.user);
            toast.success('creatUser Successfully');
            form.reset()
            navigate('/')
             // Update profile
             updateUser(name, photo)
             .then(res => {
                 console.log(res.user);
             })
             .catch(error => {
                 console.log(error.message);
             })
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <>
        <Helmet>
            <title>Ceramices and pottery / register</title>
        </Helmet>
        </>
    );
};

export default Register;