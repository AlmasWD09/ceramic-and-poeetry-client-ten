import { Helmet } from "react-helmet-async";
import MyArtCruft from "./MyArtCruft";
import useAuth from "../../utllity/useAuth";
import { useEffect, useState } from "react";


const MyArts = () => {
const {user} = useAuth()
// console.log(user);
const[categories,setCategories] = useState([])

useEffect(()=>{
    fetch(`http://localhost:5000/categories/${user.email}`)
    .then(res=>res.json())
    .then(data=>setCategories(data))
},[user])


    return (
        <>
        <Helmet>
            <title>Ceramices and poettry / my artCruft</title>
        </Helmet>
        <div>
           {
            categories.map((category,idx)=>{
                return (
                    <MyArtCruft
                    key={idx}
                    category={category}
                    ></MyArtCruft>
                )
            })
           }
        </div>
        </>
    );
};

export default MyArts;