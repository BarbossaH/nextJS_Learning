import styles from './styles.module.css';

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>About Navbar</nav>
      <main>{children}</main>
      {/* <main className={styles.main}>{children}</main> */}
    </>
  );
}
