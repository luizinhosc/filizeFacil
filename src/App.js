import "./App.css";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import imagemInicial from "./images/front.pt-br.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0} >
        <Grid item xs={12}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center">
              Fidelize Fácil
            </Typography>
          </Container>
        </Grid>
        <Grid container spacing={8} >
          <Grid item xs={12} align="center">
            <img src={imagemInicial} alt="imagem inicial" />
          </Grid>
          <Grid item xs={6} align="right">
            <Button size="large" variant="contained" color="secondary">
              Entrar
            </Button>
          </Grid>
          <Grid item xs={6} align="left">
            <Button size="large" variant="outlined" color="secondary">
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
