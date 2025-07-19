export type Blog = {
    id: string;
    title: string;
    eyecatch?: {
        url: string;
        alt?: string;
    };
}

export type Images = {
    id: string;
    images: {
        url: string;
        alt?: string;
        width: number;
        height: number;
    }
}
