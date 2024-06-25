import { ReactNode } from 'react';
import styles from './loaderWrapper.module.css';
import Loader from './Loader';
import classNames from 'classnames';

interface LoaderWrapperProps {
  isLoading: boolean;
  children: ReactNode;
  className?: string;
  expandLoaderWidth?: boolean;
}

export default function LoaderWrapper({
  isLoading,
  children,
  className,
  expandLoaderWidth = false,
}: LoaderWrapperProps) {
  return (
    <div className={classNames(styles.container, className)}>
      {children}
      <Loader isLoading={isLoading} expand={expandLoaderWidth} />
    </div>
  );
}
