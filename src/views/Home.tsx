import Card from '../components/Card';
import { IAnimal } from '../interfaces/IAnimal';

const Home = () => {
    const animals = require('../data/animals.json');

    return <div className="App">
        {Object.keys(animals).map(key => (
            <Card animal={animals[key]} id={key} key={key} />
        ))}
    </div>;
};
  
export default Home;