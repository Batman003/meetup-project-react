import {Route,Routes} from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favourites from './pages/Favourites';
import MainNavigation from './components/layout/MainNavigation';
import classes from './components/layout/Layout.module.css'

function App() {
  return (

      <div>
      <MainNavigation />
      <div className={classes.main}>
      <Routes>
          <Route exact path='/' element= { <AllMeetups />}/>
          <Route exact path='/new-meetup' element= { <NewMeetup />} />
          <Route exact path='/favourites' element= {   <Favourites />} />
      </Routes>
      </div>
      </div>
  );
}

export default App;
