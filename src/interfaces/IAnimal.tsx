export interface IAnimal {
    uiName: string;
    thumbnail: string;
    description: string;
}

export interface IAnimalMeta extends IAnimal {
    seen: boolean;
    id: string;
}