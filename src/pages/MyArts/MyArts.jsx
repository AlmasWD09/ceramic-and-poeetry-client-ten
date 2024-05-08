import { Helmet } from "react-helmet-async";
import MyArtCruft from "./MyArtCruft";
import useAuth from "../../utllity/useAuth";
import { useEffect, useState } from "react";


const MyArts = () => {
const {user} = useAuth()

const[categories,setCategories] = useState([]);
const [control,setControl] = useState(false)

useEffect(()=>{
    fetch(`https://ceramices-and-pottery.vercel.app/categories/email/${user.email}`)
    .then(res=>res.json())
    .then(data=>setCategories(data))
},[user,control])

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