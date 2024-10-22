// export const About = () => {
//     return <h1>Hello About Page</h1>;
// };


import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user} = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

              <p> Welcome, {
                user ? `${user.username} to UrbanEstate Guide` : 'to UrbanEstate Guide'
                } </p>
              <h1>Why Choose UrbanEstate Guide? </h1>
              <p>
              We offer a diverse selection of commercial properties, each carefully chosen for its unique charm, functionality, and prime location. Whether you're looking for a vibrant retail space, an office that inspires creativity, or an industrial site for your operations, our listings cater to every type of business need. At UrbanEstate Guide, we understand the importance of finding the perfect space to support your vision and growth.
              </p>
              <p>
              At UrbanEstate Guide, we go beyond just facilitating your property search. Our team is dedicated to providing personalized recommendations and exceptional support throughout your real estate journey, ensuring a seamless experience from start to finish. Whether you need guidance on investment options or insights into market trends, we’re here to help you navigate every step with confidence.
              </p>
              
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect With Us</button>
                </NavLink>
                <button className="btn secondary-btn">Learn More</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/Images/about.jpg"
                alt="UrbanEstate Guide"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};