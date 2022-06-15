import { NextPage } from "next"
import { useCadastro } from "../../data/hooks/pages/ideias/useCadastro";
import Titulo from "../../ui/components/Titulo/Titulo";
import { Paper, Grid, TextField, Button, Snackbar } from "@mui/material";


const Cadastro: NextPage = () => {
  const {
      nome,
      historia,
      foto,
      setNome,
      setHistoria,
      setFoto,
      cadastrar,
      mensagem,
      setMensagem
  } = useCadastro();

  return (
    <>
        <Titulo
            titulo={'Cadastro de ideias'}
            subtitulo={'Preencha os dados de uma nova ideia'}
        />

        <Paper sx={{maxWidth: 970, marginX: 'auto', padding: 5}}>
            <Grid container spacing={3} >
              <Grid item xs={12} >
                <TextField

                    value={nome}
                    onChange={(e) => setNome(e.target.value)}

                    label={'Nome'}
                    placeholder={'Digite o nome da ideia'}
                    fullWidth
                />
              </Grid>
              <Grid item xs={12} >
                <TextField

                    value={historia}
                    onChange={(e) => setHistoria(e.target.value)}

                    label={'Descreva sua ideia'}
                    multiline
                    rows={4}
                    fullWidth
                />
              </Grid>
              <Grid item xs={12} >
                <TextField

                    value={foto}
                    onChange={(e) => setFoto(e.target.value)}

                    label={'Foto'}
                    placeholder={'Inserir o link da imagem'}
                    fullWidth
                />
                <Button
                    variant={'contained'}
                    color={'secondary'}
                    sx={{marginTop: 2}}
                    component={'a'}
                    href={'https://imgur.com/upload'}
                    target={'_blank'}
                >
                  Enviar imagem
                </Button>
              </Grid>
              <Grid item xs={12} sx={{textAlign: 'center'}} >
                <Button

                    onClick={cadastrar}
                    
                    variant={'contained'}
                    fullWidth
                    sx={{maxWidth: {md: 200}, marginTop: 4}}
                >
                    Cadastrar ideia
                </Button>
              </Grid>
            </Grid>
        </Paper>

        <Snackbar
            open={mensagem.length > 0 }
            autoHideDuration={2500}
            onClose={() => setMensagem('')}
            message={mensagem}
        />
    </>
  )
}

export default Cadastro;