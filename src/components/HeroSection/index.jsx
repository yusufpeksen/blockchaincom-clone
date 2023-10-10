export default function HeroSection() {
    return (
        <div className="pt-[7.25rem] bg-[#144699] bg-hero-bg bg-no-repeat bg-cover bg-bottom text-white block">
            <div className="my-0 mx-auto py-0 px-[2.5rem] max-w-[62.5rem] box-content">
                <div className="max-w-[46.6875rem] py-[10.625rem] px-0">
                    <h1 className="text-white mb-[1.5rem] text-[3rem] font-semibold leading-[3.625rem] m-0">
                    Be early to the future of finance
                    </h1>
                    <p className="mb-[2rem] text-[1.5rem] font-medium leading-[2.125rem]">
                    Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a platform trusted by millions.
                    </p>
                    <form className="flex">
                        <label className="h-[1px] overflow-hidden whitespace-nowrap w-[1px]" htmlFor="email">
                        Your email address
                        </label>
                        <input className="mr-[1rem] w-full max-w-[24.1875rem] bg-[#ffffff1a] border-none rounded-[0.5rem] py-[0.75rem] px-[1rem] font-normal text-[0.875rem] leading-[1.25rem] placeholder-white overflow-visible" type="email" autoComplete="on" id="email" name="email" placeholder="Your email address" required></input>
                        <button className="bg-[#ECF5FE] text-[#0C6CF2] text-[0.875rem] leading-[1.25rem] inline-flex justify-center items-center py-[0.75rem] px-[1.375rem] font-medium tracking-[0.01em] rounded-[0.5rem] border-[0.125rem] border-solid border-transparent cursor-pointer transition-all duration-300 ease-in whitespace-nowrap hover:bg-[#DFE3EB]">
                        Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}