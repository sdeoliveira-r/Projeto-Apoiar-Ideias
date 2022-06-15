import { NextPage } from "next";
import Titulo from '../../ui/components/Titulo/Titulo';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material';
import { useRelatorio } from "../../data/hooks/pages/useRelatorio";



const Relatorio: NextPage = () => {
  const { listaRelatorio } = useRelatorio();
  return (
      <>
          <Titulo
              titulo={'Relatório de Apoios'}
              subtitulo={'Veja a lista de ideias que já receberam apoio'}
          />
          <TableContainer 
            component={Paper}
            sx={{maxWidth: 830, marginX: 'auto', padding: {xs: 3, md: 5} }}
            >
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Ideia</TableCell>
                          <TableCell>E-mail</TableCell>
                          <TableCell align={'right'}>Valor</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {listaRelatorio.map((relatorio) => (
                          <TableRow key={relatorio.id}>
                            <TableCell>{relatorio.idea.nome}</TableCell>
                            <TableCell>{relatorio.email}</TableCell>
                            <TableCell align={'right'}>{relatorio.valor}</TableCell>
                        </TableRow>
                      ))}
                      
                  </TableBody>
              </Table>

          </TableContainer>
      </>
  )
}

export default Relatorio;