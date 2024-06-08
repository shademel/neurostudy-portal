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

export default function OneBlog() {
  const searchParams = useSearchParams();
  const { blogs } = blogData;
  const blogId = searchParams.get('blogId');
  const blog = blogs.find((blog) => blog.id === blogId);
  if (blog) {
    return (
      <>
        <head>
          <title>{blog.header}</title>
          <meta
            name='keywords'
            content='blog, neurodiversity, neurodiversity academy, neurodivergent mates, neurodivergentmates'
          ></meta>
          <meta property='og:title' content={blog.header} />
          <meta property='og:image' content={blog.imageUrl} />
          <meta property='og:type' content='blog' />
          <meta property='og:description' content={blog?.description} />
          <meta
            property='og:url'
            content={`https://neurodiversityacademy.com/blogs/blog?blogId=${blogId}`}
          />
          <meta name='description' content={blog?.description}></meta>
        </head>
        <div className={styles.container}>
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
        </div>
      </>
    );
  } else {
    return (
      <Typography variant={TypographyVariant.H1}>Blog not found</Typography>
    );
  }
}
