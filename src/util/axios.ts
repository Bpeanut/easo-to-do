type method = "GET" | "POST" | "PATCH" | "DELETE";
type sendBodyProp = string | Document | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array> | null | undefined;

interface RequestHeaderProp {
    name: string;
    value: string;
}

class xmlHttp {
    constructor() {}
    
    get server() {
        return new XMLHttpRequest();
    }
    get readyState() {
        return this.server.readyState;
    }
    get UNSENT() {
        return this.server.UNSENT;
    }
    get OPENDED() {
        return this.server.OPENED;
    }
    get HEADERS_RECEIVED() {
        return this.server.HEADERS_RECEIVED;
    }
    get LOADING() {
        return this.server.LOADING;
    }
    get DONE() {
        return this.server.DONE;
    }
    open(method: method, url: string) {
        this.server.open(method, url);
    }
    send(body?: sendBodyProp) {
        return this.server.send(body);
    }
    setRequestHeader(name: string, value: string) {
        this.server.setRequestHeader(name, value);
    }
    setMultipleRequestHeader(list: RequestHeaderProp[]) {
        list.forEach(item => {
            this.server.setRequestHeader(item.name, item.value);
        });
    }
    onreadystatechange(): any {
        switch(this.readyState) {
            case this.OPENDED: {
                this.send();
            }
            case this.DONE: {
                return this.server.response;
            }
        }
    }

    async get(url: string, config: object) {
        this.open("GET", url);
        this.server.onreadystatechange = this.onreadystatechange();
    }
    async post(url: string, config: object) {
        this.open("POST", url);
    }
    async patch(url: string, config: object) {
        this.open("PATCH", url);
    }
    async delete() {}
}

export default new xmlHttp();
