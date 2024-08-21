import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-24">
      <div>
        <h2 className="font-medium text-2xl py-2">ようこそ！</h2>
        <div className="mb-2">
          <p>このページは、Next.js と Vite を使って作成されました。</p>
          <p>
            また、Shadcn/uiというコンポーネントライブラリを使用しています。
            このライブラリは、Radix UI と Tailwindをベースにしています。
          </p>
          <h3 className="font-normal py-2">使用しているコンポーネント</h3>
          <ul>
            <li>
              <p>button</p>
            </li>
            <li>
              <p>dropdown-menu</p>
            </li>
            <li>
              <p>navigation-menu</p>
            </li>
            <li>
              <p>darkmode</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Button>これがbuttonコンポーネント</Button>
        <Button>これがbuttonコンポーネント</Button>
      </div>
    </main>
  );
}
