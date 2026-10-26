import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

const Breadcrumbs = ({
  breadcrumbs,
}: {
  breadcrumbs: { label: string; href: string }[];
}) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className="flex text-xl md:text-2xl">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            className={`${lusitana.className} flex items-center`}
          >
            <Link
              href={breadcrumb.href}
              className="text-gray-500 hover:text-gray-900"
            >
              {breadcrumb.label}
            </Link>

            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;