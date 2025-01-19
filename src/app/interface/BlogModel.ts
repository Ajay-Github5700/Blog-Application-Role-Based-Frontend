export interface BlogModel {
    _id: string;
    author: string;
    title: string;
    description: string;
    image: string;
    approved?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface BlogResponse{
    page:number;
    limit:number;
    totalPages:number;
    totalblogs:number;
    blogs:[BlogModel]
}