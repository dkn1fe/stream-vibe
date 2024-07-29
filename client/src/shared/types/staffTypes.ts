export interface StaffInfoTypes {
    staffId:number | undefined
    posterUrl: string;
    nameRu: string;
    nameEn: string;
    profession: string;
    growth: number;
    birthday: string;
    birthplace: string;
    films: Film[];
    age: number;
}

export interface Film {
    filmId: number;
    nameRu: string;
    nameEn: string;
    rating: string;
    general: boolean;
    description: string;
    professionKey: string;
    kinopoiskId:number
}