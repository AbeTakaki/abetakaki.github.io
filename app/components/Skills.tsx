import Section from './Section';

type SkillsProps = {
  mainSkills?: string[];
  subSkills?: string[];
};

// デフォルトのメイン / サブスキル
const defaultMainSkills = ['PHP', 'Laravel', 'MySQL', 'AWS','Linux','Git'];
const defaultSubSkills = ['Docker', 'React', 'TypeScript'];

export default function Skills({
  mainSkills = defaultMainSkills,
  subSkills = defaultSubSkills,
}: SkillsProps) {
  return (
    <Section title="Skills">
      <div className="space-y-4">
        {/* メインスキル */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Main Skills</h3>
          <div className="flex flex-wrap gap-2">
            {mainSkills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* サブスキル */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Sub Skills</h3>
          <div className="flex flex-wrap gap-2">
            {subSkills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}