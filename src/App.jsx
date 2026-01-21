import Header from "./Header"
import Footer from "./Footer";
import List from "./List"

function App() {

    const students = [1,2,3,4,5,6];
    return (
        <>
            <Header/>
            <List items={students}/>
            <Footer/>
        </>
);
}

export default App
