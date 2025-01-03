import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';

 export default async function ProductsPage() {
    // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
    const products = await getProducts();

    
    // 안되는거 같은데 확인 필요
    const res = await fetch('https://meowfacts.herokuapp.com', {
      next: { revalidate: 3},
      // cache:'no-store'
    });
    
    const data = await res.json();
    const factText = data.data[0];
  return <div>
    <div>제품 소개 페이지</div>
    <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <article>{factText}</article>
  </div>;
}