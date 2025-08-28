import { Phone as PhoneIcon } from 'lucide-react';

const PhoneLoader = () => {
  return (
    <a
      href="tel:+40745506443"
      aria-label="Sună acum"
      className="inline-block no-underline cursor-pointer"
    >
      <div className="w-[220px] md:w-[220px] sm:w-[180px] aspect-square relative transition-transform duration-200 hover:scale-105" role="button">
        <div className="absolute inset-[40%] z-[99] rounded-full border-t border-gray-400 shadow-lg backdrop-blur-sm bg-gradient-to-b from-gray-800/20 to-gray-600/20 animate-[ripple_2s_infinite_ease-in-out]">
          <div className="absolute inset-0 grid place-content-center p-[30%]">
            <PhoneIcon className="w-full h-full text-gray-400 stroke-[2.25px] animate-[logo-color_2s_infinite_ease-in-out]" />
          </div>
        </div>
        <div className="absolute inset-[30%] z-[98] rounded-full border-t border-gray-400/80 shadow-lg backdrop-blur-sm bg-gradient-to-b from-gray-800/20 to-gray-600/20 animate-[ripple_2s_infinite_ease-in-out] [animation-delay:0.2s]" />
        <div className="absolute inset-[20%] z-[97] rounded-full border-t border-gray-400/60 shadow-lg backdrop-blur-sm bg-gradient-to-b from-gray-800/20 to-gray-600/20 animate-[ripple_2s_infinite_ease-in-out] [animation-delay:0.4s]" />
        <div className="absolute inset-[10%] z-[96] rounded-full border-t border-gray-400/40 shadow-lg backdrop-blur-sm bg-gradient-to-b from-gray-800/20 to-gray-600/20 animate-[ripple_2s_infinite_ease-in-out] [animation-delay:0.6s]" />
        <div className="absolute inset-0 z-[95] rounded-full border-t border-gray-400/20 shadow-lg backdrop-blur-sm bg-gradient-to-b from-gray-800/20 to-gray-600/20 animate-[ripple_2s_infinite_ease-in-out] [animation-delay:0.8s]" />
      </div>
    </a>
  );
};


export default PhoneLoader;
