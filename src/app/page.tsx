import { Button } from '~/components/ui/button';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
          Welcome
        </h1>
        <Button>Click me</Button>
      </div>
    </main>
  );
}
