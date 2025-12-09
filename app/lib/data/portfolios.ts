export interface PortfolioProject {
  title: string;           // サイトタイトル
  description: string;     // 簡単な説明
  url: string;             // サイトURL
  githubUrl?: string;      // GitHub リポジトリ（任意)
  technology: string[];    // 使用技術 (例: ['Next.js', 'Go', 'AWS'])
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'ポートフォリオサイト',
    description: 'Next.js での静的サイト構築と、コンポーネント分割の学習を兼ねて作成。Gemini といったAIを使用してNext.js 未経験から作成した。',
    url: '/', // 自分のサイトURL
    githubUrl:'https://github.com/AbeTakaki/abetakaki.github.io',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'TODO管理アプリ',
    description: 'Reactの学習に作成した簡易Todoアプリ。ローカルストレージにデータを保存。AWS Amplify にて公開している。ベーシック認証は takaki / checkcheck でログイン可能',
    url: 'https://www.todo.udemystudyaw.com/',
    githubUrl:'https://github.com/AbeTakaki/react-todo-app',
    technology: ['React', 'AWS'],
  },
  // 今後増えるポートフォリオは、この配列に追加する
];