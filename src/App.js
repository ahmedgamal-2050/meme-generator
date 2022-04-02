import MemeHeader from './MemeHeader';
import MemeForm from './MemeForm';

function App() {
    return (
        <div className="App">
            <MemeHeader />
            <main className="mt-4 container">
                <MemeForm />
            </main>
        </div>
    );
}

export default App;
