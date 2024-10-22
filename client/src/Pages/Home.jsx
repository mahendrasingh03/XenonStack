export const Home = () => {
    return <>
    <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    
                    <h1>Welcome to UrbanEstate Guide</h1>
                    <p>
                    Welcome to UrbanEstate Guide, your premier destination for navigating the dynamic world of commercial real estate. Whether you’re a seasoned investor, a business owner seeking the perfect location, or a first-time buyer, we provide a comprehensive platform tailored to your needs. Our user-friendly interface allows you to explore a diverse range of properties in prime urban locations, ensuring you find the ideal space to elevate your business.
                    </p>

                    <div className="btn btn-group">
                        <a href="/contact"><button className="btn">Connect Us</button></a>
                        <a href="/service"><button className="btn secondary-btn">learn More</button></a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/Images/V2.jpg" class="home_img" alt="Home image" width="400" height="500"/>
                </div>
            </div>
        </section>
    </main>
    </>;
};