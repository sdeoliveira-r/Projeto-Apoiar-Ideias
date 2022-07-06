import type { NextPage } from 'next';
import Titulo from '../ui/components/Titulo/Titulo';
import Lista from '../ui/components/Lista/Lista';
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material';
import { useIndex } from '../data/hooks/pages/useIndex';

const Home: NextPage = () => {
  const {
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
  } = useIndex();

  return (
    <div>
      <Titulo 
        titulo="IDEIAS PODEM CONTAR COM SEU APOIO"
        subtitulo={
          <span>
            Com seu apoio uma pequena ideia <br />
            pode tornar-se uma <strong> grande ideia</strong> 
          </span>
        } />

      <Lista
        ideas={listaIdeas}
        onSelect={(idea) => setIdeaSelecionado(idea)} 
    />

    <Dialog
      open={ideaSelecionado !== null}
      fullWidth
      PaperProps={{ sx: { padding: 5 }}}
      onClose={() => setIdeaSelecionado(null)}
    
    >
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <TextField
            label={'E-mail'}
            type={'email'}
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={'Quantia por mês'}
            type={'number'}
            fullWidth
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </Grid>
      </Grid>
      <DialogActions sx={{marginTop: 5}}>
        <Button
          color={'secondary'}
          onClick={() => setIdeaSelecionado(null)}
        >
          Cancelar
        </Button>
        <Button
          variant={'contained'}
          onClick={() => apoiar()}
        >
          Apoiar
        </Button>
      </DialogActions>
    </Dialog>

    <Snackbar
        open={mensagem.length > 0}
        autoHideDuration={2500}
        onClose={() => setMensagem('')}
        message={mensagem}
    />
  </div>
  )
}

export default Home

