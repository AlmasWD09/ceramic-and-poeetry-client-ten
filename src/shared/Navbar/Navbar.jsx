import { Link, NavLink, useNavigate } from "react-router-dom";
import Toggle from "../../components/Toggle/Toggle";
import useAuth from "../../utllity/useAuth";
import { Tooltip } from "react-tooltip";


const Navbar = () => {
    const { user,logOut } = useAuth()
    const navigate = useNavigate()



    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/allArt'>All artCruft</NavLink>
       { 
        user? <div className="flex gap-10">
            <NavLink to='/addCraft'>Add craft</NavLink>
            <NavLink to='/myArt'>My artCruft</NavLink>
        </div>
        :
        ''
        }
    </>
const handleLogOut = () =>{
    logOut()
    navigate('/')
}

    const handleClick = () => {
        navigate('/')
    }
    return (
        <nav className="bg-base-300">
            <div className="navbar max-w-7xl mx-auto px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52">
                            {/* links */}
                            {links}
                        </ul>
                    </div>
                    <a onClick={handleClick} className="md:text-2xl font-semibold font-poppins cursor-pointer">Ember & <span className="text-primary">Clay</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        {/* links */}
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Toggle />

                    {
                        user ? <div className="flex gap-3 ">
                            <div className="w-10 h-10 rounded-full hidden md:block" data-tooltip-id="my-tooltip" data-tooltip-place="top" data-tooltip-content={user.displayName}>
                            <img className="rounded-full" src={user.photoURL} alt={user.photoURL} />
                            <Tooltip id="my-tooltip" />
                        </div>
                            <button onClick={handleLogOut} className="bg-primary text-white px-4 py-2 rounded-sm">LogOut</button>
                            </div>
                            :
                            <div className="flex gap-4">
                                <Link to='/login'><button className="bg-primary text-white px-4 py-2 rounded-sm">Login</button></Link>
                                <Link to='/register'><button className="bg-primary text-white px-4 py-2 rounded-sm">Register</button></Link>
                            </div>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;