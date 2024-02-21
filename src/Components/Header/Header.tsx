import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";


const Header: React.FC = () => {
    return (
        <header className="bg-white dark:bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-row items-center">
                    <div className="basis-2/12">
                        <div className="text-primary text-2xl">React Pro</div> 
                    </div>
                    <div className="basis-9/12">
                        <nav className="nav">
                            <NavLink to="/" className="font-bold p-5 inline-block" > 
                                {({ isActive, isPending, isTransitioning }) => (
                                    <span className={isActive ? "text-primary" : ""}>Home</span>
                                )}
                            </NavLink>
                            <NavLink to="/dashboard" className="font-bold p-5 inline-block" > 
                                {({ isActive, isPending, isTransitioning }) => (
                                    <span className={isActive ? "text-primary" : ""}>Dashboard</span>
                                )}
                            </NavLink>
                            <NavLink to="/about"className="font-bold p-5 inline-block" > 
                                {({ isActive, isPending, isTransitioning }) => (
                                    <span className={isActive ? "text-primary" : ""}>About</span>
                                )}
                            </NavLink>
                        </nav> 
                    </div>
                    <div className="basis-1/12">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;