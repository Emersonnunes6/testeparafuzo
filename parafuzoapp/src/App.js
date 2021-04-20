import { MuiThemeProvider } from '@material-ui/core/styles'
import GlobalState from "./globalState/globalState";
import Router from "./routes/router";
import theme from './theme/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <GlobalState>
          <Router/>
      </GlobalState>
    </MuiThemeProvider>
  );
}

export default App;