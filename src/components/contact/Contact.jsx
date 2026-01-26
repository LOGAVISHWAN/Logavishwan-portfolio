import './Contact.css'

const Contact = () => {
  return (
    <div style={{ marginBottom: 'var(--spacing1)', color: 'var(--color-primary)' }}>
        <h1 className='projects-heading'>Contact</h1>
        <div className='contact-container'>
            <div className='encourage'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, similique? Quaerat amet ullam fugit asperiores hic facilis consectetur pariatur eveniet.
            </div>
            <div className='contact-form-container'>
                <h1 className='projects-heading'>Get in Touch</h1>
                <form className='contact-form'>
                    <label>Name</label>
                    <input/>
                    <label>Email</label>
                    <input/>
                    <label>Message</label>
                    <textarea></textarea>
                    <div className='contact-action-buttons'>
                        <button className='theme-mode send-button'>send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact