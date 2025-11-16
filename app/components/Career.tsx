import Section from './Section'; // 共通部品をインポート

export default function Career() {
  return (
    // 共通部品 Section を使い、title を渡す
    <Section title="Career">
      {/* children（中身）として、経歴のリストを記述 */}
      <ul className="p-2 bg-gray-50 rounded-3xl sm:p-5 xl:p-6">
        {/* 5つ目の経歴 */}
        <li>
          <div className="relative grid items-start p-3 overflow-hidden md:grid-cols-8 xl:grid-cols-9 rounded-xl sm:p-5 xl:p-6">
            <h3 className="mb-1 font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 ml-9 md:ml-0">
              株式会社サーバーワークス・スマートオペレーションズ
            </h3>
            <time  className="flex items-center row-start-1 mb-1 font-medium text-gray-500 md:col-start-1 md:col-span-2 md:row-end-3 md:mb-0">
              <svg viewBox="0 0 12 12" className="w-3 h-3 mr-6 overflow-visible text-gray-300">
                <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                <circle cx="6" cy="6" r="11" fill="none" stroke='currentColor' strokeWidth="2"></circle>
                <path d="M 6 18 V 500" fill="none" strokeWidth="2" stroke="currentColor" className="text-gray-200"></path>
              </svg>2025.06
            </time>
            <p className="text-gray-500 md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
              AWS 専業のシステムインテグレーターで、主に大手企業向けのクラウドインフラ構築・運用支援を担当。<br />
            </p>
          </div>
        </li>

        {/* 4つ目の経歴 */}
        <li>
          <div className="relative grid items-start p-3 overflow-hidden md:grid-cols-8 xl:grid-cols-9 rounded-xl sm:p-5 xl:p-6">
            <h3 className="mb-1 font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 ml-9 md:ml-0">
              taneCREATIVE株式会社
            </h3>
            <time  className="flex items-center row-start-1 mb-1 font-medium text-gray-500 md:col-start-1 md:col-span-2 md:row-end-3 md:mb-0">
              <svg viewBox="0 0 12 12" className="w-3 h-3 mr-6 overflow-visible text-gray-300">
                <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                <path d="M 6 -6 V -45" fill="none" strokeWidth="2" stroke="currentColor" className="text-gray-200"></path>
                <path d="M 6 18 V 500" fill="none" strokeWidth="2" stroke="currentColor" className="text-gray-200"></path>
              </svg>
              2023.02<br />-2025.06</time>
              <p className="text-gray-500 md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
                主に、Web 開発アプリケーションの開発に携わる。<br />
                社内 ERP システムの開発では、主にバックエンドを担当し、PHP（Laravel）と MySQL を使用して 0 から開発を行った。<br />
                その後、不動産会社の CRM システムの SaaS 化プロジェクトに参加し、既存システムの機能追加や改修だけでなくインフラの運用保守も担当。<br />
                バックエンドエンジニアとして企業のコーポレートサイトや EC サイトの構築・改修にも携わったほか、<br />
                AWS や Linux での構築・保守運用にも携わり、インフラエンドエンジニアとしての経験も積む。<br />
                2023.10 リーダー職に昇進。<br />
                2024.10 制作・運営部 運営課 セキュリティ・サーバー保守班 係長に昇進。
              </p>
            </div>
        </li>

        {/* 3つ目の経歴 */}
        <li>
          <div className="relative grid items-start p-3 overflow-hidden md:grid-cols-8 xl:grid-cols-9 rounded-xl sm:p-5 xl:p-6">
            <h3 className="mb-1 font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 ml-9 md:ml-0">
              新潟県立 新潟テクノスクール主催 DSプログラマー養成科 1
            </h3>
            <time  className="flex items-center row-start-1 mb-1 font-medium text-gray-500 md:col-start-1 md:col-span-2 md:row-end-3 md:mb-0">
              <svg viewBox="0 0 12 12" className="w-3 h-3 mr-6 overflow-visible text-gray-300">
                <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                <path d="M 6 -6 V -45" fill="none" strokeWidth="2" stroke="currentColor" className="text-gray-200"></path>
                <path d="M 6 18 V 500" fill="none" strokeWidth="2" stroke="currentColor" className="text-gray-200"></path>
              </svg>
              2022.05<br />-2022.11
            </time>
            <p className="text-gray-500 md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
              プログラミングの基礎を学ぶ。<br />
              主にPHP、Laravel、MySQL、HTML、CSSなどを学習した。<br />
              在学中に基本情報技術者試験に合格。
            </p>
          </div>
        </li>

        {/* 2つ目の経歴 */}
        <li>
          <div className="relative grid items-start p-3 overflow-hidden md:grid-cols-8 xl:grid-cols-9 rounded-xl sm:p-5 xl:p-6">
            <h3 className="mb-1 font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 ml-9 md:ml-0">
              ナミックス株式会社
            </h3>
            <time  className="flex items-center row-start-1 mb-1 font-medium text-gray-500 md:col-start-1 md:col-span-2 md:row-end-3 md:mb-0">
              <svg viewBox="0 0 12 12" className="w-3 h-3 mr-6 overflow-visible text-gray-300">
                <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                <path d="M 6 -6 V -45" fill="none" strokeWidth="2" stroke="currentColor" className="text-gray-200"></path>
                <path d="M 6 18 V 500" fill="none" strokeWidth="2" stroke="currentColor" className="text-gray-200"></path>
              </svg>
              2020.08<br />-2022.03
            </time>
            <p className="text-gray-500 md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
              地元の半導体製造会社で勤務。厳しい品質管理を要求される、製品のろ過作業を担当。
            </p>
          </div>
        </li>

        {/* 1つ目の経歴項目 */}
        <li>
          <div className="relative grid items-start p-3 overflow-hidden md:grid-cols-8 xl:grid-cols-9 rounded-xl sm:p-5 xl:p-6">
            <h3 className="mb-1 font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 ml-9 md:ml-0">
              株式会社三越伊勢丹アイムファシリティーズ
            </h3>
            <time  className="flex items-center row-start-1 mb-1 font-medium text-gray-500 md:col-start-1 md:col-span-2 md:row-end-3 md:mb-0">
              <svg viewBox="0 0 12 12" className="w-3 h-3 mr-6 overflow-visible text-gray-300">
                <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                <path d="M 6 -6 V -45" fill="none" strokeWidth="2" stroke="currentColor" className="text-gray-200"></path>
                <path d="M 6 18 V 500" fill="none" strokeWidth="2" stroke="currentColor" className="text-gray-200"></path>
              </svg>
              2016.07<br />-2020.03
            </time>
            <p className="text-gray-500 md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
                警備員として、新潟三越の安全・安心を守る業務に従事した。<br />
                110 年続いた新潟三越の閉店まで勤務。
            </p>
          </div>
        </li>

      </ul>
    </Section>
  );
}