import "../styles/globals.css";
import { NavBar } from "../components/componentsindex";


const MyApp = ({ Component, pageProps }) => 
  <><Component {...pageProps} /><NavBar /></>
export default MyApp;
