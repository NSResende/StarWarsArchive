import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Starships from './Starchips';
import StarshipsSheets from './StarchipsSheets';
import Characters from './Characters';
import CharactersSheet from './CharactersSheet';
import Err404 from './Err404';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/starships" component={Starships} />
        <Route path="/characters" component={Characters} />
        <Route path="/starchips-sheets" component={StarshipsSheets} />
        <Route path="/characters-sheets" component={CharactersSheet} />
        <Route path="/*" component={Err404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
