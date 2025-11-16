import Section from './Section';

// 記事データ（後述のデータ管理を参照）
const articles = [
  { title: 'すごいAPIの作り方', date: '2024/10/20', source: 'Qiita', url: '#' },
  { title: 'ポートフォリオ作成日記', date: '2024/09/15', source: 'Blog', url: '#' },
];

export default function Articles() {
  return (
    <Section title="Articles">
      <div className="space-y-4">
        {articles.map((article, index) => (
          <a 
            key={index} 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-center mb-1">
              <span className={`text-sm font-bold ${
                article.source === 'Qiita' ? 'text-green-600' : 'text-blue-600'
              }`}>
                {article.source}
              </span>
              <span className="text-sm text-gray-500">{article.date}</span>
            </div>
            <h3 className="text-md font-semibold">{article.title}</h3>
          </a>
        ))}
      </div>
    </Section>
  );
}