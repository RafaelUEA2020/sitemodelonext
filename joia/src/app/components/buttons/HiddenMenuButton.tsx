'use client'

import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';

type HiddenButton = {
    onClick?: VoidFunction;
}

export default function HiddenMenu({onClick}:HiddenButton){
    return(
        <span
            onClick={onClick} className="text-black cursor-point lg:hidden"
        >
            <ReorderRoundedIcon/>
        </span>
    );
}