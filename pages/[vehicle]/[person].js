import { useRouter } from 'next/dist/client/router';

export default function Person() {
  const router = useRouter();
  return (
    <h2>
      {router.query.person}&apos;s {router.query.vehicle}
    </h2>
  );
}
