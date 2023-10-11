import BtcSvg from "../../assets/prices-btc.svg"
import Prices from "./Prices.json"

export default function PricesSection() {
    return (
        <div className="box-content max-w-[62.5rem] my-0 mx-auto py-0 px-[2.5rem]">
            <div className="relative flex justify-center w-full mt-[-70px]">
                <div className="flex flex-col items-end max-w-[62.5rem] w-full">
                    <div className="w-full">
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,auto))] gap-[1.5rem] rounded-[0.5rem] w-full mb-[1.25rem]">
                            
                            {
                                Prices.map(price => 
                                    <a className="bg-[linear-gradient(rgb(255,255,255),rgb(255,255,255))] rounded-[0.5rem] shadow-[rgba(103,113,133,0.2)_0.75rem_1.5rem_4rem_0rem] text-[#121d33] p-[1.25rem] transition-background duration-[600] ease-in hover:bg-[linear-gradient(rgb(255,255,255),rgb(240,242,247))] cursor-pointer">
                                <div className="flex items-start justify-between mb-[12px] ">
                                    <div className="flex-shrink-0">
                                        <img src={price.logo} className="h-[2.5rem] w-[2.5rem]"></img>
                                    </div>
                                    <div className="flex items-start justify-end flex-wrap max-w-[170px] gap-[0.5rem]">
                                        <button className="bg-[#efecfe] rounded-[0.25rem] border-none text-[#5322e5] cursor-pointer font-medium py-[0.25rem] px-[0.5rem] text-[0.875rem] leading-[1.25rem] transition-colors duration-300 hover:bg-[#ded8fd]">
                                            Buy
                                        </button>
                                        <button className="bg-[#e6faec] rounded-[0.25rem] border-none text-[#00994c] cursor-pointer font-medium py-[0.25rem] px-[0.5rem] text-[0.875rem] leading-[1.25rem] transition-colors duration-300 hover:bg-[#d1f0db]">
                                            Trade
                                        </button>
                                    </div>
                                </div>

                                <div className="flex mb-[0.25rem]">
                                    <p className="text-inherit font-medium text-[1rem] m-0">
                                        {price.name}
                                    </p>
                                    <p className="text-[#677185] ml-[0.5rem] font-medium text-[1rem] leading-[1.5rem]">
                                        {price.short}
                                    </p>
                                </div>

                                <div className="flex">
                                    <p className="text-inherit font-medium text-[1rem] leading-[1.5rem]">
                                        {price.price}
                                    </p>
                                    <p className="ml-[0.5rem] text-[#ff443a] font-medium text-[1rem] leading-[1.5rem]">
                                        {price.change}
                                    </p>
                                </div>
                            </a>)
                            }

                        </div>
                        <div className="flex justify-between flex-wrap w-full">
                            <a className="inline-flex justify-center items-center font-medium tracking-[0.01em] cursor-pointer transition-all duration-300 whitespace-nowrap bg-none border-none rounded-none text-[#121d33] p-0 text-[0.875rem] leading-[143%] hover:text-[#0c6cf2]">
                                More Prices
                                <svg className="ml-[0.5rem]" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4.16797 10H15.8346" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 4.16797L15.8333 10.0013L10 15.8346" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}