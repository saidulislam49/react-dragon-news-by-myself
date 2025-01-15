import moment from 'moment';

const SideBarNewsCard = ({ news }) => {
    const { title, thumbnail_url, category_id, author } = news;
    return (
        <div className="">
            <img src={thumbnail_url} alt="image" />
            <h3 className="text-lg mt-3">{title}</h3>
            <div>
                <p>{category_id}</p>                
                <p>{moment(author.published_date).format('LL')}</p>
            </div>
        </div>
    );
};

export default SideBarNewsCard;