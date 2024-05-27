'use client';
import React, { useCallback } from 'react';
import Image from 'next/image';
import styles from './partner.module.css';
import Typography, {
  TypographyVariant,
} from '@/app/components/typography/Typography';
import MelbourneUniversity from '../../images/logo_university_of_melbourne.png';
import MonashUniversity from '../../images/logo_monash_university.png';
import ANU from '../../images/logo_ANU.png';
import RMIT from '../../images/logo_RMIT.png';
import SydneyUniversity from '../../images/logo_sydney_university.png';
import UNSW from '../../images/logo_UNSW.png';
import CanberraUniversity from '../../images/logo_university_of_canberra.png';
import LeftArrow from '../../images/arrow_left.png';
import RightArrow from '../../images/arrow_right.png';
import useEmblaCarouse from 'embla-carousel-react';

export default function Partner() {
  const [emblaRef, emblaApi] = useEmblaCarouse({ loop: true, skipSnaps: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <Typography variant={TypographyVariant.H2} color='var(--BondBlack)'>
          Leading Organisations Endorsed by us
        </Typography>
      </div>
      <div className={styles.embla}>
        <div className={styles.button_container}>
          <button onClick={scrollPrev}>
            <Image src={LeftArrow} alt='next item' />
          </button>
          <button onClick={scrollNext}>
            <Image src={RightArrow} alt='next item' />
          </button>
        </div>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={styles.embla__slide}>
              <a href='https://www.unimelb.edu.au/' target='_blank'>
                <Image
                  src={MelbourneUniversity}
                  alt='University of Melbourne'
                  title='University of Melbourne'
                />
              </a>
            </div>
            <div className={styles.embla__slide}>
              <a href='https://www.monash.edu/' target='_blank'>
                <Image
                  src={MonashUniversity}
                  alt='Monash University'
                  title='Monash University'
                />
              </a>
            </div>
            <div className={styles.embla__slide}>
              <a href='https://www.anu.edu.au/' target='_blank'>
                <Image
                  src={ANU}
                  alt='Australian National University'
                  title='Australian National University'
                />
              </a>
            </div>
            <div className={styles.embla__slide}>
              <a href='https://www.rmit.edu.au/' target='_blank'>
                <Image
                  src={RMIT}
                  alt='Royal Melbourne Institute of Technology'
                  title='Royal Melbourne Institute of Technology'
                />
              </a>
            </div>
            <div className={styles.embla__slide}>
              <a href='https://www.sydney.edu.au/' target='_blank'>
                <Image
                  src={SydneyUniversity}
                  alt='University of Sydney'
                  title='University of Sydney'
                />
              </a>
            </div>
            <div className={styles.embla__slide}>
              <a href='https://www.unsw.edu.au/' target='_blank'>
                <Image
                  src={UNSW}
                  alt='University of New South Wales'
                  title='University of New South Wales'
                />
              </a>
            </div>
            <div className={styles.embla__slide}>
              <a href='https://www.canberra.edu.au/' target='_blank'>
                <Image
                  src={CanberraUniversity}
                  alt='University of Canberra'
                  title='University of Canberra'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
