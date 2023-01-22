import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Risky Saputra</title>
        <meta
          name="description"
          content="I'm making something for the web, and I like it. come check my website to see more about me"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-screen h-screen justify-center items-center">
        <div>
          <h1 className="text-3xl">Hi My name is Risky Saputra</h1>
          <h2 className="text-3xl">Welcome to my website !</h2>
          <Link
            className="text-[40px] text-blue-400"
            href={"https://permovie.risky-saputra.my.id/"}
            target="_blank"
          >
            -Permovie-
          </Link>
        </div>
      </main>
    </>
  );
}
