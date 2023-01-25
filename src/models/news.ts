export interface News{

status: string;
totalResults: number;
articles: Article[];

}

export interface Article{

    source: Source;
    author: string;
    title: string;
    descrition: string;
    url: string;
    urlToImage: string;
    publocshedAt: string;

}

export interface Source{
    id: string;
    name: string;
}


