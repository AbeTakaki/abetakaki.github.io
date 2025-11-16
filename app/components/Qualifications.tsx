import Section from "./Section";
import { qualifications, Qualification } from "../lib/data/qualifications";

function QualificationItem({ title, date}: Qualification) {
  return (
   <div className="flex justify-between items-start py-2 border-b last:border-b-0">
      
      {/* 1. 取得年月（左側）を配置 */}
      <span className="text-sm font-medium text-gray-500 shrink-0 mr-4">
        {date}
      </span>
      
      {/* 2. 資格名と詳細（右側）を配置 */}
      <div className="flex-grow text-left"> 
        <h3 className="text-base font-medium">{title}</h3>
      </div>
      
    </div>
  );
}

export default function Qualifications() {
  return (
    // Section コンポーネントでセクションの枠組みを作成
    <Section title="Qualifications">
      <div className="divide-y divide-gray-100">
        {qualifications.map((qualification, index) => (
          // QualificationItem を使ってデータを表示
          <QualificationItem key={index} {...qualification} />
        ))}
      </div>
    </Section>
  );
}