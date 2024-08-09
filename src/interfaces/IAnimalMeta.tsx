import { IAnimalsApiResponse } from "../api/animalsApi";
import { ISightingData } from "../api/sightingsApi";

export interface IAnimalMeta extends IAnimalsApiResponse, ISightingData {
    seen: boolean;
    id: string;
}