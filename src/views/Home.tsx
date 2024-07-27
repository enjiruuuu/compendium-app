import Card from '../components/Card';
import '../styles/Home.scss';

const Home = () => {
    const animals = require('../data/animals.json');

    return <div className="app-home">
        {Object.keys(animals).map(key => (
            <Card animal={animals[key]} id={key} key={key} />
        ))}
    </div>;
};

export default Home;