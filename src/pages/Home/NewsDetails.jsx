import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";


const NewsDetails = () => {
    const { id } = useParams();
    const [newsDetails, setNewsDetails] = useState([]);
    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNewsDetails(data.find(news => news._id === id)));
    }, []);

    // const singleDetail = newsDetails.find(news => news._id === id);


    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid grid-cols-3 my-5">
                <div className="col-span-2">
                    <h3 className="text-3xl mb-4">News Details {newsDetails.title}</h3>
                    <img src={newsDetails.image_url} alt="" />
                    <p className="my-3">{newsDetails.details}</p>
                </div>
                <div className="col-span-1">
                    <RightSideBar></RightSideBar>
                </div>
            </div>

        </div>
    );
};

export default NewsDetails;