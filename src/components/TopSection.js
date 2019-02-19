import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import background from '../images/loan-img.jpg';

const Top = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${background});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100vw 400px;
  background-attachment: scroll;
`;

const AppInfo = styled.div`
  font-weight: 700;
  max-width: 500px;
  margin-top: 110px;
  color: rebeccapurple;
`;

const TopSection = () => (
  <Top>
    <Nav />
    <div className="container">
      <AppInfo>
        <label>New to Credit?</label>
        <p>
          Easy Lend is a tech company which serves thin file or "invisible"
          customers with competitively priced financial products.
        </p>
      </AppInfo>
    </div>
  </Top>
);

export default TopSection;
