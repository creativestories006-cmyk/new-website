import Image from "next/image";
import Link from "next/link";
import { Guide } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link href={`/guides/${guide.slug}`} className="group block">
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white/5">
        <Image
          src={guide.coverImage}
          alt={guide.title}
          fill
          className="object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
          sizes="(min-width: 768px) 380px, 100vw"
        />
      </div>
      <div className="mt-5">
        <p className="font-mono text-xs text-bone/40">
          {guide.author.toUpperCase()} · {formatDate(guide.date)} ·{" "}
          {guide.readTime}
        </p>
        <h3 className="font-serif text-xl md:text-2xl text-bone mt-2 group-hover:text-accent transition-colors text-balance">
          {guide.title}
        </h3>
        <p className="text-bone/50 text-sm mt-2 leading-relaxed">
          {guide.excerpt}
        </p>
      </div>
    </Link>
  );
}
