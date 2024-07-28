import { ISeen } from "./ISeen";

export interface IAnimal {
    uiName: string;
    thumbnail: string;
    description: string;
}

export interface IAnimalMeta extends IAnimal, ISeen {
    seen: boolean;
    id: string;
}