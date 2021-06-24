import CardComponent from '../../components/ChractersCardComponents';
import { useHistory } from 'react-router-dom';

import './styles.css';

function Characters() {
  let history = useHistory();

  return (
    <div className="ccContainer">
      <div className="ccTitle">
        <img src="https://i.imgur.com/m8XKEPL.png" alt="Characters" />
      </div>
      <div
        onMouseUp={() => {
          console.log('click');
          history.push('/');
        }}
        className="ccBackButton"
      >
        <img src="https://i.imgur.com/HyS096F.png" alt="backButton" />
      </div>
      <div className="ccCardContainer">
        <CardComponent />
      </div>
    </div>
  );
}
export default Characters;
