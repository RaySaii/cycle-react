import xs, {Stream} from 'xstream';
import {adapt} from "@cycle/run/lib/adapt";
import {Observable, Subject} from "rxjs";

export type HandlersPerSelector = {
    [selector: string]: Handlers
};

export type Handlers = {
    [eventType: string]: any
}

const handlers: HandlersPerSelector = {};

export function getHandlers(selector: string): Handlers {
    handlers[selector] = handlers[selector] || {};
    return handlers[selector];
}

export function getHandler(selector: string, eventType: string): any {
    handlers[selector] = handlers[selector] || {};
    handlers[selector][eventType] = handlers[selector][eventType] || new Subject() || xs.create();
    return adapt(handlers[selector][eventType]);
}
