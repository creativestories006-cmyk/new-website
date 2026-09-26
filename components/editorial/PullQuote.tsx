export default function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="font-serif text-2xl md:text-3xl text-bone italic leading-snug my-10 pl-6 border-l-2 border-accent max-w-xl">
      {children}
    </blockquote>
  );
}
