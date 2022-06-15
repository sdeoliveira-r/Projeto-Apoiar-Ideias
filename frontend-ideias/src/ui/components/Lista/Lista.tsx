import { Button } from '@mui/material'
import {
  ListaStyled,
  ItemLista,
  Foto,
  Informacoes,
  Nome,
  Descricao
} from './Lista.style'
import { Idea } from '../../../data/@types/Idea'
import { TextService } from '../../../data/services/TextServices';

interface ListaProps {
  ideas: Idea[];
  onSelect: (idea: Idea) => void;
 
}


export default function Lista(props: ListaProps){
  const tamanhoMaximoTexto = 200;

  return (
    <ListaStyled>
      {props.ideas.map(idea => (
        <ItemLista key={idea.id}>
          <Foto src={idea.foto} alt={idea.nome}/>
          <Informacoes>
            <Nome>{idea.nome}</Nome>
            <Descricao>
              {TextService.limitarTexto(idea.historia, tamanhoMaximoTexto)}
            </Descricao>
            <Button
              variant={'contained'}
              fullWidth
              onClick={() => props.onSelect(idea)}
            >Apoiar {idea.nome}
            </Button>
          </Informacoes>
        </ItemLista>
      ))}
  </ListaStyled>
  )
}