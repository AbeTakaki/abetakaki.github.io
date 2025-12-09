import { PortfolioProject } from '../lib/data/portfolios';
import GitHubIcon from './GitHubIcon';

export default function PortfolioCard({ title, description, url, githubUrl, technology }: PortfolioProject) {
  return (
    <div 
      className="block border border-gray-200 rounded-xl shadow-md p-5 bg-white
                 transition-all duration-300 ease-in-out
                 hover:shadow-lg hover:-translate-y-1"
    >
      
      <div className="flex items-center justify-between mb-2">
        {/* タイトル（デモサイトへのリンク） */}
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xl font-extrabold text-gray-800 hover:text-blue-600 transition-colors"
        >
          {title}
        </a>
        
        {/* GitHubリポジトリへのリンク (アイコン) */}
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 hover:text-blue-600 transition-colors p-1 ml-4 shrink-0"
          >
            <GitHubIcon 
              size={24} // サイズはデフォルトの24を使ってもOK
              className="text-gray-700 hover:text-blue-600" // アイコンの色とホバー効果をaタグから継承
            />
          </a>
        )}
      </div>
      
      {/* 説明文 (タイトル/アイコンの下) */}
      <p className="text-gray-600 mb-4 text-sm">
        {description}
      </p>

      {/* 使用技術 */}
      <div className="pt-3 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-400 mb-1">使用技術:</p>
        
        <div className="flex flex-wrap gap-2">
          {technology.map((tech) => (
            <span 
              key={tech} 
              className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}