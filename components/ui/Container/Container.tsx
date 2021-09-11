import React, { FC } from 'react';
// import s from './Container.module.css';
import styled from '@emotion/styled';

interface ContainerProps {
  className?: string;
  children?: any;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default React.memo(Container);

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 935px;
  text-align: center;
  padding-top: 54px;
  color: black;
  margin: 0 auto;
  z-index: 1;
  div {
    color: blue;
    &:hover {
      color: red;
    }
  }
  h1 {
    background-color: #EEEEEE;
  }
`;