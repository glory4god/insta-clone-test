import React from 'react';
import Image from 'next/image';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <div className={s.paper}>
        <div className={s.navigator}>
          <a href="">
            <Image
              src={'/instagram.png'}
              width={'115px'}
              height={'32px'}
              alt={'mainlogo'}></Image>
          </a>
          <div>검색</div>
          <div>네비</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
