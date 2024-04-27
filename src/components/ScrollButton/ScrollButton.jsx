import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollButton = () => {
    const [backTopBtn,setBackTopBtn] = useState(false);

    useEffect(()=>{
       const btnControl = ()=>{
        if(window.scrollY> 200){
            setBackTopBtn(true)
        }else{
            setBackTopBtn(false)

        }
        
       }
       window.addEventListener('scroll', btnControl)

       return ()=>{
        window.removeEventListener('scroll', btnControl)
       }

    },[])

    const top = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    return (
        <>
        {
            backTopBtn && <div onClick={top} className="w-[70px] h-[70px]  bg-emerald-900 flex justify-center items-center text-center text-white fixed right-[40px] bottom-[40px]">
            <IoIosArrowUp className="text-3xl flex justify-center items-center text-center"/></div>
   
        }
        </>
    );
};

export default ScrollButton;


