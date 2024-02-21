import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import TodoList from "../Components/TodoList/TodoList";

const Dashboard: React.FC = () => {
    return (
        <div className="dark:bg-black dark:text-white">
            <Header />
            <main className="container mx-auto px-4 pt-10 mb-20">
                <h1 className="text-2xl mb-5">To-do list</h1>
                <TodoList></TodoList>
            </main>     
            <Footer />
        </div>
    )
}

export default Dashboard;