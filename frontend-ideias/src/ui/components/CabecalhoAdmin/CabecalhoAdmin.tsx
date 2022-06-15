import { Link, Box } from '@mui/material';
import  NextLink  from 'next/link';

import {
  CabecalhoContainer,
  Logo,
  LinksContainer
} from './CabecalhoAdmin.style';

export default function CabecalhoAdmin(){
  return (
    <CabecalhoContainer>
      <div>
        <Logo src={'/imagens/logo.svg'} alt={'Apoie uma ideia'}/>
        <LinksContainer>
            <Link component={NextLink} href={'/'}>
              <a>IDEIAS JÁ CADASTRADAS</a>
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
      </div>
    </CabecalhoContainer>
  )
}