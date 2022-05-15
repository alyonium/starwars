/* eslint-disable camelcase */
export interface RequestParams {
    page?: string;
    search?: string;
}

export interface TableRowBackend {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

export interface TableBackend {
    count: number;
    next: string;
    previous: string;
    results: TableRowBackend[];
}

export interface TableRowFrontend {
    name: string;
    weight: string;
    height: string;
    sex: string;
    eyeColor: string;
}

export interface TableFrontend {
    count: number;
    tableData: TableRowFrontend[];
}
