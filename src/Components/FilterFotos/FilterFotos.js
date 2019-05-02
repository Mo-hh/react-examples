import React,{Component} from 'react';
import{Datafotos,buttonData,uniqClasses}  from '../../Data/fotosAndButtons';
import JustImg from './fotosComponent'




export default class HoleFotos extends React.Component{

constructor(props){
super(props);
this.state={shwoImages:Datafotos}

}


filterby(whatYouClick) {
if(whatYouClick==='all') {

  this.setState({shwoImages:Datafotos})
}else {
  this.setState({shwoImages: Datafotos.filter( photo =>photo.category===whatYouClick )});
}

}

filterImages(ev) {
  const targetElementbyIdentifier =ev.target.getAttribute('identifier');
  this.filterby(targetElementbyIdentifier);
}

render() {


return(

  <React.Fragment>
  <div className= "text-center">
       {buttonData.map((button, index) => <button className={['btn', 'btn-lg', uniqClasses[index]].join(' ')} key={index}
  identifier={button.identifier} onClick={this.filterImages.bind(this)}>{button.text}</button>)}

    <div className="row text-center ">

   <JustImg  shwoImages={this.state.shwoImages}/>


  </div>
  </div>

 </React.Fragment>
)
}

}
