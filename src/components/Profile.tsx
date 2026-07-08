import Image from "next/image";

const profileDetails = [
  { label: "経歴", value: "製造業 / IoTエンジニア" },
  { label: "学習中", value: "AWS / Next.js / Python" },
  { label: "興味・関心", value: "AI活用、クラウドインフラ、開発効率化" },
];

export default function Profile() {
  return (
    <section id="profile" className="mb-24 scroll-mt-24">
      <div className="flex gap-10 items-start bg-surface p-10 rounded-3xl max-md:flex-col max-md:items-center max-md:text-center max-md:gap-6 max-md:p-6">
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpeg"
            alt="プロフィール画像"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full object-cover max-md:w-30 max-md:h-30"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl text-ink mb-1 font-semibold tracking-tight">koki</h2>
          <p className="text-base text-muted font-medium mb-5">Software Engineer</p>
          <p className="text-ink/70 text-[0.95rem] leading-7 mb-6">
            製造業でIoTエンジニアとして、Pythonを用いたバックエンド開発に従事しています。
            製造機械から取得したデータの収集・処理・加工を中心に、実務でのシステム開発経験があります。<br/>
            前職のITサポートでは、PythonによるRPAスクリプトやPower Automateを使った業務自動化を推進してきました。「仕組みで課題を解決する」ことを得意としています。<br/>
            個人開発ではAWS LambdaやAWSサービスを組み合わせたシステムを構築しており、クラウドを活用した仕組みの設計・提案もできます。<br/>
            <span className="font-semibold text-ink">Python・業務自動化・AWSを使ったシステム開発</span>などの案件でお役に立てます。
          </p>
          <div className="flex flex-col gap-3 max-md:w-full">
            {profileDetails.map((item) => (
              <div
                key={item.label}
                className="flex gap-4 items-baseline max-md:flex-row max-md:justify-start max-md:text-left"
              >
                <span className="flex-shrink-0 w-20 min-w-[90px] text-sm font-semibold text-ink max-md:w-[90px]">
                  {item.label}
                </span>
                <span className="text-sm text-ink/70 flex-1">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
