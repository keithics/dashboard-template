import { ReactNode } from 'react';
import { useAppSelector } from 'rtk/hooks';
import { selectRequest } from 'request/request.slice';

interface RequestContainerInterface {
  children: ReactNode;
  fallback: ReactNode;
  loading?: boolean;
}

/**
 *
 * @param children -  children components
 * @param fallback - component fallback when request is loading
 * @returns - returns children or fallback
 */
const RequestContainer = ({ children, fallback, loading }: RequestContainerInterface) => {
  let { isLoading } = useAppSelector(selectRequest);
  isLoading = loading ?? isLoading;

  return <>{isLoading ? fallback : children}</>;
};

export default RequestContainer;
