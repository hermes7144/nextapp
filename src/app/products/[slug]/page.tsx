import GoProductButton from '@/app/Components/GoProductButton';
import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {

  return {
    title: `제품의 이름: ${params.slug}`,
  };
}
export default async function ProductPage({ params: {slug} }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    redirect('/products');
  }
  
  return (
    <>
      <h1>{product.name} 제품설명페이지</h1>
      <Image src={`/images/${product.image}`} alt={product.name} width="300" height="300"/>
      <GoProductButton />
      </>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id,
  }));
}
