import Image from "next/image";

const profileDetails = [
  { label: "経歴", value: "2024年新卒〜ITサポート業務" },
  { label: "学習中", value: "AWS / Next.js / Python" },
  { label: "興味・関心", value: "AI活用、クラウドインフラ、開発効率化" },
];

export default function Profile() {
  return (
    <section id="profile" className="mb-15 scroll-mt-30">
      <div className="flex gap-10 items-start bg-white p-8 rounded-2xl shadow-md max-md:flex-col max-md:items-center max-md:text-center max-md:gap-6 max-md:p-6">
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpeg"
            alt="プロフィール画像"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full object-cover border-4 border-sky-100 max-md:w-30 max-md:h-30"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl text-[#1e3a5f] mb-1 font-bold">koki</h2>
          <p className="text-base text-blue-500 font-semibold mb-4">自称 Engineer</p>
          <p className="text-gray-600 text-[0.95rem] leading-7 mb-5">
            農機メーカーでITサポートとして、新しいイノベーションを生み出すエンジニアたちの端末管理やソフトウェア不具合対応を担当しています。
            業務の中で反復作業をPythonやPower Automateで効率化することにも取り組んでいます。
            個人開発では興味のある技術にとりあえず触ってみるスタイルで学習中です。
          </p>
          <div className="flex flex-col gap-3 max-md:w-full">
            {profileDetails.map((item) => (
              <div
                key={item.label}
                className="flex gap-4 items-baseline max-md:flex-row max-md:justify-start max-md:text-left"
              >
                <span className="flex-shrink-0 w-20 min-w-[90px] text-sm font-semibold text-[#1e3a5f] max-md:w-[90px]">
                  {item.label}
                </span>
                <span className="text-sm text-gray-600 flex-1">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
