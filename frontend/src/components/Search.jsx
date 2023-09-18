
export default function Search({search}) {
    
    const handleChange = (e) => {
        search.value = e.target.value;
    };
    
    return (
        <div className="flex items-center relative max-w-sm ">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-4 fill-ghost-white w-4 h-4">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#707070" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input type="text" name='Search' className="h-10 pl-10 py-4 w-full outline-none border-erie-black border-solid border" placeholder='Buscar' onChange={e=>handleChange(e)}/>
        </div>
    );
    }