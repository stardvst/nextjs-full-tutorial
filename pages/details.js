import Link from 'next/link';

const people = [
  { v: 'car', name: 'bruno' },
  { v: 'bike', name: 'bjohn' },
  { v: 'airplane', name: 'mick' },
];

export default function details() {
  return (
    <div>
      {people.map(e => (
        <div key={e.name}>
          <Link href={`/${e.v}/${e.name}`}>
            <a>
              Navigate to {e.name}&apos;s {e.v}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
