import Link from 'next/link';

export default function About() {
  // throw new Error('Not today');
  return (
    <main>
      <h3>About</h3>
      <Link href={'/'}>Link to Home Page</Link>
    </main>
  );
}
