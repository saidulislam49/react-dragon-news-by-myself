import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsHomeCard = ({ news }) => {
    const { _id, title, author, image_url, details, rating } = news;
    
    return (
        <div>
            <div className="card bg-base-100 m-4 shadow-xl border">
                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-t-xl">
                    <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 rounded-[50%] overflow-hidden">
                            <img src={author.img} />
                        </div> 
                        <div>
                            <h3>{author.name}</h3>
                            <p>{author.published_date}</p> 
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <CiBookmark></CiBookmark>
                        <CiShare2></CiShare2>
                    </div>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-3">{title}</h2>
                    <figure>
                        <img
                            src={image_url}
                            alt="Shoes" />
                    </figure>
                    <div className="py-4"> 
                        {
                            details.length >= 200 ? <p>{details.slice(0, 200)} <Link to={`/news_detail/${_id}`} className="text-blue-600">Read More</Link></p> : <p>{details}</p>
                        } 
                    </div>
                    <hr />
                    <div>
                        <div>
                             
                            <FaRegStar></FaRegStar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsHomeCard;