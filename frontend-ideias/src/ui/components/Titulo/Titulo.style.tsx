import { styled } from "@mui/system";

export const TituloStyled = styled('h1')`
  font-size: 28px;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const Subtitulo = styled('h2')`
  font-size: 18px;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  font-weight: normal;
  color: ${({ theme }) => theme.palette.text.secondary };
`;