import Link from "next/link";
import Image from "next/image";
import Logo from '../public/logo.svg'

export default function Home() {
  return (
    <>
      <main className="w-full flex items-center justify-center min-h-screen p-5">
        <div className="lg:w-8/12 w-full">
          <div className="relative mx-auto w-[200px] h-[200px]">
            <Image
              src={Logo}
              width={200}
              height={100}
              quality={85}
              priority
              alt="Logo"
            />
          </div>
          <h1 className="text-5xl  2xl:text-8xl text-[#FD2429] font-bold text-center mb-2">Monetize. Engaje. Cresça.</h1>
          <p className="lg:text-3xl 2xl:text-5xl text-xl font-extralight text-center">
            Mais engajamento, mais receita,<br /> mais liberdade para criar.
          </p>
          <Link href={'/criar-conta'}
            className="text-xl block font-semibold uppercase text-center mx-auto mt-5 rounded-md px-4 py-4 lg:min-w-[250px] lg:max-w-[250px] min-w-full bg-[var(--bgcustom)] hover:bg-[var(--bgcustomhover)] transition-colors duration-200"
          >
            Começe agora
          </Link>
        </div>
      </main>
      <footer className="w-full py-4">
        <div className="container mx-auto pt-4 border-t border-t-[var(--bgcustomhover)]">
          <div className="w-full flex md:flex-row flex-col items-center justify-center md:justify-between gap-4">
            <p className="text-sm font-light">Lives Gifts. Todos os direitos reservados.</p>
            <Link href={'/'} className="text-sm font-light underline">Política de Privacidade</Link>
            <button className="text-sm cursor-pointer uppercase font-semibold px-3 py-2 rounded-md bg-[var(--bgcustom)] hover:bg-[var(--bgcustomhover)] transition-colors duration-200">Voltar ao topo</button>
          </div>
        </div>
      </footer>
    </>
  );
}
