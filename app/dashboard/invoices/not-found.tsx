
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-4">
      <h2 className="text-center text-xl font-semibold">
        404 - Invoice Not Found
      </h2>

      <p className="text-center">
        Sorry, the invoice you are looking for does not exist.
      </p>

      <Link
        href="/dashboard/invoices"
        className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-400"
      >
        Back to Invoices
      </Link>
    </main>
  );
}
