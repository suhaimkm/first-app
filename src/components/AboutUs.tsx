
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="aboutus-container">

            <header className="aboutus-header">
                <h1>About Us</h1>
            </header>
            <p>
                Welcome to over company, where innovation meets creativity. We are
                dedicated to providing exceptional solutions tailored to your needs.
            </p>

            <p>Our team is fueled by passion, guided by innovation, and committed to creating unique experiences for our clients. Whether it’s designing cutting-edge products, crafting tailored solutions, or solving complex challenges, we combine imagination with expertise to bring your vision to life.</p>
            <p>We pride ourselves on being a company that sets the highest standards in quality, reliability, and innovation. Our approach is customer-centric, ensuring that every project we undertake is tailored to meet the specific needs and aspirations of our clients. No challenge is too big, and no detail is too small—we are committed to delivering results that inspire and exceed expectations.</p>
            <div className="aboutus-image-section">
                <img src="https://images.pexels.com/photos/7948060/pexels-photo-7948060.jpeg" alt="About Us" className="aboutus-image" />
            </div>
        </div>
    );
}

export default AboutUs;
