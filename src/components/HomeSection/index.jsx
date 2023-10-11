import { useState } from "react"

export default function HomeSection() {

    const [features , setFeature] = useState({
        featureOne : true,
        featureTwo : false,
        featureThree : false,
        featureFour : false,
    });

    const choosePhoneImg = () => {
        if (features.featureOne) {
            return "src/assets/app-one.png"
        } else if (features.featureTwo) {
            return "src/assets/app-two.png"
        } else if (features.featureThree) {
            return "src/assets/app-three.png"
        } else {
            return "src/assets/app-four.png"
        }
    }


    return (
        <div className="overflow-hidden">
            <div className="max-w-[80rem] box-content my-0 mx-auto py-0 px-[2.5rem]">
                <section className="rounded-[1.25rem] text-[#121d33] grid grid-cols-[1fr_1fr] bg-[#efecfe80] bg-home-bg bg-no-repeat bg-[length:625px] bg-[right_bottom_2.5rem] min-h-[52.5rem] my-[3.75rem] mx-auto max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:min-h-auto max-[1200px]:m-[3.75rem_0px] max-[1200px]:overflow-hidden max-[1200px]:p-[1rem] max-[1200px]:bg-[375px] max-[1200px]:bg-[right_top_180px]">
                    <div className="text-[#7349f2] max-[1200px]:px-0 justify-start py-[70px] flex flex-col pl-[8.75rem]">
                        <div className="self-start bg-[#efecfe] rounded-[1.25rem] text-[#7349f2] inline-flex items-center mb-[1.25rem] p-[1rem]">
                            <svg className="h-[2rem] w-[2rem]" width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.36" d="M5 1.25C2.92893 1.25 1.25 2.92893 1.25 5V31C1.25 33.0711 2.92893 34.75 5 34.75H15C17.0711 34.75 18.75 33.0711 18.75 31V5C18.75 2.92893 17.0711 1.25 15 1.25H5Z" fill="#5322E5" stroke="#5322E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path opacity="0.9" d="M5 1.25C2.92893 1.25 1.25 2.92893 1.25 5V28C1.25 30.0711 2.92893 31.75 5 31.75H15C17.0711 31.75 18.75 30.0711 18.75 28V5C18.75 2.92893 17.0711 1.25 15 1.25H5Z" fill="white" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><rect x="8" y="4" width="4" height="1" rx="0.5" fill="currentColor"></rect></svg>
                            <p className="text-[18px] leading-[25px] ml-[10px] font-medium">
                                Wallet
                            </p>
                        </div>
                        <h2 className="text-inherit m-[0px_0px_1.875rem] max-w-[30.5rem] text-[2.5rem] font-semibold leading-[3.25rem]">
                            The only crypto wallet you’ll ever need
                        </h2>

                        <div onClick={() => setFeature({featureOne : true,featureTwo : false,featureThree: false,featureFour : false})} className={"mb-[0.75rem] max-w-[30.5rem] rounded-[0.75rem] border-[1px] border-solid border-[#ded8fd]" + (features.featureOne ? " bg-[#efecfe]" : " bg-[#f7f5ff]")}>
                            <h3 className={"text-[1rem] font-medium leading-[1.5rem] m-0 transition-colors duration-[250]" + (features.featureOne ? " text-[#7349f2] cursor-default p-[1rem_1.25rem_0px]" : " text-inherit py-[1rem] px-[1.25rem] cursor-pointer")}>
                            Buy, sell, and swap with ease
                            </h3>
                            <p className={"max-w-[80%] overflow-hidden text-[1rem] font-normal leading-[1.5rem] m-0" + (features.featureOne ? " max-h-full opacity-1 p-[0.5rem_1.25rem_1rem] transition-all duration-500" : " max-h-0 opacity-0 py-0 px-[1.25rem] transition-all duration-0")}>
                            Use a card or bank account to buy BTC, ETH, stablecoins, and other assets.
                            </p>
                        </div>  

                        <div onClick={() => setFeature({featureOne : false,featureTwo : true,featureThree: false,featureFour : false})} className={"max-w-[30.5rem] rounded-[0.75rem] border-[1px] border-solid border-[#ded8fd] mb-[0.75rem]" + (features.featureTwo ? " bg-[#efecfe]" : " bg-[#f7f5ff]")}>
                            <h3 className={"text-[1rem] font-medium leading-[1.5rem] m-0 transition-colors duration-[250]" + (features.featureTwo ? " text-[#7349f2] cursor-default p-[1rem_1.25rem_0px]" : " text-inherit py-[1rem] px-[1.25rem] cursor-pointer")}>
                            Earn rewards on your crypto
                            </h3>
                            <p className={"max-w-[80%] overflow-hidden text-[1rem] font-normal leading-[1.5rem] m-0" + (features.featureTwo ? " max-h-full opacity-1 p-[0.5rem_1.25rem_1rem] transition-all duration-500" : " max-h-0 opacity-0 py-0 px-[1.25rem] transition-all duration-0")}>
                            Get up to 10% in annual rewards by putting your crypto to work.
                            </p>
                        </div>

                        <div onClick={() => setFeature({featureOne : false,featureTwo : false,featureThree: true,featureFour : false})} className={"max-w-[30.5rem] rounded-[0.75rem] border-[1px] border-solid border-[#ded8fd] mb-[0.75rem]" + (features.featureThree ? " bg-[#efecfe]" : " bg-[#f7f5ff]")}>
                            <h3 className={"text-[1rem] font-medium leading-[1.5rem] m-0 transition-colors duration-[250]" + (features.featureThree ? " text-[#7349f2] cursor-default p-[1rem_1.25rem_0px]" : " text-inherit py-[1rem] px-[1.25rem] cursor-pointer")}>
                            Self-custody your crypto
                            </h3>
                            <p className={"max-w-[80%] overflow-hidden text-[1rem] font-normal leading-[1.5rem] m-0" + (features.featureThree ? " max-h-full opacity-1 p-[0.5rem_1.25rem_1rem] transition-all duration-500" : " max-h-0 opacity-0 py-0 px-[1.25rem] transition-all duration-0")}>
                            Sleep better at night knowing only you can access your funds.
                            </p>
                        </div>

                        <div onClick={() => setFeature({featureOne : false,featureTwo : false,featureThree: false,featureFour : true})} className={"max-w-[30.5rem] rounded-[0.75rem] border-[1px] border-solid border-[#ded8fd] mb-[0.75rem]" + (features.featureFour ? " bg-[#efecfe]" : " bg-[#f7f5ff]")}>
                            <h3 className={"text-[1rem] font-medium leading-[1.5rem] m-0 transition-colors duration-[250]" + (features.featureFour ? " text-[#7349f2] cursor-default p-[1rem_1.25rem_0px]" : " text-inherit py-[1rem] px-[1.25rem] cursor-pointer")}>
                            Connect to DeFi
                            </h3>
                            <p className={"max-w-[80%] overflow-hidden text-[1rem] font-normal leading-[1.5rem] m-0" + (features.featureFour ? " max-h-full opacity-1 p-[0.5rem_1.25rem_1rem] transition-all duration-500" : " max-h-0 opacity-0 py-0 px-[1.25rem] transition-all duration-0")}>
                            Use dapps, collect NFTs, and unlock the power of web3.
                            </p>
                        </div>

                        <a className="mt-auto w-fit inline-flex justify-center items-center p-[0.75rem_1.375rem] text-[1.125rem] font-medium tracking-[0.01em] leading-[144%] rounded-[0.5rem] border-[0.125rem] border-solid border-transparent cursor-pointer transition-all duration-300 whitespace-nowrap text-white bg-[#7349f2] hover:bg-[#5322e5]">
                        Get started
                        </a>

                    </div>

                    <div className="flex flex-col justify-center pl-[5rem] max-[1200px]:hidden">
                        <div>
                            <div className="h-full w-full relative flex items-center justify-center">
                                <img className="absolute" src={choosePhoneImg()}>

                                </img>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
        </div>
    )
}