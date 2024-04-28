const Footer = () => {
  let time = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <p>&copy; Copyright {time}</p>
    </footer>
  );
};
export default Footer;
