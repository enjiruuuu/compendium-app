import Constants from "./constants";

export interface IAnimalsApiResponse {
    key: string;
    uiName: string;
    thumbnail: string;
    description: string;
}

export class AnimalsApi {
    constructor() { }

    private readonly url = Constants.API_URL + 'animals/';

    public async fetchDefaultAnimals(): Promise<IAnimalsApiResponse[]> {
        const response = await fetch(this.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data: IAnimalsApiResponse[] = await response.json();
        return data;
    }
}