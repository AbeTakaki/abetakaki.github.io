import React from 'react';

// このコンポーネントが受け取る情報（Props）を定義
interface Props {
  title: string; // "Career" や "Skills" などの見出し
  children: React.ReactNode; // セクションの中身（タイムラインやリストなど）
}

export default function Section({ title, children }: Props) {
  return (
    // <section> タグで囲み、my-8 でセクション間の余白を空ける
    <section className="my-8">
      {/* セクションタイトル */}
      <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2">
        {title}
      </h2>
      
      {/* このコンポーネントで囲んだ「中身」がここに入る */}
      <div>
        {children}
      </div>
    </section>
  );
}