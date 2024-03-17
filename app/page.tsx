"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "./components/modal";
import { ethers } from "ethers";
import LSP7Mintable from "../app/components/PlatWifHat.json";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-1 font-mono text-sm lg:flex">
      <h2>platwifhat</h2>
      <p className="text-xs">just a plat wif a hat on $LYX</p>
      <div className="flex gap-4">
        <Image
          src="https://ipfs.io/ipfs/Qmf89LkjRSscsivAYL1yJJHb8jNFoBKgZKq58DKKBduaEw"
          alt="PlatWifHat Icon"
          width="319"
          height="320"
        />
      </div>
      <div className="flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://twitter.com/platwifhat"
            className="text-lg text-blue-500"
          >
            𝕏
          </a>
          -
          <a
            href="https://info.universalswaps.io/#/tokens/tokens/0xd639f7059bfffba2a3e0d46cb722bc898e45e824"
            className="text-lg text-blue-500"
          >
            Chart
          </a>
        </div>
        <p className="text-lg text-blue-500 cursor-not-allowed">
          Airdrop details (soon)
        </p>
      </div>
    </main>
  );
}
