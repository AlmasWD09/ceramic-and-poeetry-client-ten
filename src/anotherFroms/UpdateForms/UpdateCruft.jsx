import { data } from "autoprefixer";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";




const UpdateCruft = () => {
const category = useLoaderData()
const { _id, photo, name, price, rating, customization,time, stockStatus,userName,description } = category || {};





    const [selectedCategory, setSelectedCategory] = useState('');
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    const handleUpdateCraft = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const stockStatus = form.stockStatus.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const selectedCategory = form.category.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const updateCraft = {name,stockStatus,price,rating,customization,time,userName,userEmail,selectedCategory,description,photo}
        
            fetch(`https://ceramices-and-pottery.vercel.app/categories/${_id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updateCraft)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: "update successfull",
                        text: "You clicked the button!",
                        icon: "success"
                      });
                }
            })
    }
    return (
        <>
        <Helmet>
            <title>Ceramices and poettry / update craft</title>
        </Helmet>
    <div className=" md:h-screen bg-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-8">
            <form onSubmit={handleUpdateCraft}>
                <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2">
                    <div className="w-full">
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="name" defaultValue={name} id="" placeholder="Enter craft name" />
                    </div>
                    <div className="w-full">
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="stockStatus" defaultValue={stockStatus} id="" placeholder="Enter craft stockStatus" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2">
                    <div className="w-full">
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="price" defaultValue={price} id="" placeholder="Enter craft price" />
                    </div>
                    <div className="w-full">

                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="rating" defaultValue={rating} id="" placeholder="Enter craft rating" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2">
                    <div className="w-full">
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="customization" defaultValue={customization} id="" placeholder="Enter craft custimization" />
                    </div>
                    <div className="w-full">

                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="time" defaultValue={time} id="" placeholder="Enter craft processing time" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2">
                    <div className="w-full">
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="userName" defaultValue={userName} id="" placeholder="Enter user name" />
                    </div>

                    <div className="w-full">
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="email" name="userEmail" id="" placeholder="Enter user email" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2">
                    <div className="w-full">
                        <select name="category"  value={selectedCategory} onChange={handleCategoryChange}  className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0">
                        <option value="">Choose craft</option>
                            <option value="Clay-made pottery">Clay-made pottery</option>
                            <option value="Stoneware">Stoneware</option>
                            <option value="Porcelain">Porcelain</option>
                            <option value="Terra Coa">Terra Coa</option>
                            <option value="Ceramics & Architectural">Ceramics & Architectural</option>
                            <option value="Home decor pottery">Home decor pottery</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col justify-center md:justify-between gap-2">
                    <div className="w-full">
                        <textarea name="description" id="description" cols="10" rows="2" placeholder="Enter craft description" defaultValue={description} className="w-full p-4 border border-gray-300 rounded-lg outline-0">
                        </textarea>
                    </div>
                    <div className="w-full">
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="photo URL" name="photo" defaultValue={photo} id="" placeholder="Enter craft photo" />
                    </div>
                </div>
                {/* button add  */}
                <div>
                    <button className="w-full bg-primary text-white py-3 my-4 rounded-lg hover:bg-secondery" type="submit">Update Craft</button>
                </div>
            </form>
        </div>
    </div>
    </>
    );
};

export default UpdateCruft;