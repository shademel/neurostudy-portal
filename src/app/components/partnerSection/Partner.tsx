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
import InclusiveChange from '../../images/logo_inclusive_change.svg';
import GritNFlow from '../../images/logo_grit_and_flow.svg';
import TechDiversity from '../../images/logo_tech_diversity.svg';
import Unify360 from '../../images/logo_unify360.svg';

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
              <a href='https://inc-change.com/' target='_blank'>
                <Image
                  src={InclusiveChange}
                  alt='Inclusive Change'
                  title='Inclusive Change'
                />
              </a>
            </div>
            <div className={styles.embla__slide}>
              <a href='https://www.gritandflow.com/' target='_blank'>
                <Image
                  src={GritNFlow}
                  alt='Grit and Flow'
                  title='Grit and Flow'
                />
              </a>
            </div>
            <div className={styles.embla__slide}>
              <a href='https://tech-diversity.com.au/' target='_blank'>
                <Image
                  src={TechDiversity}
                  alt='Tech Diversity'
                  title='Tech Diversity'
                />
              </a>
            </div>
            <div className={styles.embla__slide}>
              <a href='https://unify360.com.au/' target='_blank'>
                <Image
                  src={Unify360}
                  alt='Unify 360'
                  title='Unify 360'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
