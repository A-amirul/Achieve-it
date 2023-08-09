import logo from "../../assets/logo/logo.png"
const Header = () => {

    const navOptions = <>
        <li><a>Home1</a></li>
        <li><a>About Us</a></li>
        <li><a>Services</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Team Members</a></li>
        <li><a>Client Testimonials</a></li>
        <li><a>Blog Section</a></li>
        <li><a>Contact US</a></li>
        
    </>

    return (
        <div className="bg-slate-900 navbar fixed z-10 mx-auto text-white">
            <div className=" mx-auto max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                   <div>
                   <span className="w-10 h-10 md:w-25 md:h-25"> <img src={logo} alt="" /></span>
                   </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Make Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Header;