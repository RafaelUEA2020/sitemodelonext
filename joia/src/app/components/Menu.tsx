'use client'

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PrimaryButton from './buttons/PrimaryButton';
import Logo from "@/app/assets/emoji-sus.jpg";
import SecondButton from './buttons/SecondButton';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import ThirdButton from './buttons/ThirdButton';
import { Button } from '@mui/material';
import { useState } from 'react';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import HiddenMenu from './buttons/HiddenMenuButton';
import 'animate.css';

export default function Menu() {
    const [visible, setVisible] = useState<boolean>(false);

    function verifyMenu() {
        if (visible) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }

    return (
        //Div reponsável pela barra superior
        <div className="w-full h-20 bgColorGold shadow-md">
            <div className="px-10 w-full h-full m-auto flex justify-between items-center lg:px-40">
                <img className="w-20" src={Logo.src} />


                <div className="hidden lg:flex items-center flex gap-4">
                    <ThirdButton
                        text="Sobre"
                        type="button"
                        onclick={() => alert("Clicou no catalogo!")}
                    />

                    <ThirdButton
                        text="Produtos"
                        type="button"
                        onclick={() => alert("Clicou no catalogo!")}
                    />

                    <SecondButton
                        text="Cadastro"
                        icon={<PersonAddAltRoundedIcon />}
                        type="button"
                        onclick={() => alert("Clicou no cadastro!")}
                    />

                    <PrimaryButton
                        text="Conta"
                        icon={<AccountCircleRoundedIcon />}
                        type="button"
                        onclick={() => alert("Clicou na conta!")}
                    />

                </div>

                <div className="flex lg:hidden">
                    <Button
                        onClick={verifyMenu}
                    >
                        {
                            visible ? (<HighlightOffRoundedIcon className="text-black" />) : <HiddenMenu />
                        }

                    </Button>
                </div>
            </div>

            {visible && (
                //dropdown menu
                <div className="bgColorGold w-full h-{100vh-80px} fixed top-20">
                    <div className="flex flex-col gap-2 px-10">
                        <ThirdButton
                            text="Sobre"
                            type="button"
                            onclick={() => alert("Clicou no catalogo!")}
                        />

                        <ThirdButton
                            text="Produtos"
                            type="button"
                            onclick={() => alert("Clicou no catalogo!")}
                        />

                        <SecondButton
                            text="Cadastro"
                            icon={<PersonAddAltRoundedIcon />}
                            type="button"
                            onclick={() => alert("Clicou no cadastro!")}
                        />

                        <PrimaryButton
                            text="Conta"
                            icon={<AccountCircleRoundedIcon />}
                            type="button"
                            onclick={() => alert("Clicou na conta!")}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}