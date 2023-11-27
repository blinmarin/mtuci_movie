export interface LocalStorageData{
    key: string,
    value: Comment[]
}

export interface Comment{
    id: number,
    name: string,
    comment: string
}

export interface CommentariyData{
    data: Commentariy
}

export interface Commentariy{
    comentator_value: string,
    comment_value: string
}