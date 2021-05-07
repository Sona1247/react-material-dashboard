import React from 'react'
import "../styles/Content2.scss"
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Search from "./Search"
import EnhancedTable from "./EnhancedTable";
const Content2 = () => {
    const data1 = useSelector((state) => state.allDataReducer);
    return (
        <div className="content2">
            <Search />
            {data1.data ? <EnhancedTable table={data1} /> : ""}
            
            <Footer />
        </div>
    )
}

export default Content2
