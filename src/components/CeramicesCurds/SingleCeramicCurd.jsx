

const SingleCeramicCurd = () => {
    return (
 
            <div className="w-[400px] shadow-xl rounded-lg">
            <div className="space-y-3">
            <figure className="w-[400px] h-[240px]rounded-lg">
                    <img className="rounded-tl-lg rounded-tr-lg w-full h-full" src="https://i.ibb.co/DrC8kXN/2150379002.jpg" alt="" />
                    </figure>
                <div className="px-2">
                    <h3 className="font-bold text-xl">image name</h3>
                    <p>image description</p>
                    <div className="w-full">
                        <button className="w-full bg-secondery py-3 rounded-lg text-white hover:bg-primary my-4">View Details</button>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default SingleCeramicCurd;