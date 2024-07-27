import Card from '../components/Card';
import '../styles/Home.scss';

const Home = () => {
    const animals = require('../data/animals.json');
    const seen = require('../data/seen.json');
    const seenAnimals = new Set<string>(seen);

    return <div className="app-home">
        {Object.keys(animals).map((key) => {
            const seen: boolean = (seenAnimals.has(key)) ? true : false;
            return <Card animal={animals[key]} id={key} seen={seen} key={key} />
        })}
    </div>;
};

export default Home;