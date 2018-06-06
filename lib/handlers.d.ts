export declare type HandlersPerSelector = {
    [selector: string]: Handlers;
};
export declare type Handlers = {
    [eventType: string]: any;
};
export declare function getHandlers(selector: string): Handlers;
export declare function getHandler(selector: string, eventType: string): any;
