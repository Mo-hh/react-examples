import React from 'react';



const JustImg =props =>{



  return(
    <React.Fragment>
    { props.shwoImages.map((title,index)=><img  className="img-rounded"  key={index} src={title.source} style={{width:"30vw", height:"25vw"}} /> )}
    </React.Fragment>
  )

}
export default JustImg;
