import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBarNewsCard from "./sideBarNewsCard";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const [leftSideBarNews, setLeftSideBarNews] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setLeftSideBarNews(data));
    },[])
 
    return (
        <div>
            <div>
                <h1 className="text-xl font-semibold">All Categories</h1>
                {
                    categories.map(category => <Link to={`/category/${category.id}`} key={category.id} className="block p-4 hover:bg-slate-800">{category.name}</Link>)
                }
            </div>
            <div className="space-y-5">
                {
                    leftSideBarNews.slice(0,3).map(news => <SideBarNewsCard key={news._id} news={news}></SideBarNewsCard>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;