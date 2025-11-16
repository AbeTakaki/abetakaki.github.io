import Section from './Section'; // 共通部品をインポート

export default function Career() {
  return (
    // 共通部品 Section を使い、title を渡す
    <Section title="Career">
      {/* children（中身）として、経歴のリストを記述 */}
      <ul className="space-y-6">
        {/* 1つの経歴項目 */}
        <li className="pl-4 border-l-4 border-gray-300">
          <h3 className="text-lg font-semibold">会社名A</h3>
          <p className="text-sm text-gray-500">2023.04 - 現在</p>
          <p className="mt-1">
            ここで何をしているかを簡潔に記述します。
          </p>
        </li>
        
        {/* 2つ目の経歴項目 */}
        <li className="pl-4 border-l-4 border-gray-300">
          <h3 className="text-lg font-semibold">会社名B</h3>
          <p className="text-sm text-gray-500">2022.05 - 2022.10</p>
          <p className="mt-1">
            インターンや前職での経験を記述します。
          </p>
        </li>
      </ul>
    </Section>
  );
}