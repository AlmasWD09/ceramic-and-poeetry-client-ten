import { useState } from "react";
import toast from "react-hot-toast";


const AddCraft = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleAddCraft = (e) => {
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
        const addCraft = {name,stockStatus,price,rating,customization,time,userName,userEmail,selectedCategory,description,photo}
        // console.log(addCraft
        form.reset()
        fetch('http://localhost:5000/categories',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addCraft)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                toast.success('addCraft to database successfully')
            }
        })
    }
    return (
        <div className=" md:h-screen bg-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-8">
                <form onSubmit={handleAddCraft}>
                    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2">
                        <div className="w-full">
                            <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="name" id="" placeholder="Enter craft name" />
                        </div>
                        <div className="w-full">
                            <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="stockStatus" id="" placeholder="Enter craft stockStatus" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2">
                        <div className="w-full">
                            <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="price" id="" placeholder="Enter craft price" />
                        </div>
                        <div className="w-full">

                            <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="rating" id="" placeholder="Enter craft rating" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2">
                        <div className="w-full">
                            <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="customization" id="" placeholder="Enter craft custimization" />
                        </div>
                        <div className="w-full">

                            <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="time" id="" placeholder="Enter craft processing time" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2">
                        <div className="w-full">
                            <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="userName" id="" placeholder="Enter user name" />
                        </div>

                        <div className="w-full">
                            <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="email" name="userEmail" id="" placeholder="Enter user email" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2">
                        <div className="w-full">
                            <select name="category" value={selectedCategory} onChange={handleCategoryChange}  className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0">
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
                            <textarea name="description" id="description" cols="10" rows="2" placeholder="Enter craft description" className="w-full p-4 border border-gray-300 rounded-lg outline-0">
                            </textarea>
                        </div>
                        <div className="w-full">
                            <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="photo URL" name="photo" id="" placeholder="Enter craft photo" />
                        </div>
                    </div>
                    {/* button add  */}
                    <div>
                        <button className="w-full bg-primary text-white py-3 my-4 rounded-lg hover:bg-secondery" type="submit">Add Craft</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraft;