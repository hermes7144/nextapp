import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';
import MeowArticle from '../Components/MeowArticle';
import Image from 'next/image';
import clothesImage from '../../../public/images/clothes.jpg'

 export default async function ProductsPage() {
  const products = await getProducts();

  return <div>
    <div>제품 소개 페이지</div>
    <Image src={clothesImage} alt='clothes' />
    <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
  </div>;
}