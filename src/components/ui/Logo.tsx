import Image from "next/image";

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/brand/logo-hcrytiri.png"
        alt="HC Rytíři Vlašim"
        width={size}
        height={size}
        priority
      />
      <div className="leading-tight">
        <div className="text-white font-semibold">HC Rytíři Vlašim</div>
        <div className="text-brand-100 text-xs opacity-90">Metodika trenérů</div>
      </div>
    </div>
  );
}
