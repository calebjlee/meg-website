// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/ui/Navbar';

export default function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden group/design-root">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <Navbar />

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
          {/* Start Footer */}
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
          {/* End Footer */}
        </footer>
      </div>
    </div>
  );
}
