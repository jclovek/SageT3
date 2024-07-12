import React, {useEffect, useState} from "react";
import { usePathname } from "next/navigation";

function Header() {
    const pathName = usePathname();
    const [pageName, setPageName] = useState('');

    useEffect(() => {
        if(pathName === '/'){
            setPageName('Home');
        }else if(pathName === '/Shop'){
            setPageName('Market');
        }else if(pathName === '/Wiki'){
            setPageName('About');
        }else if(pathName === '/WikiWorld'){
            setPageName('World');
        }else if(pathName === '/WikiVendor'){
            setPageName('Vendors');
        }else if(pathName === '/Act'){
            setPageName('Act');
        }else if(pathName === '/Blog'){
            setPageName('Blog');
        }else if(pathName === '/Water'){
            setPageName('Water');
        }else if(pathName === '/Earth'){
            setPageName('Earth');
        }

    }, [pathName])
    return(
        <div className="page-header">
            <h1 id='page-title'>{pageName}</h1>
            <form>
                <input id='search-bar' type='search' placeholder="Search"></input>
            </form>
        </div>
    )
}

export default Header;