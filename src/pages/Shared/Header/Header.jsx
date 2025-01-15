
import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='pt-12 pb-7 text-center'> 
            <img src={logo} alt="" className='mx-auto mb-5' />
            <p className='text-lg text-[#706F6F] mb-3'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-[#706F6F]'><span className='text-[#403F3F]'>Sunday,</span> {moment().format('MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;