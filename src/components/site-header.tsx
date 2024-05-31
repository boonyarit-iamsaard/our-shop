import Link from 'next/link';

import { HomeIcon } from 'lucide-react';

import { Button } from '~/components/ui/button';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 bg-neutral-300 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Button asChild variant="ghost" size="icon">
          <Link href="/">
            <HomeIcon className="h-6 w-6" />
          </Link>
        </Button>
        <nav className="flex items-center gap-4">
          <Button asChild variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
