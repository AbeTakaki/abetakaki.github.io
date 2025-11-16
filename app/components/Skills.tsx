import Section from './Section';

// 表示したいスキル
const mySkills = [
  'Go', 'TypeScript', 'Next.js', 'React',
  'Node.js', 'Docker', 'Kubernetes', 'AWS',
];

export default function Skills() {
  return (
    <Section title="Skills">
      {/* flex と flex-wrap で、スキルバッジを横並び＆折り返しにする */}
      <div className="flex flex-wrap gap-2">
        {mySkills.map((skill) => (
          // バッジのスタイル
          <span 
            key={skill} 
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}