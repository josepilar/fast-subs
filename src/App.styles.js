import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { COLORS } from './constants';

export const Container = styled.div`
  height: 100vh;
  color: ${COLORS.BABY_POWDER};
  background-color: ${COLORS.RAISING_BLACK};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchWrapper = styled.div`
  width: 600px;
  box-shadow: 0px 0px 43px 13px rgba(253,255,252,0.4);
  background-color: ${COLORS.BABY_POWDER};
  border-radius: 15px;
`;

export const SearchContainer = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  color: ${COLORS.PERSIAN_GREEN};
  margin-inline-start: 0.67em;
`;

export const Input = styled.input`
  margin-left: 10px;
  font-size: 1rem;
  width: 100%;
  color: ${COLORS.OXFORD_BLUE};
  padding: 5px 10px;
  border-radius: 20px;
  border: 2px solid ${COLORS.METALLIC_SEAWEED};

  &:focus, &:hover {
    outline: none;
    border: 2px solid ${COLORS.OXFORD_BLUE};
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }
`;

export const Row = styled.div`
  width: 100%;
  &.text-right{
    text-align: right;
  }
`;

export const InputField = styled.div`
  width: 100%;
  margin-bottom: 1em;
  display: inline-flex;
  align-items: center;
  margin-left: 0;

  @media only screen and (min-width: 450px) {
    &:not(:first-child) {
      margin-left: 10px;
    }
  
    &.half {
      width: 50%;
  
      &:not(:first-child) {
        width: calc(50% - 10px);
      }
    }
  }

  label {
    font-size: 1.2em;
    font-weight: 600;
    color: ${COLORS.PERSIAN_GREEN};
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 20px;
  font-size: 1.2em;
  padding: 5px 20px;
  margin-top: 15px;
  margin-right: 5px;
  background-color: ${COLORS.METALLIC_SEAWEED};
  color: ${COLORS.BABY_POWDER};

  &:hover, &:focus {
    background-color: ${COLORS.OXFORD_BLUE};
  }
`;

export const FancySelect = styled.div`
  border-radius: 50px;
  display: inline-flex;
  overflow: hidden;
  margin-left: 10px;
  width: 100%;
  border: 2px solid ${COLORS.PERSIAN_GREEN};

  &:focus-within {
    border-color: ${COLORS.OXFORD_BLUE};
    color: ${COLORS.OXFORD_BLUE};
  }

  select {
    display: inline-block;
    font-size: 1.2em;
    width: calc(100% + 2px);
    color: ${COLORS.PERSIAN_GREEN};
    line-height: 1.3;
    padding: 3px 15px;
    box-sizing: border-box;
    margin: 0;
    margin-left: -2px;
    border-radius: 0.5em;
    appearance: none;
    background-color: white;
    background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='iso-8859-1'?%3E%3C!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='444.819px' height='444.819px' viewBox='0 0 444.819 444.819' style='enable-background:new 0 0 444.819 444.819;' xml:space='preserve'%3E%3Cg%3E%3Cpath d='M434.252,114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561c-10.095,0-18.657,3.521-25.7,10.561 L222.41,231.549L83.653,92.791c-7.042-7.04-15.606-10.561-25.697-10.561c-9.896,0-18.559,3.521-25.979,10.561l-21.128,21.416 C3.615,121.436,0,130.099,0,140.188c0,10.277,3.619,18.842,10.848,25.693l185.864,185.865c6.855,7.23,15.416,10.848,25.697,10.848 c10.088,0,18.75-3.617,25.977-10.848l185.865-185.865c7.043-7.044,10.567-15.608,10.567-25.693 C444.819,130.287,441.295,121.629,434.252,114.203z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
    border-color: white;
    box-shadow: none;
    box-shadow: 0 0 0 0 -moz-mac-focusring;
    outline: none;

    &::-ms-expand {
      display: none;
    }
    &:hover {
      border-color: white;
    }
    &:focus {
      border-color: white;
      box-shadow: none;
      box-shadow: 0 0 0 0 -moz-mac-focusring;
      color: ${COLORS.OXFORD_BLUE};
      outline: none;
    }
    option {
      font-weight: normal;
    }
  }
`;