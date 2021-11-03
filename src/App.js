import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddData from './components/funcComponrnt';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/background.jpg"})`,
    backgroundSize: 'cover'
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      {/* <AddData /> */}
        <header className="App-header">
          <AddData />
        </header>
    </div>
  );
}

export default App;
