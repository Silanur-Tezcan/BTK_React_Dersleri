import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App/>
  </StrictMode>,
)


//! if else de {isOpen && "açık"} olunca sadece bu sorgu karşılıyorsa istediğimizi verir ama 
// {isOpen ? "açık": "kapalı"} ? işareti kullanıldıgında ise else devreye giriyor ve istediğimiz gerçekleşmezse
// ikinci olasılıgı döndürüyor.

// ! bu kısımda ise listede ürün yoksa ürünün olmadıgını bildiriyor var ise de ürünleri listeliyor
// const items=[];
//      return (
//   <>
//      <h2> Product List</h2>
//      {
//       items.length>0 ?  (
//          <div id='product_list'>
//          {
//       items.map((item , index)=>(
//       <Product  key={index} productObj={item}/>
//       ))
//      }
//      </div>

//       ):
//       (<p> şuanda satışta olan ürünümüz yok. 🔴</p>)
//      }
//     </>
//    );
// }


// ! bu kısımda ise ürün satışta değil ise sayfadan kaldırır
//  if(!productObj.is_active) return null;

// ! belirli bir fiyat altında ki ürünlerin renklerini yeşil üstünde olanları ise kırmızı gösterir:
// <span className={productObj.price <100000 ? "discount" : "price"}> {productObj.price} TL </span>