import React from "react";
import logo from "./logo.svg";
import "./App.css";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {
  return (
    <div className="app min-h-screen flex items-center flex-col p-20 text-white">
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
        Decentralised Social Network  
      </h1>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 text-blue-200">
        <Button
          text="Enter"
          url="https://nmkbs-aaaaa-aaaam-aadfa-cai.ic0.app/"
        />
        <Button
          text="Documentation"
          url=""
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 text-lg max-w-3xl gap-10 text-blue-200">  
        <div className="w-64 bg-black p-2 rounded-xl">
          <h3 className="text-pink-300 mb-3">Decentralised</h3> All data is stored on-chain and owned by users, who fully control the network through a DAO.
        </div>
        <div className="w-64 bg-black  p-2 rounded-xl">
          <h3 className="text-pink-300 mb-3">Intuitive</h3> Twitter's look-and-feel, rapidly expanded with user proposals.
        </div>
        <div className="w-64 bg-black  p-2 rounded-xl">
          <h3 className="text-pink-300 mb-3">Crypto Powered</h3> Token transfers, prediction markets, DAOs, NFTs.
        </div>
      </div>
      <div className="grid grid-cols-1  text-lg max-w-3xl gap-10 text-blue-200">  
      <iframe width="560" height="315" src="https://www.youtube.com/embed/hT3QQ2rmYYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="text-grey mt-10">© Pense Technologies</div>
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
