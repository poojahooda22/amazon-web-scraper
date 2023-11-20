import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";



function Sidebar() {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center mb-10">
                <DocumentMagnifyingGlassIcon 
                    className="md:w-16 h-16 text-indigo-600" 
                />

                <h1 className="hidden md:inline text-3xl mt-2 font-bold">Web Scraper</h1>
                <h2 className="hidden  md:inline text-xs italic">Scraping the UnScrapable</h2>
            </div>


            <ul></ul>
        </div>
    )
}

export default Sidebar;