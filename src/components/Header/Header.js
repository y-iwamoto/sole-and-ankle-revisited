import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';
import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import { rem } from 'polished'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileSide />
        <IconNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
          </UnstyledButton>
        </IconNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 24px 16px;

  @media ${QUERIES.laptopAndUp} {
    padding: 18px 32px;
  }
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
`;

const Nav = styled.nav`
  display: none;
  margin: 0px 48px;
  @media ${QUERIES.laptopAndUp} {
    gap: clamp(1.5rem, -5.357rem + 14.29vw, 7.5rem);
    display: flex;
    overflow-x: scroll;
    width: 100%;
    margin: 0px;
    margin-left: ${rem('48px')};
  }
`;

const IconNav = styled.nav`
  display: flex;
  flex-grow: 10;
  justify-content: space-between;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`
const Side = styled.div`
  flex: 1;
`;

const MobileSide = styled.div`
  flex-grow: 50;
  @media ${QUERIES.laptopAndUp} {
    flex: 0;
  }
`
const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
