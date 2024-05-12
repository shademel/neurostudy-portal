import React from 'react';
import Blog from './Blog';
import blogData from '../../blogs/blogData.json';
import styles from './blog.module.css';
import { BlogInterface } from '@/app/interfaces/BlogInterface';


const BlogCardList: React.FC = () => {
  const blogs: BlogInterface[] = blogData.blogs;

  return (
    <div className={styles.cardList}>
      {blogs.map(
        (blog: BlogInterface, index: number) =>
          index < 3 && <Blog key={blog.id} {...blog} />
      )}
    </div>
  );
};

export default BlogCardList;
