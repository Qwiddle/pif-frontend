import Image from "next/image";

export default async function Home() {
  const fetchPIFPrice = async () => {
    const res = await fetch(
      "https://api.universalswaps.io/subgraphs/name/ianlapham/uniswap-v3",
      {
        body: '{"operationName":"pools","variables":{},"query":"query pools {\\n  pools(\\n    where: {id_in: [\\"0xb6dba57dd8520c418f97b74a3fd1d6987c41eedd\\"]}\\n    orderBy: totalValueLockedUSD\\n    orderDirection: desc\\n    subgraphError: allow\\n  ) {\\n    id\\n    feeTier\\n    liquidity\\n    sqrtPrice\\n    tick\\n    token0 {\\n      id\\n      symbol\\n      name\\n      decimals\\n      derivedETH\\n      __typename\\n    }\\n    token1 {\\n      id\\n      symbol\\n      name\\n      decimals\\n      derivedETH\\n      __typename\\n    }\\n    token0Price\\n    token1Price\\n    volumeUSD\\n    volumeToken0\\n    volumeToken1\\n    txCount\\n    totalValueLockedToken0\\n    totalValueLockedToken1\\n    totalValueLockedUSD\\n    __typename\\n  }\\n  bundles(where: {id: \\"1\\"}) {\\n    ethPriceUSD\\n    __typename\\n  }\\n}\\n"}',
        method: "POST",
      }
    );

    const { data } = await res.json();
    return data.pools[0].token1.derivedETH;
  };

  const fetchLuxoPrice = async () => {
    const res = await fetch(
      "https://api.mobula.io/api/1/market/data?asset=lukso"
    );

    const { data } = await res.json();
    const { price } = data;
    return price;
  };

  const calculatePIFPrice = async () => {
    const pifPrice = await fetchPIFPrice();
    const luxoPrice = await fetchLuxoPrice();
    return pifPrice * luxoPrice;
  };

  const pifPrice = await calculatePIFPrice();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-1 font-mono text-sm lg:flex">
      <h2 className="text-green-500">platwifhat</h2>
      <p className="text-xs">just a plat wif a hat on $LYX</p>
      <p className="text-xs text-green-500">
        price: ${pifPrice.toFixed(4) || ``}
      </p>

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
            className="text-sm text-blue-500"
          >
            𝕏
          </a>
          -
          <a
            href="https://info.universalswaps.io/#/tokens/tokens/0xd639f7059bfffba2a3e0d46cb722bc898e45e824"
            className="text-sm text-blue-500"
          >
            Chart
          </a>
        </div>
        <p className="text-sm text-blue-500 cursor-not-allowed">
          Airdrop details (soon)
        </p>
      </div>
    </main>
  );
}
