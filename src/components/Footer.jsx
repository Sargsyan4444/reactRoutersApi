function Footer() {
    return(
        <footer className=" w-full font-montserrat bg-black">
            <div className="flex justify-between flex-wrap  py-20 px-7 gap-3 items-start max-w-[1440px] my-0 mx-auto">
                <div className="flex gap-5 flex-wrap flex-col">
                <img className="w-[80px] h-[80px] object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/The_Fresh_Market_logo.svg/2048px-The_Fresh_Market_logo.svg.png" alt="logo" />
                    <p className="text-[#7CFC00]">© SAS group, 2023. Բոլոր իրավունքները պաշտպանված են:
                    Գաղտնիության քաղաքականության օգտագործման պայմանները։
                    Կայքի մշակում — նոր կայք</p>
                </div>
                <div className="flex flex-wrap flex-col">
                    <span className="text-[#7CFC00]">Ընկերության մասին</span>
                    <span className="text-[#7CFC00]"> Ֆուդ Կորտ - ի մասին</span>
                    <span className="text-[#7CFC00]">Ֆուդ Կորտերը</span>
                </div>
                <div className="flex flex-wrap flex-col">
                    <span className="text-[#7CFC00]">Օգնության կենտրոն</span>
                    <span className="text-[#7CFC00]">Հաճախ տրվող հարցեր և պատասխաններ</span>
                    <span className="text-[#7CFC00]">Առաքում եւ վճարում</span>
                    <span className="text-[#7CFC00]">Գնումներ արտերկրից</span>
                    <span className="text-[#7CFC00]">Կորպորատիվ</span>
                    <span className="text-[#7CFC00]">հաճախորդներին</span>
                </div>
                <div className="flex flex-wrap flex-col">
                    <span className="text-[#7CFC00] text-wrap">Կապ</span>
                    <h3 className="text-[#7CFC00] text-wrap">+374 (12) 53 88 88</h3>
                </div>
            </div>
        </footer>
    )
}
export default Footer