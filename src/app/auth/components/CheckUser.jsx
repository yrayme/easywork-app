import React, { useState, useRef } from 'react';
import Image from "next/image";

export default function CheckUser() {
    const [pin, setPin] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const handleInput = (e, index) => {
        const newPin = [...pin];
        newPin[index] = e.target.value;
        setPin(newPin);

        if (e.target.value !== '' && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div class="mb-2">
                <Image
                    width={156.75}
                    height={118.84}
                    src={"/img/logo.svg"}
                />
            </div>
            <div class="mb-4 text-xl">
                <h1>¡Valida tu usuario!</h1>
            </div>
            <div style={{width:320}} class="text-md text-center my-4 w-1/4">
                <h4>Introducir los 6 dígitos recibidos por mensaje de texto al número <br /> +58 412*****85</h4>
            </div>
            <div className='p-4 bg-slate-50 rounded-xl'>
                <div className="flex flex-row gap-4">
                    {pin.map((value, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            class="w-10 h-10 text-center bg-slate-50 !important"
                            value={value}
                            style={{
                                borderBottom: "2px solid #262261",
                                borderTop: 0,
                                borderLeft: 0,
                                borderRight: 0,
                            }}
                            onChange={(e) => handleInput(e, index)}
                            ref={(el) => (inputRefs.current[index] = el)}
                        />
                    ))}
                </div>
            </div>
            <div class="mt-4 w-full flex justify-evenly">
                <button class="hover:bg-easywork-mainhover bg-easywork-main text-white font-bold py-2 px-4 rounded-md">
                    Aceptar
                </button>
                <button class="hover:bg-gray-700 bg-gray-500 text-white font-bold py-2 px-4 rounded-md">
                    Cancelar
                </button>
            </div>
        </div>
    );
};
