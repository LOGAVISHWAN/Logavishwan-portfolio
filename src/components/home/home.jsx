import './home.css';
import hero from "../../assets/Logavishwan(2021).webp";

function Home() {
    return(
        <div style={{ marginBottom: 'var(--spacing1)' }}>
            <div className="home-container">
                <div className="hero-image">
                    <img src={hero}/>
                </div>
                <div className="home-content">
                    <h1>Hi, I,m Logavishwan S</h1>
                    <h2>Associate Software Engineer</h2>
                </div>
                <div className='about-me'>
                    <h1>About Me</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo dolores eligendi perferendis fugiat consequuntur voluptates temporibus quia, voluptatibus quod pariatur ipsum nulla facere repudiandae suscipit provident similique cumque fuga asperiores aliquid ipsam reprehenderit exercitationem illum! Ad similique, harum, rerum sunt tenetur temporibus, dolor expedita deserunt in odit natus eaque fuga vel dolores et perspiciatis explicabo delectus quo dicta consequatur.</p>
                </div>
            </div>
        </div>
    )
}

export default Home