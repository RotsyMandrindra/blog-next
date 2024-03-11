import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../component/header';
import Footer from '../component/footer';

export default function Home() {
 const blogs = [
    { id: 1, title: 'Blog 1' },
    { id: 2, title: 'Blog 2' },
    { id: 3, title: 'Blog 3' },
    { id: 4, title: 'Blog 4' },
    { id: 5, title: 'Blog 5' },
    { id: 6, title: 'Blog 6' },
    { id: 7, title: 'Blog 7' },
    { id: 8, title: 'Blog 8' },
    { id: 9, title: 'Blog 9' },
    { id: 10, title: 'Blog 10' }
 ];

 return (
    <>
      <div>
        <h1>Blog list</h1>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
 );
}
