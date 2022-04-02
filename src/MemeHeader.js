import logo from './images/troll-face.png';

export default function MemeHeader() {
    return (
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
    );
}
