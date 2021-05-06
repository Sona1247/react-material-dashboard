import React,{useEffect} from 'react'
import Sidebar from "./Sidebar";
import "../styles/Main2.scss";
import Content2 from "./Content2";

    const Main2 = (props) => {useEffect(() =>{
        console.log(props)
      })
    return (
        <div className="main2">
            <Sidebar />
            <Content2 />
        </div>
    )
}

export default Main2
