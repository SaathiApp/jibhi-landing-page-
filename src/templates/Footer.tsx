import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white pb-6 pt-10 font-inter text-[#22225a]">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        {/* Left: Logo & Links */}
        <div>
          <div className="mb-2 text-2xl font-extrabold tracking-tight">Jibhi.ai</div>
          <nav className="mb-3 flex flex-wrap gap-6 text-sm text-gray-500">
            <Link href="/product" className="transition hover:text-[#605CD4]">Product</Link>
            <Link href="/docs" className="transition hover:text-[#605CD4]">Docs</Link>
            <Link href="/blog" className="transition hover:text-[#605CD4]">Blog</Link>
            <Link href="/community" className="transition hover:text-[#605CD4]">Community</Link>
            <Link href="/company" className="transition hover:text-[#605CD4]">Company</Link>
          </nav>
          <div className="mt-1 flex gap-4">
            <a href="https://twitter.com/saathivisa" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#605CD4]">
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1.7a9.05 9.05 0 01-2.88 1.1A4.52 4.52 0 0016.11.64C14.13.64 12.67 2.18 12.67 4.1c0 .32.04.64.1.95C8.73 4.7 5.25 3.13 2.81.65A4.48 4.48 0 00.92 3.42c0 1.57.8 2.97 2.04 3.79a4.52 4.52 0 01-2.07-.57v.06c0 2.2 1.64 4.03 3.81 4.44-.4.1-.82.17-1.26.17-.3 0-.6-.03-.89-.08.6 1.85 2.34 3.2 4.4 3.23A9.06 9.06 0 010 20.29a12.87 12.87 0 006.95 2.03c8.34 0 12.9-6.9 12.9-12.88 0-.2-.01-.4-.02-.59A9.18 9.18 0 0023 3z" />
              </svg>
            </a>
            <a href="mailto:hello@saathivisa.com" className="hover:text-[#605CD4]" aria-label="Email">
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Right: Company Legal */}
        <div className="mt-4 text-xs leading-6 text-gray-400 md:mt-0">
          <div className="mb-1 font-bold text-[#605CD4]">Saathi Technologies Private Limited</div>
          <div>CIN: U63030MH2022PTC392327</div>
          <div>
            1102, Crescent Royale,
            <br />
            Off New Link Road, Oshiwara, Andheri (West),
            <br />
            Mumbai, Maharashtra 400053, India
          </div>
          <div className="mt-2">
            Contact:
            <a href="mailto:hello@saathivisa.com" className="underline hover:text-[#605CD4]">hello@saathivisa.com</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-5xl px-6 text-center text-xs text-gray-400">
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        Saathi Technologies Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
