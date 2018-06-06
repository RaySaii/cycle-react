/// <reference types="react" />
import * as React from 'react';
export declare type EventableProps = {
    scope?: string;
    selector?: string;
    _elementType?: React.ComponentClass<any>;
};
export declare class Eventable extends React.Component<EventableProps> {
    private _elementType;
    private mappedProps;
    private incorporateHandlers;
    constructor(props: EventableProps);
    render(): React.ReactNode;
}
