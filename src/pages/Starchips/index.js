import CardComponent from '../../components/StarchipsCardComponents';
import { useHistory } from 'react-router-dom';

import './styles.css';

function Starships() {
  let history = useHistory();

  return (
    <div className="ssContainer">
      <div className="ssTitle">
        <img src="https://i.imgur.com/BJ5o9QE.png" alt="Starchips" />
      </div>
      <div
        onMouseUp={() => {
          console.log('click');
          history.push('/');
        }}
        className="ssBackButton"
      >
        <img src="https://i.imgur.com/HyS096F.png" alt="backButton" />
      </div>
      <div className="ssCardContainer">
        <CardComponent />
      </div>
    </div>
  );
}
export default Starships;
