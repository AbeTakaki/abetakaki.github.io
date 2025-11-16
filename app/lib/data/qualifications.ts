export interface Qualification {
  title: string; // 資格名
  date: string; // 取得日
}

export const qualifications: Qualification[] = [
  {
    title: '基本情報技術者試験',
    date: '2022/10',
  },
  {
    title: '応用情報技術者試験',
    date: '2024/10',
  },
  {
    title: 'AWS認定ソリューションアーキテクト – アソシエイト',
    date: '2025/02',
  },
  {
    title: 'AWS認定sysopsアドミニストレーター – アソシエイト',
    date: '2025/07',
  },
];