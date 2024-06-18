import { TYPE } from '../utilities/constants';

export interface MetadataProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface MetadataParams {
  title: string;
  keywords: string;
  description: string;
  canonicalUrl: string;
  type: TYPE;
  images: {
    url: string;
  };
}
