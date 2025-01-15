import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn bg-[#D72050] hover:bg-[#d72051ea] text-white">Breaking News</button>
            <Marquee speed={80}>
                <span className="mr-12"> I can be a React component, multiple React components, or just some text.</span>
                <span className="mr-12"> I can be a React component, multiple React components, or just some text.</span>
                <span className="mr-12"> I can be a React component, multiple React components, or just some text.</span>
            </Marquee>
        </div>
    );
};

export default BreakingNews;