import Card from '../components/Card';
import '../styles/Home.scss';

const Home = () => {
    const animals = require('../data/animals.json');
    const seen = require('../data/seen.json');
    const seenAnimals = new Set(Object.keys(seen));

    return <div className="app-home">
        {Object.keys(animals).map((key) => {
            const isSeen: boolean = (seenAnimals.has(key)) ? true : false;
            return <Card animal={animals[key]} id={key} seen={isSeen} seenData={seen[key]} key={key} />
        })}
    </div>;
};

export default Home;