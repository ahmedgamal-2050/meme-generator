import logo from './images/troll-face.png';

function App() {
    return (
        <div className="App">
            <header className="row justify-content-between align-items-center px-4">
                <div className="col-auto d-flex align-items-center">
                    <img src={logo} className="app-logo" alt="logo" />
                    <h4 className="ms-2 mb-0">
                        Meme Generator
                    </h4>
                </div>
                <div className="col-auto">
                    <p className="header-project mb-0">
                        React Course - Project 3
                    </p>
                </div>
            </header>
            <main className="mt-4 container">
                <section className="py-4">
                    <div class="row justify-content-center align-items-center">
                        <div className="col-6 mb-3">
                            <input type="text" className="generator-input"/>
                        </div>
                        <div className="col-6 mb-3">
                            <input type="text" className="generator-input"/>
                        </div>
                        <div className="col-12 row">
                            <button className="col-12 generator-btn">
                                Get a new meme image  🖼
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
