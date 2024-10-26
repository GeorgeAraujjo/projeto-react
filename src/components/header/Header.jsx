import Logo from "../../assets/img/logo/logo.png";
import style from"./header.module.css";
import car from"../../assets/img/logo/carrinho.png";

function Footer () {
    return (
        <>
          <header> 
            {/*DIV LOGO*/}
            <div className={style.logo}>
              <img className={style.logoImg} src={Logo} alt="" />
            </div>
            {/*DIV SEARCH*/}
            <div className="search">
              <div className={style.input}>
                <input 
                className={style.inputSearch}
                type="text" name="search" id="search" 
                placeholder="Pesquisar produto..."
                />
              </div>
            </div>
            {/*DIV LINKS */}
            <div className={style.storeLinks}>
              <a className="sign-up" href="">Cadastre-se</a>
              <a className={style.btnLogin} href="">Entrar</a>
              <a className="Cart" href="">Cart</a>
            </div>
          </header>
        </>
    );      
}
export default Footer;