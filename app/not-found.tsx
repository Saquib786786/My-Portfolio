import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NF() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div>
        <p className="label text-cobalt">Error 404 · Page Not Found</p>
        <h1 className="font-display text-7xl md:text-9xl mt-4">404</h1>
        <p className="mt-4 text-ink/75 max-w-md">
          The requested page could not be located. It may have been moved or removed.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 border border-ink px-5 py-3 hover:bg-ink hover:text-paper transition"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
