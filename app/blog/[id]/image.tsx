import { useRouter } from 'next/router';

export default function BlogPostImage() {
 const router = useRouter();
 const { id } = router.query;

 const randomImageUrl = `https://picsum.photos/200/300?random=${id}`;

 return (
    <div>
      <h1>Blog-{id}</h1>
      <img src={randomImageUrl} alt={`Image pour Blog-${id}`} />
    </div>
 );
}
