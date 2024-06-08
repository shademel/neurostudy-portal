'use client';
import React from 'react';
import styles from './blog.module.css';
import blogData from '../blogData.json';
import { useSearchParams } from 'next/navigation';
import Typography, {
  TypographyVariant,
} from '../../components/typography/Typography';
import TextHeavyBlog from '../../components/textHeavyBlog/textHeavyBlog';
import BlogList from '@/app/components/blogList/blogList';
import DisplayPodcast from '@/app/components/podcast/DisplayPodcast';
import Subscribe from '@/app/components/subscribe/subscribe';

export default function OneBlog() {
  const searchParams = useSearchParams();
  const { blogs } = blogData;
  const blogId = searchParams.get('blogId');
  const blog = blogs.find((blog) => blog.id === blogId);
  if (blog) {
    return (
      <div className={styles.container}>
        <title>{blog.header}</title>
        <meta
          name='keywords'
          content='blog, neurodiversity, neurodiversity academy, neurodivergent mates, neurodivergentmates'
        ></meta>
        <meta name='description' content={blog?.description}></meta>
        <TextHeavyBlog
          id={blog.id}
          header={blog.header}
          imageUrl={blog.imageUrl}
          bodyText={blog.bodyText}
        />{' '}
        <DisplayPodcast
          scriptSrc={blog.scriptSrc}
          containerId={blog.containerId}
          singleBlog={true}
        />
        <BlogList />
        <div className={styles.subscribeContainer}>
          <Subscribe />
        </div>
      </div>
    );
  } else {
    return (
      <Typography variant={TypographyVariant.H1}>Blog not found</Typography>
    );
  }
}
