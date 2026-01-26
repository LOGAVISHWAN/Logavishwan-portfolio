import './header.css';

function Header() {

    return(
     <div style={{ marginBottom: 'var(--spacing1)' }}>
          <div className="header-container">
           <div className='brand'>
                L.V
           </div>
           <div className='nav-links'>
                <p>Home</p>
                <p>Skills</p>
                <p>Projects</p>
                <p>Experience</p>
                <p>Contact</p>
           </div>
           <div className='theme-mode'>
                Light Mode
           </div>
        </div>
     </div>
    )
}  

export default Header