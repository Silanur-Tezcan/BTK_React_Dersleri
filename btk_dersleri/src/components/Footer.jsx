export default function Footer(){
  const hour = new Date().getHours();
  const openHour=10;
  const closeHour=20;
  const isOpen= hour>= openHour && hour <= closeHour;
  console.log(isOpen);
  
  return (
    <footer className='mt-3'>
      <p>{isOpen ? "Şu anda açığız 🟢" : "Kapalıyız 🔴"}</p>   
    </footer>
  );


}