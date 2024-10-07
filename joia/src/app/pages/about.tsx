import AlternativeButton from "../components/buttons/AlternativeButton";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Menu from "../components/Menu";
import Modelo from "@/app/assets/modelo_relogio.jpg";

export default function About() {
    return (
        <div>
            <Menu />
            <div className="bgGradient">
                <div className="text-black flex flex-col flex-wrap items-center p-5 lg:flex-row w-full">
                    <div className="flex flex-col text-center p-4 mb-5 shadow-md lg:w=1/2 gap-4 lg:text-left">
                        <p className="font-bold lg:text-2xl">subtexto</p>
                        <h1 className="text-white font-bold lg:text-4xl">Texto destaque chamativo</h1>
                        <p className="lg:text-3xl">Texto Convidativo</p>
                        <div className=" flex flex-col gap-4 lg:flex-row">
                            <PrimaryButton
                                text="Ir para a loja"
                            />
                            <AlternativeButton
                                text="Ver Carrinho"
                            />
                        </div>
                        <div className="flex flex-row lg:w-1/3">
                            <img className="borderConfig h-full w-full" src={Modelo.src} alt="Imagem Representativa" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}