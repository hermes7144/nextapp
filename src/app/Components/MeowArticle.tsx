'use client';
import React, { useEffect, useState } from 'react';

export default function MeowArticle() {
  const [text, setText] = useState('데이터 준비중..');
 
  useEffect(() => {
    async function meowFact() {
      const res = await fetch('https://meowfacts.herokuapp.com');
    
      const data = await res.json();
      const factText = data.data[0];

      setText(factText)
    }
    meowFact()
  },[])

  return <article>{text}</article>;
}
