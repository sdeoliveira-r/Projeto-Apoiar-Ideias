import { styled } from '@mui/material';

export const CabecalhoContainer = styled('header')`
  
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ipx solid #f0f0f0;
  background-color: #f8f8f8;
  height: 125px;
  padding: ${({theme}) => theme.spacing(1)}; /**** 4 x 8 = 32px ****/
  font-size: 14px;
`;

export const Logo = styled('img')`
  width: 90px;
`;

