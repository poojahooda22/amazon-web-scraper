import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";



function Sidebar() {
    return (
        <div>
            <div className="">
                <DocumentMagnifyingGlassIcon 
                    className="w-64 h-64 text-indigo-600/20" 
                />

                <h1 className="hidden md:inline text-3xl mt-2">Web Scraper</h1>
                <h2 className="hidden  md:inline text-xs italic">Scraping the UnScrapable</h2>
            </div>


            <ul></ul>
            Sidebar
        </div>
    )
}

export default Sidebar;