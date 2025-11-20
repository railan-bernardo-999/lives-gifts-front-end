import Image from "next/image";
import Logo from '../../public/logo.svg'
import Banner from '../../public/banner.webp'

const Cadastro = () => {
    return (
        <div>
            <>
                <main className="w-full grid grid-cols-12 min-h-screen">
                    <div className="col-span-8 lg:block hidden">
                        <Image
                            src={Banner}
                            width={1536}
                            height={1024}
                            quality={85}
                            priority
                            alt="Banner"
                        />
                    </div>
                    <div className="lg:col-span-4 col-span-12 p-6">
                        <div className="relative lg:mx-0 mx-auto w-[100px] h-[100px]">
                            <Image
                                src={Logo}
                                width={100}
                                height={80}
                                quality={85}
                                priority
                                alt="Logo"
                            />
                        </div>
                        <h1 className="text-3xl text-[#FD2429] font-bold lg:text-left text-center mb-2">Cadastre-se</h1>
                        <p className="lg:text-xl  text-lg font-extralight lg:text-left text-center">
                            Preencha os dados abaixo para iniciar sua jornada na plataforma.
                        </p>
                        <form className="grid grid-cols-12 gap-3 mt-5">
                            <div className="col-span-12">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nome completo"
                                    className="w-full border border-[var(--bgcustomhover)] focus:border-white rounded-md px-3 py-2 text-base transition-all duration-150 focus:ring-0 focus:outline-0" />
                            </div>
                            <div className="col-span-12">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                    className="w-full border border-[var(--bgcustomhover)] focus:border-white rounded-md px-3 py-2 text-base transition-all duration-150 focus:ring-0 focus:outline-0" />
                            </div>
                            <div className="md:col-span-6 col-span-12">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="(00) 00000-0000"
                                    className="w-full border border-[var(--bgcustomhover)] focus:border-white rounded-md px-3 py-2 text-base transition-all duration-150 focus:ring-0 focus:outline-0" />
                            </div>
                            <div className="md:col-span-6 col-span-12">
                                <input
                                    type="text"
                                    name="document"
                                    placeholder="000.000.000-00"
                                    className="w-full border border-[var(--bgcustomhover)] focus:border-white rounded-md px-3 py-2 text-base transition-all duration-150 focus:ring-0 focus:outline-0" />
                            </div>
                            <div className="col-span-12">
                                <input
                                    type="text"
                                    name="birthday"
                                    placeholder="00/00/0000"
                                    className="w-full border border-[var(--bgcustomhover)] focus:border-white rounded-md px-3 py-2 text-base transition-all duration-150 focus:ring-0 focus:outline-0" />
                            </div>
                            <div className="col-span-12">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="********"
                                    className="w-full border border-[var(--bgcustomhover)] focus:border-white rounded-md px-3 py-2 text-base transition-all duration-150 focus:ring-0 focus:outline-0" />
                            </div>
                        </form>
                        <button type="submit"
                            className="text-xl cursor-pointer block font-semibold uppercase text-center mx-auto mt-5 rounded-md px-4 py-4 lg:min-w-[250px] lg:max-w-[250px] min-w-full bg-[var(--bgcustom)] hover:bg-[var(--bgcustomhover)] transition-colors duration-200"
                        >
                            Cadastrar
                        </button>
                    </div>
                </main>
            </>
        </div>
    )
}

export default Cadastro;