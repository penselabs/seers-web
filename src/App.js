import React from "react";
import logo from "./logo.svg";
import "./App.css";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {
  return (
    <div className="app min-h-screen text-blue-200 flex items-center flex-col p-20">
      {/* <div className="mb-10 grid grid-cols-4 grid-rows-2 w-1/2 mx-auto">
        <img className="opacity-25" src={logo} alt="React Logo" width="300" />
        <img
          className="col-span-2 row-span-3 animate-spin m-auto"
          style={{ animationDuration: "30s" }}
          src={logo}
          alt="React Logo"
          width="300"
        />
        <img className="opacity-25" src={logo} alt="React Logo" width="300" />
        <img className="opacity-25" src={logo} alt="React Logo" width="300" />
        <img className="opacity-25" src={logo} alt="React Logo" width="300" />
      </div> */}

      <h1 className="text-2xl lg:text-5xl mb-10 text-center">
        Seers
      </h1>

      <h1 className="text-xl lg:text-2xl mb-10 text-center">
        Decentralised Social Network running on top of the Internet Computer blockchain.  
      </h1>

      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <Button
          text="Enter"
          url="https://nmkbs-aaaaa-aaaam-aadfa-cai.ic0.app/"
        />
        <Button
          text="Documentation"
          url=""
        />
      </div>
      <div className="grid grid-cols-3 text-lg max-w-3xl gap-10">  
        <div className="w-64">
          <h3 className="text-pink-300">Decentralised</h3> user owns and is sovereign of part of the network.
        </div>
        <div className="w-64">
          <h3 className="text-pink-300">Social enabled</h3> look and feel like Twitter, but everything on-chain.
        </div>
        <div className="w-64">
          <h3 className="text-pink-300">Crypto powered</h3> token transfers, prediction markets, DAOs, NFTs.
        </div>
      </div>
    </div>
  );
}

function Button({ className, text, url = "#" }) {
  return (
    <a
      href={url}
      className={`${className} py-3 px-6 bg-pink-600 hover:bg-pink-400 text-black block rounded text-center shadow flex items-center justify-center leading-snug text-xs transition ease-in duration-150`}
    >
      {text}
    </a>
  );
}
