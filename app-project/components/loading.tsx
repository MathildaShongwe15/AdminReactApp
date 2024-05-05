
import '../components/css/Menu.css'
import ReactLoading from 'react-loading';

 import React from 'react';


 function Loading() {
  return (
 <div style={{width:1500, height:800, backgroundColor:'#fff', display:'flex', alignItems:'center', justifyContent:'center'}}>
<ReactLoading type="spin" color="#07137D" height={150} width={100} />
 </div>

  );
}

export default Loading;
;