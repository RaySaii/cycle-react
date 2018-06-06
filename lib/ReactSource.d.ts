/// <reference types="react" />
import { Stream } from 'xstream';
import { ReactElement } from 'react';
import { DocumentDOMSource } from './DocumentDOMSource';
export interface ReactSource {
    select(selector: string): ReactSource;
    events(eventType: string): Stream<any>;
}
export declare class MainReactSource implements ReactSource {
    private scope?;
    private selector;
    constructor(selector?: string, scope?: string);
    private getNamespacedSelector();
    select(selector: string): DocumentDOMSource;
    events(eventType: string): Stream<any>;
    isolateSource(source: ReactSource, namespace: string): ReactSource;
    isolateSink(sink: Stream<ReactElement<any>>, namespace: string): Stream<ReactElement<any>>;
}
