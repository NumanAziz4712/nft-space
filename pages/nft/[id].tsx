import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

const NFTDropPage = () => {
  // Auth
  const connectWithMetaMask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  console.log(address)
  // ----
  return (
    <div className="flex h-screen flex-col lg:grid  lg:grid-cols-10">
      {/* left */}
      <div className="bg-black lg:col-span-4">
        <div className=" flex flex-col items-center justify-center py-2 lg:min-h-screen">
          {/* image div */}
          <div className="transform rounded-xl bg-gray-900 to-transparent p-6 transition duration-200 hover:-translate-y-1 hover:ring-1 hover:ring-cyan-400/50 ">
            <img
              src="https://links.papareact.com/8sg"
              alt="nft ape"
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
            />
          </div>

          {/* text */}
          <div className="mt-1 space-y-2 p-5 text-center">
            <h1 className="text-3xl font-bold text-white">
              <span className="inline-block bg-gradient-to-br from-cyan-300 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                {' '}
                NAUGHTY{' '}
              </span>{' '}
              Apes
            </h1>
            <h2 className="text-lg text-gray-300">
              A collection of NAUGHTY Apes who live & eat bananas!
            </h2>
          </div>
        </div>
      </div>

      {/* right */}
      <div className=" flex flex-1 flex-col px-10 pb-12 pt-5 lg:col-span-6">
        {/* header */}
        <header className="flex  items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            <span className="mr-1 inline-block -rotate-3 rounded bg-gradient-to-br from-indigo-500 to-cyan-500 px-3 font-extrabold text-white transition-all duration-200 hover:rotate-0">
              NUMAN
            </span>{' '}
            NFT Market Place
          </h1>

          <button
            onClick={() => {
              address ? disconnect() : connectWithMetaMask()
            }}
            className={`rounded-full ${
              address
                ? 'bg-white text-gray-600 hover:bg-rose-600 hover:text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 '
            }  px-4 py-2 text-xs  lg:px-5 lg:py-3 lg:text-base lg:font-semibold `}
          >
            {address ? 'Sign Out' : ' Sign In'}
          </button>
        </header>
        <span className="mt-5 mb-2 inline-block h-[1px] bg-gray-100/50" />

        {address && (
          <p className="mt-2 text-center text-sm text-gray-400">
            You're logged in with wallet{' '}
            <span className="ml-1 inline-block rounded-full border border-gray-600/5 bg-gray-50 py-1 px-2 font-medium ">
              {address.substring(0, 5)}...
              {address.substring(address.length - 5)}
            </span>{' '}
          </p>
        )}

        {/* content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt="main image"
          />
          <h1 className="text-3xl font-bold  antialiased lg:text-5xl lg:font-bold">
            The PAPAFAM NFT Drop
          </h1>

          <p className="pt-2 font-medium text-green-500/90">
            13 / 21 NFT's claimed
          </p>
        </div>

        {/* mint button */}
        <button className="mt-10 h-16 w-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 font-bold text-white transition hover:from-indigo-600 hover:to-cyan-600 hover:duration-200">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}

export default NFTDropPage
