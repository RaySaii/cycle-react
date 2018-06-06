/// <reference types="react" />
import React, { ReactElement } from 'react';
export { ReactElement };
export declare type PropsExtensions = {
    selector?: string;
    className?: string;
    _elementType?: React.ComponentClass<any> | string;
};
export declare function h<P>(type: React.ComponentClass<P> | string, props?: (P & PropsExtensions) | string | Array<React.ReactElement<any>>, ...children: Array<React.ReactElement<any>>): React.ReactElement<P>;
