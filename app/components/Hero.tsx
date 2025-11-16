import Image from 'next/image'

export default function Hero() {
  return (
    // text-center で中央揃え、my-12 で上下に大きな余白
    <section className="text-center my-12">
      <div className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
        <div className="w-40 h-40 overflow-hidden border border-gray-200 rounded-full shadow-xl">
          <Image
            src="/profile/profile.jpg"
            alt="Abe Takaki"
            width={160}
            height={160}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <h2 className="mt-4 text-xl font-bold">アベ タカキ (Abe Takaki)</h2>
        <p className="mt-2 text-sm font-medium text-gray-600">Backend Engineer</p>
        {/* SNSリンクなどもここに配置 */}
      </div>
    </section>
  );
}