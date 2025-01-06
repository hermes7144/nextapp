import Image from 'next/image'
import os from 'os';
import Counter from './Components/Counter';

export default function Home() {
  console.log('안녕! - 서버');
  return (
    <>
    <h1>홈</h1>
    <Counter/>
    <Image src='https://images.unsplash.com/photo-1441986300917-64674bd600d8' alt='shop' height={400} width={400} priority />
    </>
  )
}
