import React from 'react';
import Paper from '@material-ui/core/Paper';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <div className={s.paper}>
        <div className={s.navigator}>
          <div>이미지</div>
          <div>검색</div>
          <div>네비</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
