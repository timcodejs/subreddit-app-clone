import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, NavLink } from '../../styles/headerStyled';
import { ChildrenProps } from '../../types/childrenType';

const Header = ({ children }: ChildrenProps) => {
  return (
    <>
      <Container as="header">
        <Link to="/">
          <Logo />
        </Link>

        <nav>
          <NavLink to="/how-it-works">How it works</NavLink>

          <NavLink to="/about">About</NavLink>
        </nav>
      </Container>
      {children}
    </>
  );
};

export default Header;
