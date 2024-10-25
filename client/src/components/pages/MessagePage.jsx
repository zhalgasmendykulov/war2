import  { useEffect, useState } from 'react'

export default function MessagePage() {
    const [idRender, setidRender] = useState(false);

    useEffect(() => {
      let timeoutId; // проверяет сотояние idRender
      
      if (!idRender) {
        setidRender(true);
      }
  
      if (idRender) {
        timeoutId = setTimeout(() => {
          window.location.assign('/');
        }, 3000); 
        
        return () => clearTimeout(timeoutId);
      }
    }, [idRender]);


  return (
    <>
    <div style={{backgroundColor: '#EFEFEF' , background: 'linear-gradient(to bottom, white, black)', height: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '60px' }}>Ваш заказ принят!</div>
    </>
  )
}
