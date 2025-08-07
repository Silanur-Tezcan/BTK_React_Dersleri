import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

export default function App(){
  return (
    <>
      <Header/>
     <div className='container mt-3'>
       <ProductList/>
      <Footer/>
     </div>
    </>
  );
}