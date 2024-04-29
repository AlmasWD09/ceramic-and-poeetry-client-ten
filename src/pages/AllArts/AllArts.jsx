import { Helmet } from "react-helmet-async";


const AllArts = () => {
    return (
        <>
            <Helmet>
                <title>Ceramices and poettry / all art</title>
            </Helmet>
            <div className="max-w-7xl mx-auto px-8">
                {/* table add */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn-sm text-xs font-normal  bg-primary text-white rounded-sm">View Details</button>
                                </th>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">Brice Swyre</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Carroll Group
                                </td>
                                <td>Red</td>
                                <th>
                                    <button className="btn-sm text-xs font-normal  bg-primary text-white rounded-sm">View Details</button>
                                </th>
                            </tr>
                           
                        </tbody>
                     

                    </table>
                </div>


                {/* <div className="overflow-x-auto">
                    <table className="table">
                 
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                     
                            <tr className="bg-base-200">
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td><button className="btn-sm bg-primary text-white rounded-sm">View Details</button></td>
                            </tr>
                 
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                                <td><button className="btn-sm bg-primary text-white rounded-sm">View Details</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
            </div>
        </>
    );
};

export default AllArts;