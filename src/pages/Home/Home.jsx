import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";
import BreakingNews from "./BreakingNews";
import NewsHomeCard from "./NewsHomeCard";
import { useLocation } from "react-router-dom";


const Home = () => {
    const [newses, setNewses] = useState([]);
    useEffect(() => { 
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNewses(data));
    }, []); 
    
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar> 

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold">Dragon News Home </h2>
                    <div>
                        {
                            newses.map(news => <NewsHomeCard key={news._id} news={news}></NewsHomeCard>)
                        }
                    </div>
                </div>
                <div className="">
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;