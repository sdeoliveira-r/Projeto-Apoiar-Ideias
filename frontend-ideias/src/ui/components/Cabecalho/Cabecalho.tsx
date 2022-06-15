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
              <a>HOME</a>
        </Link>
        
        <Link component={NextLink} href={'/ideias/cadastro'}>
          <a>CADASTRAR IDEIA</a>
        </Link>

        <Link component={NextLink} href={'/ideias/relatorio'}>
          <a>
            RELATÓRIO{' '}
            <Box component={'span'} sx={{display: {sm: 'initial', xs: 'none'}}}>
            DE APOIOS
            </Box>
          </a>
        </Link>

      </LinksContainer>
  </CabecalhoContainer>
  
  )
}