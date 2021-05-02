import React from 'react'
import "../styles/Content2.scss"
import Footer from "./Footer";
import Search from "./Search"
import EnhancedTable from "./EnhancedTable";
const Content2 = () => {
    return (
        <div className="content2">
            <Search />
            <EnhancedTable />
            <Footer />
        </div>
    )
}

export default Content2
