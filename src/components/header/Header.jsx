import Logo from "../../assets/img/logo/logo.png";
import style from "./header.module.css";
import Cart from "../icons/Cart";
import SearchIcon from "../icons/SearchIcon";

function Footer() {
  return (
    <>
      <header>
        {/*DIV LOGO*/}
        <div className={style.logo}>
          <img className={style.logoImg} src={Logo} alt="" />
        </div>
        {/*DIV SEARCH*/}
        <div className={style.search}>
          <input
            className={style.inputSearch}
            type="text"
            name="search"
            id="search"
            placeholder="Pesquisar produto..."
          />
          <i className={style.iconSearch}>
            <SearchIcon />
          </i>
        </div>
        {/*DIV LINKS */}
        <div className={style.storeLinks}>
          <a className={style.signUp} href="">
            Cadastre-se
          </a>
          <a className={style.btnLogin} href="">
            Entrar
          </a>
          <div className={style.Cart}>
            <Cart />
            <span>02</span>
          </div>
        </div>
      </header>
    </>
  );
}
export default Footer;
