import { Link, Navigate } from 'react-router-dom';
import mainImg from '../assets/images/main-job.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}

      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* ------Info------ */}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur placeat vel molestias voluptatum, ullam necessitatibus
              voluptate pariatur aperiam delectus ut dignissimos ducimus quo
              sequi magni repudiandae, dolorem soluta? Libero, voluptatum.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={mainImg} alt='road' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
