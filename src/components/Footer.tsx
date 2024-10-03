import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Footer Project.<br/> All rights reserved.</p>
      <p>LinkedIn: <a href="https://www.linkedin.com">LinkedIn</a></p>
      <p>Address: GIAIC, Karachi,<br/>Sindh, Pakistan</p>
      <p>Email: abc@gmail.com</p>
    </footer>
  )
}

export default Footer;

  