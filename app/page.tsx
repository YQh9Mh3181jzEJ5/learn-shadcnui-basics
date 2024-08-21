import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-24">
      <div>
        <h2 className="font-medium text-2xl py-2">ようこそ！</h2>
        <div className="mb-2">
          <p>このページは、Next.js と Vite を使って作成されました。</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            culpa suscipit veritatis ipsam voluptatum. Repellat natus libero eos
            explicabo dolore quisquam voluptatum, quos quasi harum laboriosam
            ducimus ratione maxime! Pariatur?
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Button>Click Here!</Button>
        <Button>Click Here!</Button>
      </div>
    </main>
  );
}
