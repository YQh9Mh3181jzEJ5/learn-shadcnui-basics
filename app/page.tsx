import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-24">
      <section>
        <h1 className="font-medium text-3xl py-4">
          ようこそ！Shadcn/uiを使ったチュートリアルページです！
        </h1>
        <article className="mb-6">
          <p className="mb-2">
            このページは、Next.js と Vite を使って作成されました。
          </p>
          <p className="mb-2">
            また、Shadcn/uiというライブラリを使っています。
          </p>
          <p className="mb-4">
            最も注目するべき特徴は、shadcn/uiはMUIやChakra
            UIとは異なり、コンポーネントライブラリではないということです。これは公式ドキュメントでも明記されています。
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
            This is NOT a component library. It&apos;s a collection of re-usable
            components that you can copy and paste into your apps.
            <footer className="text-sm mt-2">— Introduction より引用</footer>
          </blockquote>
          <p className="mb-2">
            利用者は上述の通り&quot;copy and
            paste&quot;をするか、または専用のCLIを通じて手元のプロジェクトに引っ張ってきてコンポーネントを利用します。
          </p>
          <p>このライブラリは、Radix UI と Tailwindをベースにしています。</p>
        </article>

        <section className="mb-6">
          <h2 className="font-medium text-2xl py-2">
            使用しているコンポーネント
          </h2>
          <ul className="list-disc list-inside">
            <li>button</li>
            <li>dropdown-menu</li>
            <li>navigation-menu</li>
            <li>darkmode</li>
          </ul>
        </section>
      </section>

      <div className="flex gap-4 items-center">
        <Button>これがbuttonコンポーネント</Button>
        <Button>これがbuttonコンポーネント</Button>
      </div>
    </main>
  );
}
