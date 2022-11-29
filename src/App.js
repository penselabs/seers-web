import React from "react";
import logo from "./bird.jpeg";
import intro from "./seers-intro.gif"
import "./App.css";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {
  return (
    <div className="app min-h-screen flex items-center flex-col p-20 text-white w-full">
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
      <div className="flex flex-col items-center">
          
          <h1 className="text-2xl lg:text-5xl text-center logo">
            Seers
          </h1>

          {/* <img src={logo} alt="" className="w-12 h-12 rounded-full p-2"/> */}

      </div>

      <h1 className="text-xl lg:text-2xl text-center w-full p-1 md:w-3/4">
        The Social Network of The Future is Here
      </h1>

      <img src={intro} alt="" className="p-2 md:w-96 md:h-64"/>


      <div className="grid grid-cols-1 grid-rows-1  gap-4 text-blue-200 p-3 mb-10 ">
        <Button
          className="pink-color"
          text="Enter"
          url="https://oulla-fyaaa-aaaag-qa6fa-cai.ic0.app/"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 text-lg max-w-3xl gap-10">  
        <div className="w-64 bg-black p-2 rounded-xl">
          <h3 className="mb-3">Decentralised</h3> Users fully control the network through a DAO. Data is stored on-chain and owned by users. 
        </div>
        <div className="w-64 bg-black  p-2 rounded-xl">
          <h3 className="mb-3">Intuitive</h3> Twitter's look-and-feel, rapidly expanded by user proposals. Bi-directional bridge to Twitter.
        </div>
        <div className="w-64 bg-black  p-2 rounded-xl">
          <h3 className="mb-3">Crypto Powered</h3> Token transfers, prediction markets, DAOs, NFTs. Only imagination is the limit.
        </div>
      </div>
      {/* <div className="grid grid-cols-1 min-w-3xl text-lg gap-10 text-blue-200 m-3 p-3 overflow-auto">  
      <iframe width="100%" height="auto" src="https://www.youtube.com/embed/hT3QQ2rmYYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div> */}
      <div className="h-full m-5 p-5 pink-box text-lg">Create interoperable social networks to quickly push the limits of what’s possible.</div>
      {/* <div className="parallax"></div> */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 text-lg max-w-3xl gap-10">  
        <div className="w-64 bg-black p-2 rounded-xl">
          <h3 className="mb-3">Tokenomics</h3>
            At genesis the total supply of SEERS tokens will be 1B.

            The SNS could be configured to generate 1% of the total supply annually to pay rewards to participating neurons.
            This reward parameter of 1% can be subsequently changed by proposal.
            It is also possible for the SNS to mint tokens by proposal, but it is unlikely the Seers DAO will choose to do so.

            At genesis the SNS will have a treasury of ICP from the decentralization sale and ~400M SEERS tokens.

            The SNS will receive an income in SEER tokens from premium features, transaction fees, integrations.
            The SNS should also burn tokens according to he usage of the social network. 
 
            The SNS will also receive an income in ICP from the social network usage.

            The SNS will use ICP to pay the Seers dapp costs, integrations, and the team. It will use SEERS to pay user rewards and community bounties.

            As the Seers DAO sees fit it can choose to burn SEERS tokens to reduce the total supply. 
        </div>
      </div>
      
      <div className="text-grey mt-10">© Pense Technologies</div>
    </div>
  );
}

function Button({ className, text, url = "#" }) {
  return (
    <a
      href={url}
      className={`${className} py-3 px-6 bg-pink-600 hover:bg-pink-500 text-black block rounded text-center shadow flex items-center justify-center leading-snug text-xs transition ease-in duration-150`}
    >
      {text}
    </a>
  );
}
