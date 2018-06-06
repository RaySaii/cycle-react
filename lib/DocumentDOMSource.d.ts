import { Stream } from 'xstream';
import { ReactSource } from './ReactSource';
export declare class DocumentDOMSource implements ReactSource {
    constructor();
    select(selector: string): DocumentDOMSource;
    events(eventType: string): Stream<Event>;
}
