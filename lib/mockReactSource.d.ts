import { Stream } from 'xstream';
import { ReactSource } from './reactSource';
export declare type MockConfig = {
    [name: string]: Stream<any> | MockConfig;
};
export declare class MockedReactSource implements ReactSource {
    private mockConfig;
    constructor(mockConfig: MockConfig);
    select(selector: string): MockedReactSource;
    events(eventType: string): Stream<any>;
}
export declare function mockReactSource(mockConfig: MockConfig): MockedReactSource;
