
import Header from "../components/header";
import Footer from "../components/footer";
// import MainPage from "./page";

const Layout=(props)=>{
   
    return(
        <div>
        <Header></Header>
        <main>{props.children}</main>
        <Footer></Footer>
        </div>
    )
}
export default Layout;