

export interface Jokes{
    jokes?:JokesRepresentation
}
export interface JokesRepresentation {
    id?: number,
    category?: string,
    joke?: string,
    isFavorite?:  boolean
}