const EthereumCard = () => {
  return (
    <div className="w-[195px] h-[285px] bg-neutral-800 rounded-3xl flex flex-col items-center justify-center text-white transition-all duration-200 hover:scale-105 hover:-rotate-1 relative group">
      <svg
        className="h-[30%] absolute transition-all duration-200 z-10 group-hover:h-[65%] group-hover:blur-sm group-hover:animate-[float_3s_ease-in-out_infinite]"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="100%"
        height="100%"
        version="1.1"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 784.37 1277.39"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <g id="_1421394342400">
            <g>
              <polygon fill="#343434" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" />
              <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" />
              <polygon fill="#3C3C3B" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89" />
              <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89" />
              <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33" />
              <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33" />
            </g>
          </g>
        </g>
      </svg>
      <div className="opacity-0 flex flex-col items-center justify-center gap-4 transition-all duration-200 z-20 group-hover:opacity-100">
        <p className="font-bold text-xl">Ethereum</p>
        <span className="text-xs text-gray-300">In March 2020 it was</span>
        <p className="font-bold text-lg">$ 86.00</p>
      </div>
    </div>
  );
};


export default EthereumCard;
