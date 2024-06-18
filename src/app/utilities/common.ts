import { Metadata } from 'next';
import { MetadataParams } from '../interfaces/MetadataProps';
import { LANGUAGES, LOCALE, SITE_NAME } from './constants';

type RegulatorPropFn = (...args: unknown[]) => unknown;

export const debounce = (
  fn: RegulatorPropFn,
  threshold: number = 500,
  context: object | null = null
) => {
  let timer: ReturnType<typeof setTimeout>;
  return function (...args: unknown[]) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, threshold);
  };
};

export const throttle = (
  fn: RegulatorPropFn,
  threshold: number = 500,
  context: object | null = null
) => {
  let last: number = -1,
    timer: ReturnType<typeof setTimeout>;

  return function (...args: unknown[]) {
    const now = Date.now();

    if (last && now < last + threshold) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
};

export const createMetadata = ({
  title,
  keywords,
  description,
  canonicalUrl,
  type,
  images,
}: MetadataParams) => {
  const metadataObj: Metadata = {
    title: title,
    keywords: keywords,
    description: description,
    alternates: {
      canonical: canonicalUrl,
      languages: LANGUAGES,
    },
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      images: [images],
      type: type,
      siteName: SITE_NAME,
      locale: LOCALE,
    },
  };

  return metadataObj;
};
