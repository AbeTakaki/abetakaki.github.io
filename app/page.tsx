import Hero from './components/Hero';
import Career from './components/Career';
import Skills from './components/Skills';
import Articles from './components/Articles';
// ... 他のセクションもインポート

export default function Home() {
  return (
    // <main> タグで全体を囲みます
    // className="..." はTailwind CSSの記法です
    // max-w-3xl でPCでも幅が広がりすぎないように調整
    // mx-auto で中央寄せ
    <main className="max-w-3xl mx-auto p-4 md:p-8">
      
      {/* 1. ヒーローセクション（名前や肩書き） */}
      <Hero />
      
      {/* 2. 経歴セクション */}
      <Career />
      
      {/* 3. スキルセクション */}
      <Skills />
      
      {/* 4. 記事セクション */}
      <Articles />

      {/* ... 他のセクションも同様に配置 */}
      
    </main>
  );
}