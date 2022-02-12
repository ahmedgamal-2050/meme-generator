import MemeHeader from './Meme-header';
import MemeForm from './Meme-form';

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
