import Image from 'next/image'
import os from 'os';
import Counter from './Components/Counter';

export default function Home() {
  console.log('안녕! - 서버');
  return (
    <>
    <h1>홈</h1>
    <Counter/>
    </>
  )
}
