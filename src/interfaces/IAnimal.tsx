import { IAnimalsApiResponse } from "../api/animalsApi";
import { ISeen } from "./ISeen";

export interface IAnimalMeta extends IAnimalsApiResponse, ISeen {
    seen: boolean;
    id: string;
}