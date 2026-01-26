import './Projects.css';

const Projects = () => {
  return (
    <div style={{ marginBottom: 'var(--spacing1)', color: 'var(--color-primary)' }}>
        <h1 className='projects-heading'>Projects</h1>
        <div className="projects-container">
            <div className="project">
                1.Project
            </div>
            <div className="project-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis expedita odio dolorum, tempore ab ut doloremque rem. Accusantium, reiciendis officiis?
            </div>
        </div>
    </div>
  )
}

export default Projects