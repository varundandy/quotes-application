



const Footer = () => {
  return (
    <div id="footer">
      <footer>
            This is the footer of the website. Copyright @ {() => new Date().getFullYear}
      </footer>
    </div>
  );
};


export default Footer;