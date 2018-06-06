/// <reference types="react" />
import { Stream } from 'xstream';
import { ReactElement } from 'react';
import { ReactSource } from './ReactSource';
export declare type Driver = (vtree$: Stream<ReactElement<any>>) => ReactSource;
export declare function makeReactDriver(element: string | Element): Driver;
