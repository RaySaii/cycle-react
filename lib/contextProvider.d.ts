/// <reference types="react" />
import * as React from 'react';
declare module "react" {
    type Provider<T> = React.ComponentType<{
        value: T;
        children?: React.ReactNode;
    }>;
    type Consumer<T> = React.ComponentType<{
        children(value: T): React.ReactNode;
        unstable_observedBits?: number;
    }>;
    interface Context<T> {
        Provider: Provider<T>;
        Consumer: Consumer<T>;
    }
    function createContext<T>(defaultValue: T, calculateChangedBits?: (prev: T, next: T) => number): Context<T>;
}
declare const Provider: React.ComponentType<{
    value: any;
    children?: React.ReactNode;
}>;
export { Provider as ScopeProvider };
export declare const ScopeConsumer: (props: any) => JSX.Element;
