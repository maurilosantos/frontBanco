import { useState } from 'react';
import { Button, TextField, Stack, Typography } from '@mui/material';
import axios from 'axios';


function App() {
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [nomeOperador, setNomeOperador] = useState('');

  const handleDataInicioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataInicio(event.target.value);
  };

  const handleDataFimChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataFim(event.target.value);
  };

  const handleNomeOperadorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomeOperador(event.target.value);
  };

  const handleSearch = () => {
    const apiUrl = 'http://localhost:8080/extrato';

    const params = {
      numeroConta: null, 
      dataInicio,
      dataFim,
      nomeResponsavel: null,
    };
  
    axios.get(apiUrl, { params })
      .then((response) => {
        const extrato = response.data;
        
      })
      .catch((error) => {
        // Tratamento de erros
        console.error(error);
      });
  };

  return (
    <div className="App">
      
      <Stack spacing={2} direction="row">
      <Typography>Data De Início: </Typography>
        <TextField
          type="date"
          value={dataInicio}
          onChange={handleDataInicioChange}
        />
        <Typography>Data De Fim: </Typography>
        <TextField
         
          type="date"
          value={dataFim}
          onChange={handleDataFimChange}
        />
        <TextField
          label="Nome do operador"
          value={nomeOperador}
          onChange={handleNomeOperadorChange}
        />
        <Button variant="contained" onClick={handleSearch}>Pesquisar</Button>
      </Stack>
    </div>
  );
}

export default App;
