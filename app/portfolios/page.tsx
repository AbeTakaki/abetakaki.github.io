import PortfolioCard from '../components/PortfolioCard';
import { portfolioProjects } from '../lib/data/portfolios';

// メタデータの設定 (タイトルなど)
export const metadata = {
  title: 'ポートフォリオ一覧',
};

export default function PortfolioListPage() {
  return (
    <main className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 border-b pb-2">制作物一覧</h1>

      {/* Gridレイアウトでカードを並べる */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioProjects.map((project) => (
          // データを展開して PortfolioCard に渡す
          <PortfolioCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
}