import Header from './components/Header';
import Main from './components/Main';

function App() {
    return (
        <div className="flex flex-col">
            <div className="bg-white sticky top-0 shadow-md z-10">
                <Header />
            </div>
            <Main />
        </div>
    );
}

export default App;
