import { PortfolioProject } from '../lib/data/portfolios';

export default function PortfolioCard({ title, description, url, technology }: PortfolioProject) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block border border-gray-200 rounded-xl shadow-md p-5 bg-white
                 transition-all duration-300 ease-in-out
                 hover:shadow-lg hover:-translate-y-1"
    >
      
      {/* タイトル部分 */}
      <h2 className="text-xl font-extrabold mb-2 text-gray-800">
        {title}
      </h2>
      
      {/* 説明文*/}
      <p className="text-gray-600 mb-4 text-sm">
        {description}
      </p>
      
      {/* 使用技術 */}
      <div className="pt-3 mt-auto border-t border-gray-100">
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
    </a>
  );
}