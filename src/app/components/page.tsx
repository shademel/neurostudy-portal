'use client';
import CardList from './article/card';
import ButtonDisplay from './buttons/ButtonDisplay';
import DisplayPodcast from './podcast/DisplayPodcast';
import Example from './typography/Example';
import styles from '../page.module.css';
import BadgeDisplay from './badges/BadgeDisplay';
import Typography, { TypographyVariant } from './typography/Typography';
import { useState, ChangeEvent } from 'react';
import Textbox, { TextboxVariant } from './textbox/Textbox';

export default function Components() {
  const [name, setName] = useState('');

  return (
    <main className={styles.main}>
      <Typography variant={TypographyVariant.H1}>Components</Typography>
      <Typography variant={TypographyVariant.H2}>
        Background & Badges
      </Typography>
      <BadgeDisplay />
      <div className={styles.border}>
        <Typography variant={TypographyVariant.H2}>Buttons</Typography>
        <ButtonDisplay />
      </div>{' '}
      <div className={styles.border}>
        <div>
          <Typography variant={TypographyVariant.H2}>Text</Typography>
        </div>
        <br />
        <Example />
      </div>
      <div>
        <Typography variant={TypographyVariant.H2}>
          Cards/Articles/Blog posts
        </Typography>
        <CardList />
      </div>
      <div className={styles.border}>
        <Typography variant={TypographyVariant.H2}>Podcast embed</Typography>
        <DisplayPodcast />
      </div>
      <div className={styles.border}>
        <Typography variant={TypographyVariant.H2}>Textboxes</Typography>
        <Typography variant={TypographyVariant.Body2}>Regular</Typography>
        <Textbox
          name={'Username'}
          label={'Username'}
          type={'text'}
          value={name}
          required={false}
          placeholder={'Name goes here'}
          // errorMessage={'Error'}
          variant={TextboxVariant.REGULAR}
          onChange={function (event: ChangeEvent<HTMLInputElement>): void {
            setName(event.target.value);
          }}
        />
        <Typography variant={TypographyVariant.Body2}>Long</Typography>
        <Textbox
          name={'Username'}
          label={'Username'}
          type={'text'}
          value={name}
          required={false}
          placeholder={'Name goes here'}
          variant={TextboxVariant.LONG}
          onChange={function (event: ChangeEvent<HTMLInputElement>): void {
            setName(event.target.value);
          }}
        />
        <Typography variant={TypographyVariant.Body2}>Longer</Typography>
        <Textbox
          name={'Username'}
          label={'Username'}
          type={'text'}
          value={name}
          required={false}
          placeholder={'Name goes here'}
          variant={TextboxVariant.LONGER}
          onChange={function (event: ChangeEvent<HTMLInputElement>): void {
            setName(event.target.value);
          }}
        />
        <Typography variant={TypographyVariant.Body2}>Longer Error</Typography>
        <Textbox
          name={'Username'}
          label={'Username'}
          type={'text'}
          value={name}
          required={false}
          placeholder={'Name goes here'}
          errorMessage={'Error'}
          variant={TextboxVariant.LONGER}
          onChange={function (event: ChangeEvent<HTMLInputElement>): void {
            setName(event.target.value);
          }}
        />
      </div>
    </main>
  );
}
