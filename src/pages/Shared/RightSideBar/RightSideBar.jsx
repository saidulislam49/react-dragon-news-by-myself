import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import swimming from '../../../assets/swimming.png';
import classImg from '../../../assets/class.png';
import plaground from '../../../assets/playground.png';

const RightSideBar = () => {
    return (
        <div>
            <div className="space-y-3 p-3 mb-6">
                <h2 className="text-2xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full"> 
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full"> 
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className="p-3 mb-6">
                <h2 className="text-2xl font-semibold mb-5">Find Us On</h2>
                <a href="" className="flex p-4 items-center border rounded-t-lg">
                    <FaFacebookF className="mr-2"></FaFacebookF>
                    <span>Facebook</span>
                </a>
                <a href="" className="flex p-4 items-center border-x">
                    <FaTwitter className="mr-2"></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a href="" className="flex p-4 items-center border rounded-b-lg">
                    <FaInstagram className="mr-2"></FaInstagram>
                    <span>Facebook</span>
                </a>
            </div>
            <div className="space-y-5 p-3 mb-6">
                <h2 className="text-2xl font-semibold mb-5">Q-Zone</h2>
                <img src={swimming} alt="q zone image" />
                <img src={classImg} alt="q zone image" />
                <img src={plaground} alt="q zone image" />
            </div>
        </div>
    );
};

export default RightSideBar;