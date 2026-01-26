import './Experience.css';

const Experience = () => {
  return (
    <div style={{ marginBottom: 'var(--spacing1)', color: 'var(--color-primary)' }}>
        <h1 className='projects-heading'>Experience</h1>
        <div className='experience-container'>
            <div className='year'>
                2023-2026
            </div>
            <div className='experience'>
                <h1>Company</h1>
                <p className='experience-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit eaque quos deserunt. Sit error libero aspernatur praesentium ratione excepturi!</p>
            </div>
        </div>
    </div>
  )
}

export default Experience