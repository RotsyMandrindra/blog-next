'use client'

import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../component/header';
import Footer from '../component/footer';

export default function BlogPost({params} : { params : { id: number }}) {
 const router = useRouter();
 const blog = blogList.find((val) => params.id == val.id ? val : null);
 const link = `/blog/${blog?.id}/image`
 const { id } = router.query;

 return (
    <>
      <Header />
      <main>
        <h1>Blog-{id}</h1>
        <Link href={`/blog/${id}/image`}>Voir l'image</Link>
      </main>
      <Footer />
    </>
 );
}
