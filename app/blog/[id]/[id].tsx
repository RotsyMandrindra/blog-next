'use client'

import { useRouter } from 'next/router';
import Link from 'next/link';

export default function BlogPost() {
 const router = useRouter();
 const { id } = router.query;

 return (
    <div>
      <h1>Blog-{id}</h1>
      <Link href={`/blog/${id}/image`}>See picture</Link>
    </div>
 );
}
