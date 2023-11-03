import React from 'react'
import Feature from "../feature/Feature"
import "./specialization.css"
const specialisation = () => {
    const specialisation=[{specialisation:"General Physician",
  image:"https://th.bing.com/th/id/OIP.fXb_9ZwxqlB2LkVTxisrEQHaFj?w=264&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7"},{specialisation:"Peditrician",image:"https://th.bing.com/th/id/OIP.eDPLM6FBBUDOPKQrmNreOgHaFo?w=214&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},{specialisation:"Gynocologist",image:"https://www.supercoder.com/webroot/upload/general_pages_docs/article_tag_images/Pap%20Testing.jpg"},{specialisation:"Neurologist",image:"https://t4.ftcdn.net/jpg/01/04/17/09/500_F_104170960_LkXTA62KQfIr04AXA8MpxSDXrHOkoXgz.jpg"},{specialisation:"Urinology",image:"https://th.bing.com/th/id/R.3b64b3b24a59b2048e5c9f5385cc4093?rik=faP%2bicndS0UB%2fw&riu=http%3a%2f%2fwww.emccochin.com%2fwp-content%2fuploads%2f2015%2f12%2fUrology-1.jpg&ehk=IBCsNXabZN90Bj7fBlK78sjYwaisLG3707t9chRcjcY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"},{specialisation:"Dermatologist",image:"https://th.bing.com/th/id/OIP.svGBYNtP-kk8O0ejaKFnXgHaIM?pid=ImgDet&w=560&h=620&rs=1"},{specilisation:"Dentist",image:"https://th.bing.com/th/id/OIP.u7-BXrVhsshGaZCjipup4wHaEo?pid=ImgDet&rs=1"}];
  return (
    <div className='Featuredcontainer'>
      {specialisation.map((data)=>{
        return <Feature specialisation={data}/>
      })}
    </div>
  )
}

export default specialisation
