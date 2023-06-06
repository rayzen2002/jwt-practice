'use client'
import { UserPlus } from 'lucide-react'
import Image from 'next/image'

export default function Cadastro() {
  return (
    <div className="grid grid-cols-3 gap-2 bg-white">
      <Image
        className="col-span-2 h-screen p-8"
        src="/miner.png"
        width={1280}
        height={1080}
        alt="login"
      />
      <div className=" col-span-1 flex flex-col items-center justify-start gap-4 text-black">
        <div className="h-1/5 w-full"></div>
        <UserPlus className="h-10 w-10" />
        <p className="text-3xl">Crie uma conta</p>
        <div className="flex flex-col gap-2 ">
          <input type="text" placeholder="Nome" />
          <div className="flex w-full  border-b-2 bg-gray-800  "></div>
        </div>
        <div className="flex flex-col gap-2 ">
          <input type="text" placeholder="Email" />
          <div className="flex w-full border-b-2 bg-gray-800  "></div>
        </div>
        <div className="flex flex-col gap-2 ">
          <input type="text" placeholder="Senha" />
          <div className="flex w-full  border-b-2 bg-gray-800  "></div>
        </div>
        <button className="mt-4 flex h-10 w-2/5 flex-col items-center justify-center rounded-lg bg-green-600 hover:bg-green-950">
          Criar Conta
        </button>
        <button className="flex h-10 w-2/5 items-center justify-center gap-2 rounded-lg border-2 border-gray-500 bg-white py-4 hover:bg-green-950">
          <Image
            src="/google.png"
            width={300}
            height={300}
            alt="google"
            className="h-6 w-6"
          />
          Entre com o Google
        </button>
        <p>
          Ja possui uma conta?{' '}
          <a
            className="text-bold border-gray-800 text-black hover:border-b-2"
            href="#"
          >
            {' '}
            Login{' '}
          </a>
        </p>
      </div>
    </div>
  )
}
