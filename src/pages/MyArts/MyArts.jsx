import { Helmet } from "react-helmet-async";
import MyArtCruft from "./MyArtCruft";
import useAuth from "../../utllity/useAuth";
import { useEffect, useState } from "react";


const MyArts = () => {
const {user} = useAuth()
// console.log(user);
const[categories,setCategories] = useState([]);
const [control,setControl] = useState(false)

useEffect(()=>{
    fetch(`http://localhost:5000/categories/email/${user.email}`)
    // fetch(`http://localhost:5000/categories/${user.email}`)
    .then(res=>res.json())
    .then(data=>setCategories(data))
},[user,control])

    return (
        <>
        <Helmet>
            <title>Ceramices and poettry / my artCruft</title>
        </Helmet>
        <div>
        <h1 className="text-center mt-10">total:{categories.length}</h1>
           {
            categories.map((category,idx)=>{
                return (
                    <MyArtCruft
                    key={idx}
                    category={category}
                    control={control}
                    setControl={setControl}
                    ></MyArtCruft>
                )
            })
           }
        </div>
        </>
    );
};

export default MyArts;