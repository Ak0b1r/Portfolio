import React, { useState } from 'react'
import styles from './contact.module.scss'

const tg_token = '6111261404:AAHEYZHA9Oe36UoNDJTeCimc7cQi1qQJv4Y'
const tg_id = '1827868793'

function Contact() {
  const [messages, setMessages] = useState({ name: "", email: "", content: ""})

  const handleChange = (e) => {
    setMessages(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    let message = `Name: ${messages.name} %0AEmail: ${messages.email} %0AContent: ${messages.content}`
    fetch(`https://api.telegram.org/bot${tg_token}/sendMessage?chat_id=${tg_id}&text=${message}`)
    setMessages({ name: "", email: "", content: "" })
  }
  return (
    <div className={styles.contact}>
      <h1 className={styles.contact__title}>Contact <span>Me</span></h1>
      <p className={styles.contact__text}>Let's get in touch!</p>
      <form onSubmit={onSubmit} className={styles.contact__form}>
        <div className={styles.contact__message}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={messages.name} 
            onChange={handleChange}
            className={styles.contact__input}
            required
          />
          <textarea
            type="text"
            placeholder="Content"
            name="content"
            value={messages.content} 
            onChange={handleChange} 
            className={styles.contact__content}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={messages.email} 
            onChange={handleChange} 
            className={styles.contact__input}
            required
          />
        </div>
        <button className={styles.contact__send} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact