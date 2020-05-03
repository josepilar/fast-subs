import styled from '@emotion/styled';
import { COLORS } from '../constants';

export const ItemList = styled.li`
  color: ${COLORS.PERSIAN_GREEN};
  cursor: pointer;

  &:hover, &:focus {
    color: ${COLORS.OXFORD_BLUE};
  }
`;

export const CoverImage = styled.img`
  max-width: 300px;
  heigth: auto;

  @media only screen and (max-width: 400px) {
    max-width: 200px;
  }
`;