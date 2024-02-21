
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Button from '../Components/Button/Button';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="dark:bg-black dark:text-white">
            <Header />
            <main className="container mx-auto pt-10 pb-10 px-4 mb-40">
                <div className="flex flex-row items-center">
                    <div className='basis-6/12'>
                        <h1 className='text-4xl font-bold mb-4'>React Pro the best React theme</h1>
                        <span className='text-2xl font-bold block mb-4'>Buy now just for $99,99</span>
                        <Link to="/dashboard"><Button text="Take it" className="bg-primary text-white pl-8 pr-8 pt-3 pb-3" /></Link>

                    </div>
                    <div className='basis-4/12'>
                        <img src="/home-banner-1.png" className='object-contain w-full h-full' alt="Banner" />
                     </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;