import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as NightIcon } from '../icons/moon.svg';
import { ReactComponent as SunIcon } from '../icons/sun.svg';
// import { lightTheme } from './Themes';

export const ToggleContainer = styled.button`
    background: ${({ theme }) => theme.gradient};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    color: ${({ theme }) => theme.text};
    border-radius: 34px;
    cursor: pointer;
    display: flex;
    font-size: 0.5rem;
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    padding: 0.5rem;
    position: relative;
    width: 60px;
    height: 33px;
    float: right;
  

    svg {
        height: 26px;
        width: 26px;
        right: 4px;
        transition: all 0.3s linear;
        
        &:first-child {
            transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
        }
        
        &:nth-child(2) {
            transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
}
`
const Toggle = ({theme, toggleTheme }) => {
    const lightTheme = theme === 'light'
    return (
        <ToggleContainer onClick={toggleTheme} lightTheme={lightTheme}>
            <SunIcon />
            <NightIcon />
        </ToggleContainer>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;