import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  fontsize: '1.25rem';
`;

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
    <div className="container">
      <Link className="navbar-brand" href="/">
        <strong>Easy LEND</strong>
      </Link>
    </div>
  </nav>
);

export default Nav;
