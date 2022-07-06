import { styled } from '@mui/material';

export const CabecalhoContainer = styled('header')`
  
  height: 100%;
  
  
  
  display: flex;
  
  justify-content: space-around;
  margin: 0 auto;
  align-items: center;
  

  border-bottom: ipx solid #f0f0f0;
  background-color: #f8f8f8;
  height: 115px;
  padding: ${({theme}) => theme.spacing(2)}; /**** 4 x 8 = 32px ****/
  

  font-size: 15px;
  color: ${({ theme }) => theme.palette.text.secondary };
`;

export const Logo = styled('img')`
  width: 90px;
`;

