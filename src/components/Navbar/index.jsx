import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

export default function Navbar() {

    const [searchVisible , setSearchVisible] = useState(false)

    let searchRef = useRef();   

    useEffect(() => {
        let handler = (e) => {
            if (!searchRef.current.contains(e.target)) {
                setSearchVisible(false)
            }
        }

        document.addEventListener("mousedown" , handler)
    })

    return (
        <div className="top-10 flex my-0 mx-auto w-full z-[2] bg-[#121d33] fixed border-b-[1px] border-solid border-[#ffffff33]">
            <div className="relative box-content my-0 mx-auto max-w-[80rem] flex items-center justify-between py-0 px-[1rem] w-full h-[4.75rem]">
                <a>
                  <svg width="224" height="24" viewBox="0 0 224 24" fill="none" className="flex-shrink-0 mr-[1.5rem] text-white"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M139.92 3.879a2.028 2.028 0 0 1 1.163-1.954 2.026 2.026 0 1 1 .862 3.859 1.968 1.968 0 0 1-1.853-1.158 1.969 1.969 0 0 1-.172-.747zm.15 3.645h3.735v13.5h-3.735v-13.5zm-99.87-4.5H33v18h7.71c4.035 0 6.195-2.115 6.195-4.98a4.17 4.17 0 0 0-3.96-4.365v-.18a3.84 3.84 0 0 0 3.255-3.87c0-2.685-2.025-4.605-6-4.605zm2.145 5.22c0 1.425-1.215 2.28-2.715 2.28l-2.88.045v-4.5h2.94c1.695 0 2.655.75 2.655 2.175zm.555 7.395c0 1.35-.87 2.235-3 2.235h-3.15v-4.77h3.15a2.626 2.626 0 0 1 3 2.535zm5.85 5.385h3.795l-.06-18H48.75v18zm5.76-6.705c0-4.185 2.55-6.975 6.645-6.975s6.645 2.79 6.645 6.975-2.55 6.96-6.645 6.96-6.645-2.79-6.645-6.96zm9.48-.008c-.002-2.35-.977-4.087-2.82-4.087-1.845 0-2.865 1.74-2.865 4.095 0 2.355.975 4.08 2.865 4.08 1.888 0 2.818-1.736 2.82-4.088zm11.85-6.967c-4.095 0-6.63 2.835-6.63 6.975 0 4.11 2.49 6.96 6.63 6.96 3.555 0 5.82-2.1 6-5.205H78.3a2.4 2.4 0 0 1-2.445 2.25c-1.755 0-2.88-1.545-2.88-4.05s1.14-4.005 2.88-4.005a2.4 2.4 0 0 1 2.445 2.25h3.54c-.12-3.12-2.475-5.175-6-5.175zm7.965-4.32h3.75v9.615h.195l4.335-5.115h4.29l-5.01 5.85 5.265 7.65h-4.38l-3.69-5.445-1.005 1.155v4.29h-3.75v-18zm19.44 4.32c-4.095 0-6.63 2.835-6.63 6.975 0 4.11 2.49 6.96 6.66 6.96 3.57 0 5.82-2.1 6-5.205h-3.525a2.414 2.414 0 0 1-2.46 2.25c-1.755 0-2.88-1.545-2.88-4.05s1.14-4.005 2.88-4.005a2.417 2.417 0 0 1 2.46 2.25h3.495c-.105-3.12-2.475-5.175-6-5.175zm11.715 13.68h-3.735v-18h3.63v6.885h.165a3.985 3.985 0 0 1 4.035-2.565c2.805 0 4.665 1.92 4.665 5.085v8.595h-3.75v-7.935a2.299 2.299 0 0 0-.577-1.882 2.292 2.292 0 0 0-1.823-.743 2.523 2.523 0 0 0-2.485 1.7 2.51 2.51 0 0 0-.125 1.06v7.8zm15.66-7.935c-2.67.255-5.07 1.17-5.07 4.17 0 2.67 1.905 4.02 4.485 4.02a4.141 4.141 0 0 0 3.945-2.13h.105v1.875h3.555v-9.12c0-3.225-2.73-4.575-5.73-4.575-3.24 0-5.355 1.545-5.88 4.005l3.465.285a2.25 2.25 0 0 1 2.4-1.5c1.275 0 1.995.645 1.995 1.755 0 .885-.915.99-3.27 1.215zm3.3 1.605v1.5a2.599 2.599 0 0 1-.891 1.805 2.591 2.591 0 0 1-1.914.625c-1.155 0-1.98-.525-1.98-1.575 0-1.05.87-1.575 2.19-1.755a9.189 9.189 0 0 0 2.595-.6zm12.33 6.33h3.81l-.06-7.8a2.473 2.473 0 0 1 2.55-2.76 2.31 2.31 0 0 1 2.4 2.625v7.935h3.75v-8.595c0-3.15-1.845-5.085-4.665-5.085a4.112 4.112 0 0 0-4.065 2.565h-.15V7.524h-3.57v13.5z" fill="currentColor"></path><path opacity=".6" fill-rule="evenodd" clip-rule="evenodd" d="M199.95 7.524h-3.57l-.015 13.5h3.75v-8.1a2.268 2.268 0 0 1 1.292-2.276 2.26 2.26 0 0 1 .898-.214 1.977 1.977 0 0 1 1.959 1.339c.091.268.124.554.096.836v8.415h3.63v-8.25a2.114 2.114 0 0 1 2.175-2.34 2.01 2.01 0 0 1 2.085 2.25v8.34H216v-9a4.366 4.366 0 0 0-8.25-2.115h-.21a3.57 3.57 0 0 0-3.675-2.565 3.778 3.778 0 0 0-3.75 2.565h-.165V7.524zm-26.25-.18c-4.095 0-6.615 2.835-6.615 6.975 0 4.11 2.475 6.96 6.69 6.96 3.57 0 5.835-2.1 6-5.205h-3.525a2.414 2.414 0 0 1-2.46 2.25c-1.74 0-2.88-1.545-2.88-4.05s1.14-4.005 2.88-4.005a2.417 2.417 0 0 1 2.46 2.25h3.45c-.105-3.12-2.475-5.175-6-5.175zm-11.83 10.315a2.102 2.102 0 0 0 1.48 3.59 2.1 2.1 0 1 0-1.48-3.59zm19.27-3.34c0-4.185 2.55-6.975 6.645-6.975s6.63 2.79 6.63 6.975-2.535 6.96-6.63 6.96-6.645-2.79-6.645-6.96zm9.48-.007c-.002-2.352-.977-4.088-2.82-4.088-1.845 0-2.865 1.74-2.865 4.095 0 2.355.975 4.08 2.865 4.08 1.888 0 2.818-1.736 2.82-4.087z" fill="currentColor"></path><path d="M2.054 8.722.959 9.817a3.12 3.12 0 0 0 0 4.5l8.821 8.909c.21.214.452.391.72.525V12.952l-8.446-4.23z" fill="#3D89F5"></path><path d="m21.947 8.722 1.095 1.095a3.12 3.12 0 0 1 0 4.5l-8.822 8.909c-.21.214-.452.391-.72.525V12.952l8.447-4.23z" fill="#1656B9"></path><path d="M19.828 6.487 14.308.952a3.134 3.134 0 0 0-4.5 0L4.273 6.487l7.755 3.87 7.8-3.87z" fill="#85B5F8"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h216v24H0z"></path></clipPath></defs></svg>  
                </a>
                <div className="flex items-center">
                    <nav>
                        <ul className="inline-flex items-center p-0 m-0">
                            <li className="min-w-[4.75rem] mr-[1.25rem]">
                                <a className="text-[#ccd2de] transition-colors duration-500 flex items-center justify-center py-[0.25rem] px-[0.5rem] relative w-full font-medium text-[1rem] leading-[1.5rem] hover:text-white hover:bg-[#f0f2f71a] cursor-pointer">
                                    Wallet
                                </a>
                            </li>
                            <li className="min-w-[4.75rem] mr-[1.25rem]">
                                <a className="text-[#ccd2de] transition-colors duration-500 flex items-center justify-center py-[0.25rem] px-[0.5rem] relative w-full font-medium text-[1rem] leading-[1.5rem] hover:text-white hover:bg-[#f0f2f71a] cursor-pointer">
                                    Exchange
                                </a>
                            </li>
                            <li className="min-w-[4.75rem] mr-[1.25rem]">
                                <a className="text-[#ccd2de] transition-colors duration-500 flex items-center justify-center py-[0.25rem] px-[0.5rem] relative w-full font-medium text-[1rem] leading-[1.5rem] hover:text-white hover:bg-[#f0f2f71a] cursor-pointer">
                                    Explorer
                                </a>
                            </li>
                            <li className="min-w-[4.75rem] mr-[1.25rem]">
                                <a className="text-[#ccd2de] transition-colors duration-500 flex items-center justify-center py-[0.25rem] px-[0.5rem] relative w-full font-medium text-[1rem] leading-[1.5rem] hover:text-white hover:bg-[#f0f2f71a] cursor-pointer">
                                    Pay
                                </a>
                            </li>
                            <li className="min-w-[4.75rem] mr-[1.25rem]">
                                <a className="text-[#ccd2de] transition-colors duration-500 flex items-center justify-center py-[0.25rem] px-[0.5rem] relative w-full font-medium text-[1rem] leading-[1.5rem] hover:text-white hover:bg-[#f0f2f71a] cursor-pointer">
                                    Institutional
                                </a>
                            </li>
                            <li className="h-full relative cursor-pointer">
                                <button className="bg-transparent border-none cursor-pointer flex items-center justify-center h-full py-0 px-[0.75rem] mr-[0.5rem]">
                                <svg className="rounded-[4px] transition-colors duration-300 text-white" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M19 13.5C19.5523 13.5 20 13.0523 20 12.5C20 11.9477 19.5523 11.5 19 11.5C18.4477 11.5 18 11.9477 18 12.5C18 13.0523 18.4477 13.5 19 13.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 13.5C12.5523 13.5 13 13.0523 13 12.5C13 11.9477 12.5523 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5C11 13.0523 11.4477 13.5 12 13.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 13.5C5.55228 13.5 6 13.0523 6 12.5C6 11.9477 5.55228 11.5 5 11.5C4.44772 11.5 4 11.9477 4 12.5C4 13.0523 4.44772 13.5 5 13.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </button>
                                <div className="opacity-0 hidden pointer-events-none absolute my-0 mx-auto top-0 left-[-17.5rem] pt-[3rem] before:border-solid before:border-y-[0] before:border-x-[0.75rem] before:absolute before:top-[-0.75rem] before:left-[18.25rem] before:my-0 before:mx-auto before:w-[1.5rem] before:pt-[3rem]">
                                    <nav className="bg-white rounded-[0.75rem] shadow-[rgba(103,113,133,0.4)_0.75rem_1.5rem_4rem] flex justify-between p-[1.5rem]">
                                        <div className="mr-[1.25rem] w-[8.125rem]">
                                            <p className="text-[#121d33] mb-[1.25rem] capitalize font-semibold text-[1.125rem] leading-[1.5rem] m-0">
                                                Products
                                            </p>
                                            <ul>
                                               <li className="mb-[1rem]">
                                                    <a className="bg-transparent bg-no-repeat bg-[right_0.1875rem_top_0.5625rem] rounded-[0.25rem] text-[#677185] inline-flex items-center text-[1rem] leading-[1.5rem] my-0 mx-[-0.25rem] py-[0.25rem] px-[0.5rem] relative transition-colors duration-300 whitespace-nowrap">
                                                        Wallet
                                                    </a>
                                               </li> 
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="w-full justify-end flex items-center">
                    <div className="mr-[1.25rem] ml-auto max-w-[22rem] relative h-[2.75rem] flex items-center justify-center">


                        {
                            searchVisible && 
                            <div ref={searchRef} className="visible opacity-100 origin-[50%_50%_0px] bg-white rounded-[1rem] absolute top-0 right-0 overflow-hidden w-auto z-[1]">
                            <div className="p-[0.5rem]">
                                <div className="bg-[#f0f2f7] text-[#121515] border-none outline-none rounded-[0.5rem] w-full ps-[0.75rem] flex items-center gap-3 overflow-hidden">
                                    <button className="bg-none border-none p-0 h-[1.5rem]">
                                    <svg height="19" viewBox="0 0 18 19" width="18"><path d="m559.179993 45.9010802c0-3.4003115-2.373108-5.56108-5.564608-5.56108-3.191501 0-5.565397 2.1674824-5.565397 5.56108 0 3.3935975 2.090012 5.568921 5.565397 5.568921s5.564608-2.1686096 5.564608-5.568921zm4.820007 9c0 .7572115-.627404 1.3846154-1.384615 1.3846154-.367789 0-.72476-.1514424-.973558-.4110577l-3.710337-3.6995193c-1.265625.876202-2.780048 1.3413462-4.316105 1.3413462-4.207933 0-7.615385-3.4074519-7.615385-7.6153846s3.407452-7.6153846 7.615385-7.6153846c4.207932 0 7.615384 3.4074519 7.615384 7.6153846 0 1.5360577-.465144 3.0504807-1.341346 4.3161057l3.710337 3.7103366c.248798.2487981.40024.6057692.40024.9735577z" fill="currentColor" fill-rule="evenodd" transform="translate(-546 -38)"></path></svg>
                                    </button>
                                    <input className="border-none outline-none bg-transparent py-[0.625rem] pr-[0.75rem] pl-0 w-full text-[0.875rem] font-medium tracking-[0.01em] leading-[1.25rem]" autoComplete="off" placeholder="Search blocks, transactions, hash..." type="search" name="search" >
                                        
                                    </input>
                                </div>  
                                <div className="p-[0.5rem]">
                                    <div className="">
                                        <span className="block py-[0.625rem] px-0 text-[#50596b] border-b-[1px] border-solid border-[#f0f2f7] text-[0.75rem] font-normal leading-[1rem]">
                                            Blocks
                                        </span>
                                        <ul className="">
                                            <li className="border-b-[1px] border-solid border-[#f0f2f7]">
                                                <a className="gap-[0.5rem] flex items-center cursor-pointer p-[0.625rem] bg-transparent text-[#121D33] hover:bg-[#f7f8fa]">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z" fill="#F28B24"></path><rect width="16" height="16" transform="translate(2 2)" fill="#F28B24"></rect><path d="M16.0007 11.332H11.334V15.9987H16.0007V11.332Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.66667 11.332H4V15.9987H8.66667V11.332Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.0007 4H11.334V8.66667H16.0007V4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.66667 4H4V8.66667H8.66667V4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                <span className="text-[0.75rem] font-normal leading-[1rem]">
                                                    BTC Block
                                                </span>
                                                </a>
                                            </li>
                                            <li className="border-b-[1px] border-solid border-[#f0f2f7]">
                                                <a className="gap-[0.5rem] flex items-center cursor-pointer p-[0.625rem] bg-transparent text-[#121D33] hover:bg-[#f7f8fa]">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z" fill="#00B26B"></path><rect width="16" height="16" transform="translate(2 2)" fill="#00B26B"></rect><path d="M16.0007 11.332H11.334V15.9987H16.0007V11.332Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.66667 11.332H4V15.9987H8.66667V11.332Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.0007 4H11.334V8.66667H16.0007V4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.66667 4H4V8.66667H8.66667V4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                <span className="text-[0.75rem] font-normal leading-[1rem]">
                                                    BCH Block
                                                </span>
                                                </a>
                                            </li>
                                            <li className="border-b-[1px] border-solid border-[#f0f2f7]">
                                                <a className="gap-[0.5rem] flex items-center cursor-pointer p-[0.625rem] bg-transparent text-[#121D33] hover:bg-[#f7f8fa]">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z" fill="#7349F2"></path><rect width="16" height="16" transform="translate(2 2)" fill="#7349F2"></rect><path d="M16.0007 11.332H11.334V15.9987H16.0007V11.332Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.66667 11.332H4V15.9987H8.66667V11.332Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.0007 4H11.334V8.66667H16.0007V4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.66667 4H4V8.66667H8.66667V4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                <span className="text-[0.75rem] font-normal leading-[1rem]">
                                                    ETH Block
                                                </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#f7f8fa] p-[0.5rem] flex gap-[0.75rem]">
                                <a className="bg-[#f0f2f7] rounded-[0.5rem] py-[0.25rem] px-[0.75rem] transition-colors duration-300 ease-in-out text-[0.875rem] font-medium tracking-[0.01em] leading-[1.25rem] text-gray-900 hover:bg-[#dfe3eb]">
                                    Prices
                                </a>
                                <a className="bg-[#f0f2f7] rounded-[0.5rem] py-[0.25rem] px-[0.75rem] transition-colors duration-300 ease-in-out text-[0.875rem] font-medium tracking-[0.01em] leading-[1.25rem] text-gray-900 hover:bg-[#dfe3eb]">
                                    Blocks
                                </a>
                                <a className="bg-[#f0f2f7] rounded-[0.5rem] py-[0.25rem] px-[0.75rem] transition-colors duration-300 ease-in-out text-[0.875rem] font-medium tracking-[0.01em] leading-[1.25rem] text-gray-900 hover:bg-[#dfe3eb]">
                                    transactions
                                </a>
                                <a className="bg-[#f0f2f7] rounded-[0.5rem] py-[0.25rem] px-[0.75rem] transition-colors duration-300 ease-in-out text-[0.875rem] font-medium tracking-[0.01em] leading-[1.25rem] text-gray-900 hover:bg-[#dfe3eb]">
                                    Charts
                                </a>
                            </div>
                        </div>

                        }

                        <button onClick={() => setSearchVisible(!searchVisible)} className="flex justify-center items-center bg-[#ffffff1a] border-none p-0 text-white w-[2.75rem] h-[2.75rem] rounded-[2.75rem] transition-colors duration-300 ease-in-out hover:bg-[#ffffff40] hover:cursor-pointer">
                            <svg height="19" viewBox="0 0 18 19" width="18"><path d="m559.179993 45.9010802c0-3.4003115-2.373108-5.56108-5.564608-5.56108-3.191501 0-5.565397 2.1674824-5.565397 5.56108 0 3.3935975 2.090012 5.568921 5.565397 5.568921s5.564608-2.1686096 5.564608-5.568921zm4.820007 9c0 .7572115-.627404 1.3846154-1.384615 1.3846154-.367789 0-.72476-.1514424-.973558-.4110577l-3.710337-3.6995193c-1.265625.876202-2.780048 1.3413462-4.316105 1.3413462-4.207933 0-7.615385-3.4074519-7.615385-7.6153846s3.407452-7.6153846 7.615385-7.6153846c4.207932 0 7.615384 3.4074519 7.615384 7.6153846 0 1.5360577-.465144 3.0504807-1.341346 4.3161057l3.710337 3.7103366c.248798.2487981.40024.6057692.40024.9735577z" fill="currentColor" fill-rule="evenodd" transform="translate(-546 -38)"></path></svg>
                        </button>
                    </div>
                    <a className="mr-[1.25rem] h-11 text-[#121D33]">
                        <button className="text-[14px] w-auto h-11 py-[10px] px-[14px] inline-flex justify-center items-center font-medium tracking-[0.01rem] leading-[144%] rounded-[0.5rem] border-[0.125rem] border-white cursor-pointer transition-all ease duration-300 whitespace-nowrap text-white bg-none hover:text-[#ccd2de] hover:border-[#ccd2de]">
                            Log In
                        </button>
                    </a>
                    <a className="mr-[1.25rem] h-11 text-[#121D33]">
                        <button className="w-auto text-[14p] h-11 py-[10px] px-[14px] inline-flex justify-center items-center font-medium tracking-[0.01rem] leading-[144%] rounded-[0.5rem] border-[0.125rem] border-transparent cursor-pointer transition-all ease duration-300 whitespace-nowrap text-[#121d33] bg-white hover:bg-[#dfe3eb]">
                            Sign Up
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}