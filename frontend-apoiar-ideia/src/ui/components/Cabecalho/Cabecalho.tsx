import { Link, Box } from '@mui/material';
import  NextLink  from 'next/link';
import { LinksContainer } from '../CabecalhoAdmin/CabecalhoAdmin.style';
import {
  CabecalhoContainer,
  Logo
} from './Cabecalho.style';

export default function Cabecalho() {
  return(
  <CabecalhoContainer>
    <Logo src="/imagens/logo.svg" alt="Adote uma ideia"/>
      <LinksContainer>
        
        <Link component={NextLink} href={'/'}>
              <a></a>
        </Link>
        
        <Link component={NextLink} href={'/ideias/cadastro'}>
          <a><strong>CADASTRE SUA IDEIA</strong></a>
        </Link>

        <Link component={NextLink} href={'/ideias/relatorio'}>
          <a>
          <strong>RELATÓRIO</strong>{' '}
            <Box component={'span'} sx={{display: {sm: 'initial', xs: 'none'}}}>
            <strong>DE APOIOS</strong>
            </Box>
          </a>
        </Link>

      </LinksContainer>
  </CabecalhoContainer>
  
  )
}