import { useState } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  const [cards, setCards] = useState<string[]>(['ピカチュウ', 'リザードン']);
  const [cardName, setCardName] = useState('');

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: '#EF6C00',
  //     },
  //     background: {
  //       default: '#FFF3E0',
  //       paper: '#FFE0B2',
  //     },
  //   },
  // });
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="ポケモンカード名を入力"
            variant="outlined"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              if (cardName.trim() === '') return; // 空白のときは追加しない
              setCards([...cards, cardName]);     // 既存のリストに新しいカードを追加
              setCardName('');                    // 入力欄をリセット
            }}
          >
            カードを追加
          </Button>
          <List sx={{ mt: 2, width: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}>
            {cards.map((name, index) => (
              <ListItem key={index} disablePadding>
                <Card sx={{ width: '100%', boxShadow: 2, bgcolor: 'background.paper' }}>
                  <CardContent>
                    <ListItemText primary={name} />
                  </CardContent>
                </Card>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;