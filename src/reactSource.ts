import xs, { Stream } from 'xstream';
import { createElement, ReactElement } from 'react';
import { getHandler } from './handlers';
import { ScopeProvider } from './contextProvider';
import { DocumentDOMSource } from './DocumentDOMSource';

export interface ReactSource {
    select(selector: string): ReactSource;
    events(eventType: string): Stream<any>
}

export class MainReactSource implements ReactSource {
  private scope?: string;
  private selector: string;

  constructor(selector?: string, scope?: string) {
    this.scope = scope;
    this.selector = selector || '';
  }

  private getNamespacedSelector(): string {
    return this.scope ? `${this.selector}_${this.scope}` : this.selector;
  }

  public select(selector: string): DocumentDOMSource;
  public select(selector: string): ReactSource {
    if (selector === 'document') {
      return new DocumentDOMSource();
    } else {
      return new MainReactSource(selector, this.scope);
    }
  }

  public events(eventType: string): Stream<any> {
    if (!this.selector.length) {
      return xs.empty();
    } else {
      return getHandler(this.getNamespacedSelector(), eventType);
    }
  }

  public isolateSource(source: ReactSource, namespace: string): ReactSource {
    return new MainReactSource(this.selector, namespace);
  }

  public isolateSink(sink: Stream<ReactElement<any>>, namespace: string): Stream<ReactElement<any>> {
    return sink.map(vtree =>
      createElement(ScopeProvider, { value: namespace }, vtree)
    )
  }
}
