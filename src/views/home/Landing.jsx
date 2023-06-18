import { useNavigate } from 'react-router-dom';

import Button from '../../components/common/button/Button';
import Footer from '../../components/common/footer/Footer';

import './landing.css';
import Logo from '../../components/common/logo/Logo';

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/auth');
  };

  return (
    <div className='main'>
      {/* <Logo /> */}
      <div className='landing'>
        <div className="welcome">
          <span className='wl'>Welcome to this PROJ3KT!</span>
          <span className="desc">
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates a accusamus
            dignissimos doloribus non dolores aliquid
            tempora ipsam eaque cumque quo eius placeat
            suscipit asperiores nam sapiente saepe, harum
            optio!
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates a accusamus
            dignissimos doloribus non dolores aliquid
            tempora ipsam eaque cumque quo eius placeat
            suscipit asperiores nam sapiente saepe, harum
            optio!
          </span>
        </div>
        <div className="btn-c">
          <Button
            title={'Get Started'}
            onClick={handleClick}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;