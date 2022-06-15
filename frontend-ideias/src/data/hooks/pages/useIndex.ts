import { useState, useEffect } from 'react';
import { Idea } from '../../@types/Idea';
import { ApiService } from '../../services/ApiService';
import { AxiosError } from 'axios';

export function useIndex(){
    const [listaIdeas, setListaIdeas] = useState<Idea[]>([]),
      [ideaSelecionado, setIdeaSelecionado] = useState<Idea | null>(null), 
      [email, setEmail] = useState(''),
      [valor, setValor] = useState(''),
      [mensagem, setMensagem] = useState('');

    useEffect(() => {
      ApiService.get('/ideias')
        .then((resposta) => {
            setListaIdeas(resposta.data);
        })
    }, [])

    useEffect(() => {
      if(ideaSelecionado === null){
        limparFormulario();
      }
    }, [ideaSelecionado])
    
    function apoiar(){
      if(ideaSelecionado !== null){
        if(validarDadosApoiar()){
          ApiService.post('/apoios', {
            idea_id: ideaSelecionado.id,
            email,
            valor
          })
            .then(() => {
              setIdeaSelecionado(null);
              setMensagem('Ideia apoiada com sucesso!!!');
            })
            .catch((error: AxiosError) => {
              setMensagem(error.response?.data.message);
            })

        } else {
          setMensagem('Preencha todos os campos corretamente')
        }

      }
      
    }

    function validarDadosApoiar(){
      return email.length > 0 && valor.length > 0;
    }

    function limparFormulario(){
      setEmail('');
      setValor('');

    }
  
    return {
      listaIdeas,
      ideaSelecionado,
      setIdeaSelecionado,
      email,
      setEmail,
      valor,
      setValor,
      mensagem, 
      setMensagem,
      apoiar
    };
}