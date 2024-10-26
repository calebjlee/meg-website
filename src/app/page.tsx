// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden group/design-root">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-[#ede7f3] px-10 py-3">
        <div className="flex items-center gap-4 text-[#140e1b]">
            <Image src="/images/meg-logo.png" alt="MEG Consulting" width={40} height={40} />
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">MEG Consulting</h2>
        </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link href="/" className="text-sm font-medium text-[#140e1b] leading-normal">
                Home
              </Link>
              <Link href="/team" className="text-sm font-medium text-[#140e1b] leading-normal">
                Our Team
              </Link>
              <Link href="/clients" className="text-sm font-medium text-[#140e1b] leading-normal">
                Clients
              </Link>
              <Link href="/recruitment" className="text-sm font-medium text-[#140e1b] leading-normal">
                Recruitment
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-40 py-5 flex flex-1 justify-center">
            <div className="flex flex-col max-w-[960px] flex-1" style={{ color: 'black' }}>
                <h1 className="text-3xl font-bold">MEG Consulting</h1>
                <p>
                    We are a premier consulting club at the University of Michigan, providing consulting services to various clients across industries.
                </p>
            </div>
        </main>
        <footer className="flex justify-center py-10">
          <div className="max-w-[960px] flex-1 flex-col text-center">
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="text-base text-[#734e97]">
                Contact
              </Link>
              <Link href="/privacy" className="text-base text-[#734e97]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-base text-[#734e97]">
                Terms of Service
              </Link>
              <Link href="/faqs" className="text-base text-[#734e97]">
                FAQs
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
