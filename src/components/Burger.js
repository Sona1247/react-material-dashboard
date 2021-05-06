import React, { useState } from 'react';
import styled from 'styled-components';
import RightDirectionNav from "./RightDirectionNav"

const StyledBurger = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 20;
  display: none;
  @media (max-width: 850px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index:99;
  }
  div {
    width: 1.5rem;
    height: 0.18rem;
    background-color: ${({ open }) => open ? '#FFFFFF' : '#FFFFFF'};
    border-radius: 10px;
    transform-origin: 1px;
    
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightDirectionNav open={open}/>
    </>
  )
}

export default Burger