/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished'
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content aria-label='menu'>
        <StyledButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={1} />
        </StyledButton>
        <Nav>
          <Anchor href="/sale">Sale</Anchor>
          <Anchor href="/new">New&nbsp;Releases</Anchor>
          <Anchor href="/men">Men</Anchor>
          <Anchor href="/women">Women</Anchor>
          <Anchor href="/kids">Kids</Anchor>
          <Anchor href="/collections">Collections</Anchor>
        </Nav>
        <Footer>
          <FooterAnchor href="/terms">Terms and Conditions</FooterAnchor>
          <FooterAnchor href="/privacy">Privacy Policy</FooterAnchor>
          <FooterAnchor href="/contact">Contact Us</FooterAnchor>
        </Footer>
      </Content>
    </Overlay>
  );
};

const StyledButton = styled(UnstyledButton)`
  margin-left: auto;
  margin-right: ${rem('22px')};
`
const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  height: 100%;
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${rem('32px')};
  padding-bottom: ${rem('32px')};

`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${rem('22px')};
  margin-left: ${rem('32px')};
`

const Anchor = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: ${rem('18px')};
  line-height: ${rem('21px')};
  text-transform: uppercase;
  text-decoration: none;
  color: #313235;

  &:hover {
    color: #6868D9;
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: ${rem('14px')};
  margin-left: ${rem('32px')};
`

const FooterAnchor = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-decoration: none;
  color: #60666C;
`
export default MobileMenu;
