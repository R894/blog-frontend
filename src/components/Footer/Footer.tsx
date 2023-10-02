import FooterCSS from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={FooterCSS.footer}>
        <a href="https://github.com/R894">
          <p>R894</p>
          <img src="/icons/github.png" style={{width: '25px', height: 'auto'}}/>
        </a>
      </div>
    </>
  );
};

export default Footer;
