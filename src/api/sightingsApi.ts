import Constants from "./constants";

export interface ISightingData {
    locations: string[];
    gallery?: string[];
}

export interface ISighting {
    [key: string]: ISightingData;
}

export interface ISightingsApiResponse {
    userid: string;
    sightings: ISighting;
}

export class SightingsApi {
    constructor() { }

    private readonly url = `${Constants.API_URL}sightings`;

    public async fetchSightingsForUsers(userId: string): Promise<ISightingsApiResponse[]> {
        const response = await fetch(`${this.url}/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data: ISightingsApiResponse[] = await response.json();
        return data;
    }
}