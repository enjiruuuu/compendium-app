import { useEffect, useState } from 'react';
import { AnimalsApi, IAnimalsApiResponse } from '../api/animalsApi';
import { ISighting, ISightingsApiResponse, SightingsApi } from '../api/sightingsApi';
import Card from '../components/Card';
import '../styles/Home.scss';

const Home = () => {
    const [animals, setAnimals] = useState<IAnimalsApiResponse[]>([]);
    const [sightings, setSightings] = useState<ISighting>({});

    const animalsApi: AnimalsApi = new AnimalsApi();
    const sightingsApi: SightingsApi = new SightingsApi();

    // TODO: implement caching so that animals api doesn't have to be fetched everytime user navigates back to Home
    useEffect(() => {
        animalsApi.fetchDefaultAnimals().then((res) => {
            setAnimals(res);
        });

        // TODO: replace when user login is implemented
        sightingsApi.fetchSightingsForUsers("123456").then((res: ISightingsApiResponse[]) => {
            setSightings(res[0].sightings);
        });
    }, [])

    const seenAnimals = new Set(Object.keys(sightings));

    return <div className="app-home">
        {
            animals?.map((animal: IAnimalsApiResponse) => {
                const seen: boolean = seenAnimals.has(animal.key);
                return <Card animal={animal} id={animal.key} seen={seen} seenData={sightings[animal.key]} key={animal.key} />;
            })
        }
    </div>;
};

export default Home;