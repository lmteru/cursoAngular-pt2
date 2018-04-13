export interface Musica{
    nome?: string;
    album?: string;
    id?: number;
    banda?: string;
    genero?: string;
}

export interface Musico{
    nome?:string;
    dataNascimento?:string;
    musica?:Musica;
}