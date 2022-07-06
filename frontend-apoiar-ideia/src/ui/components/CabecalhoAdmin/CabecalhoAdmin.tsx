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
              <a>Ideias já cadastradas</a>
            </Link>
            <Link component={NextLink} href={'/ideias/cadastro'}>
              <a>Cadastre sua ideia</a>
              </Link>
              <Link component={NextLink} href={'/ideias/relatorio'}>
              <a>
                Relatório{' '}
                <Box component={'span'} sx={{display: {sm: 'initial', xs: 'none'}}}>
                de apoios
                </Box>
              </a>
              </Link>
           
        </LinksContainer>
      </div>
    </CabecalhoContainer>
  )
}