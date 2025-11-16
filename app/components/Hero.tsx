export default function Hero() {
  return (
    // text-center で中央揃え、my-12 で上下に大きな余白
    <section className="text-center my-12">
      <h1 className="text-4xl font-bold">あなたの名前 (Your Name)</h1>
      <p className="text-xl text-gray-600 mt-2">
        バックエンドエンジニア (Backend Engineer)
      </p>
      {/* SNSリンクなどもここに配置 */}
    </section>
  );
}