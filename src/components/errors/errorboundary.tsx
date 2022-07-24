import { Component, ErrorInfo, ReactNode } from 'react';

import * as Sentry from '@sentry/react';
import GenericError from 'components/errors/generic.error';
import {Scope} from '@sentry/react';

interface ErrorStateInterface {
  hasError: boolean;
}

interface PropsInterface {
  children: ReactNode;
}

export class ErrorBoundary extends Component<PropsInterface, ErrorStateInterface> {
  constructor(props: PropsInterface) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ hasError: true });

    Sentry.withScope((scope: Scope) => {
      Object.keys(info).forEach((key) => {
        scope.setExtra(key, info.componentStack);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <GenericError />
        </>
      );
    }
    return this.props.children;
  }
}
