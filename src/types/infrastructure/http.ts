export type HttpMethod = 'post' | 'get' | 'delete' | 'put';
export enum HTTPStatusCode {
    OK = 200,
    BAD_REQUEST = 400
};

export type HttpRequest = {
    data: any;
}

export type HttpResponse<T = any > = {
    data?: T;
    // erro?:T;
    statusCode: HTTPStatusCode;
}

export type HttpClient <R = any> = {
    get: (
        // path:string,
        data?:any,
    )=> Promise<HttpResponse<R>>
    post: (
        data:any
    )=> Promise<HttpResponse<R>>
    put: (
        data:any,
    )=> Promise<HttpResponse<R>>
    delete: (
        data: any
    )=> Promise<HttpResponse<R>>
}