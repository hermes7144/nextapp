import styles from './products.module.css';

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <div className={styles.nav}>
          <a href=''>여성옷</a>
          <a href=''>남성옷</a>
        </div>
        <section className={styles.products}>{children}</section>
      </div>
    </>
  );
}

