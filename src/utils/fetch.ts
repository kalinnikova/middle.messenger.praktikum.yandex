enum METHOD {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
};

type Options = {
    method: METHOD;
    data?: any;
    headers?: {};
    timeout?: number;
};

export class HTTPTransport {
    get (url: string, options: Options): Promise<XMLHttpRequest> {
        return this.request(url, {...options, method: METHOD.GET}, options.timeout);
    };

    post (url: string, options: Options): Promise<XMLHttpRequest> {
        return this.request(url, {...options, method: METHOD.POST}, options.timeout);
    };

    put (url: string, options: Options): Promise<XMLHttpRequest> {
        return this.request(url, {...options, method: METHOD.PUT}, options.timeout);
    };

    patch (url: string, options: Options): Promise<XMLHttpRequest> {
        return this.request(url, {...options, method: METHOD.PATCH}, options.timeout);
    };

    delete (url: string, options: Options): Promise<XMLHttpRequest> {
        return this.request(url, {...options, method: METHOD.DELETE}, options.timeout);
    };

    request(url: string, options: Options, timeout: number = 5000): Promise<XMLHttpRequest> {
        const { method, data, headers } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
            xhr.timeout = timeout;

            xhr.open(method, url);

            if (headers) {
                Object.keys(headers).forEach(key => {
                    xhr.setRequestHeader(key, headers[key]);
                });
            }

            xhr.onload = function() {
                resolve(xhr);
            };

            if (method === METHOD.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}
