export interface Post {
    meta: {
        title: string;
        date: string;
        [key: string]: any;
    };
    path: string;
}
