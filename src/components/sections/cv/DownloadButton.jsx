const DownloadButton  = () => {
    return (
        <a
            href="../../../../public/CV Manuel Leyva.pdf"
            download
            className="mt-3 md:text-lg relative inline-block bg-orange-app  text-white px-3 md:px-6 py-3 rounded overflow-hidden transition-colors duration-300 group"
        >
            <div className="flex items-center justify-center w-full">
                <span className="mr-3">Descargar</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" className="size-6">
                    <path
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
                </svg>
            </div>
            <span className="absolute inset-0 bg-black/20 left-0 w-0 group-hover:w-full transition-all duration-500"></span>
        </a>
    );
}

export default DownloadButton;