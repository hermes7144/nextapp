import Link from 'next/link';
import styles from './products.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 확인해 보세요',
  icons:{
    icon:'/favicon.ico'
  }
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <div>
        <div className={styles.nav}>
          <a href='/products/women'>여성옷</a>
          <a href='/products/man'>남성옷</a>
        </div>
        <section className={styles.products}>{children}</section>
      </div>
    </>
  );
}

