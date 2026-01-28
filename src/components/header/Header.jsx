import './header.css';

function Header() {

    function mobileNav(){
          const nav = document.querySelector('.nav-links, .nav-links-mobile');

          if (nav.classList.contains('nav-links')) {
               nav.classList.remove('nav-links');
               nav.classList.add('nav-links-mobile');
          } else {
               // start fade-out
               nav.style.opacity = '0';
               nav.style.display = 'none';

               setTimeout(() => {
                    nav.classList.remove('nav-links-mobile');
                    nav.style.opacity = '';
                    nav.style.display = '';
                    nav.classList.add('nav-links');  
               }, 300); // match your CSS transition duration
          }
     }

     function changeTheme(){
          let themeText = document.querySelector('.theme-mode-text');
          document.body.classList.toggle('light');
          if(document.body.classList.contains('light')){
               themeText.textContent = 'Dark Mode';
          }else{
               themeText.textContent = 'Light Mode';
          }
     }

    return(
     <div style={{ marginBottom: 'var(--spacing1)' }}>
          <div className="header-container">
           <div className='brand'>
               <p className='spin-counter'>L.V</p>    
           </div>
           <div style={{display: 'flex'}}>
               <div className='nav-links'>
                <p>Home</p>
                <p>Skills</p>
                <p>Projects</p>
                <p>Experience</p>
                <p>Contact</p>
               </div>
               <div className='mobile-nav' onClick={()=>mobileNav()}>
                    <p className='drawer'></p>
                    <p className='drawer-arrow'>&darr;</p>
               </div>
           </div>
           <div className='theme-mode' onClick={()=>changeTheme()}>
               <span className='theme-mode-icon'>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--color-primary)" viewBox="0 0 24 24">
                         <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd"/>
                    </svg>
               </span>
                <span className='theme-mode-text'>Light Mode</span>
           </div>
        </div>
     </div>
    )
}  

export default Header