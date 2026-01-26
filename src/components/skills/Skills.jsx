import './Skills.css'

function Skills() {
    const skills = {frontend:[{name: 'html'}], backend:[{name: 'java'}], devops:[{name: 'docker'}], other:[{name:'git'}]};
    return(
        <div style={{ marginBottom: 'var(--spacing1)', color: 'var(--color-primary)' }}>
            <h1 className="skills-heading">
                Skills
            </h1>
            <div className="skills-container">
                {Object.entries(skills).map(([category,items])=>(            
                    <div className="skills-sub-container1" key={category}>
                        <h2 className='skills-heading'>{category.charAt(0).toUpperCase()+category.slice(1)}</h2>
                        {items.map(skill=>(
                            <div className="skills-sub-container2" key={skill.name}>
                            <span><svg></svg></span>
                            <span>skill.name</span>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, assumenda.</p>
                        </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills