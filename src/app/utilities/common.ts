import { Metadata } from 'next';
import { MetadataKeyValuePair } from '../interfaces/MetadataProps';
import { metadata } from './metadata/metadata';
import { LANGUAGES, LOCALE, META_TYPE, SITE_NAME } from './constants';

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

export const createMetadata = ({ key, params }: MetadataKeyValuePair) => {
  let { title, description, keywords, canonical, type, images } = metadata[key];

  //extend with metadataParams
  title += title ? ` | ${params?.title || ''}` : params?.title || '';

  description += description
    ? ` | ${params?.description || ''}`
    : params?.description || '';

  keywords += keywords
    ? ` | ${params?.keywords || ''}`
    : params?.keywords || '';

  canonical += canonical
    ? ` | ${params?.canonical || ''}`
    : params?.canonical || '';

  type = params?.type || META_TYPE.WEBSITE;

  images = images.concat(...(params?.images || []));

  const metadataObj: Metadata = {
    title,
    keywords,
    description,
    alternates: {
      canonical,
      languages: LANGUAGES,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images,
      type,
      siteName: SITE_NAME,
      locale: LOCALE,
    },
  };

  return metadataObj;
};
