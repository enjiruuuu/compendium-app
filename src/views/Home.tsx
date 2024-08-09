import { useEffect, useState } from 'react';
import { AnimalsApi, IAnimalsApiResponse } from '../api/animalsApi';
import Card from '../components/Card';
import '../styles/Home.scss';

const Home = () => {
    const [animals, setAnimals] = useState<IAnimalsApiResponse[] | null>(null);

    const animalsApi: AnimalsApi = new AnimalsApi();

    // TODO: implement caching so that animals api doesn't have to be fetched everytime user navigates back to Home
    useEffect(() => {
        animalsApi.fetchDefaultAnimals().then((res) => {
            setAnimals(res);
        });
    }, [])

    // const seen = require('../data/seen.json');
    // const seenAnimals = new Set(Object.keys(seen));

    return <div className="app-home">
        {
            animals?.map((animal) => {
                // TODO: make seen dynamic. now it is always false.
                return <Card animal={animal} id={animal.key} seen={false} seenData={null} key={animal.key} />;
            })
        }
    </div>;
};

export default Home;