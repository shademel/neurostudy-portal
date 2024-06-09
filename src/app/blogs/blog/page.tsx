import React from 'react';
import styles from './blog.module.css';
import blogData from '../blogData.json';
import Typography, {
  TypographyVariant,
} from '../../components/typography/Typography';
import TextHeavyBlog from '../../components/textHeavyBlog/textHeavyBlog';
import BlogList from '@/app/components/blogList/blogList';
import DisplayPodcast from '@/app/components/podcast/DisplayPodcast';
import { MetadataProps } from '@/app/interfaces/MetadataProps';
import { Metadata } from 'next';

export async function generateMetadata({
  searchParams,
}: MetadataProps): Promise<Metadata> {
  const blogId = searchParams.blogId;
  const { blogs } = blogData;
  const blog = blogs.find(({ id }) => id === blogId);

  if (!blog) {
    return {};
  }

  const { title, imageUrl, description } = blog;
  // NOTE
  // Previous `type` was 'blog', which the `openGraph` attribute doesn't accept as `type`
  const type = 'article';
  const url = `https://neurodiversityacademy.com/blogs/blog?blogId=${blogId}`;

  return {
    title,
    description,
    openGraph: {
      title,
      images: [imageUrl],
      type,
      description,
      url,
    },
  };
}

export default function OneBlog({ searchParams }: MetadataProps) {
  const blogId = searchParams.blogId;
  const { blogs } = blogData;
  const blog = blogs.find(({ id }) => id === blogId);

  if (!blog) {
    return (
      <Typography variant={TypographyVariant.H1}>Blog not found</Typography>
    );
  }

  return (
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
  );
}
