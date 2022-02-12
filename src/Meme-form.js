export default function MemeForm() {
    return (
        <section className="py-4">
            <form class="row justify-content-center align-items-center">
                <div className="col-6 mb-3">
                    <input
                        type="text"
                        className="generator-input"
                        placeholder="top-text"
                    />
                </div>
                <div className="col-6 mb-3">
                    <input
                        type="text"
                        className="generator-input"
                        placeholder="bottom-text"
                    />
                </div>
                <div className="col-12 row">
                    <button className="col-12 generator-btn">
                        Get a new meme image  🖼
                    </button>
                </div>
            </form>
        </section>
    );
}