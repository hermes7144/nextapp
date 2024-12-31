type Props = {
  params: {
    slug: string
  }
}

import styles from './products.module.css'

export default function Page({params}: Props) {
  
  return (
    <h1>{params.slug} 제품설명페이지</h1>
  );
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map(product => ({
    slug:product,
  }))
}