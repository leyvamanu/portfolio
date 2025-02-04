import 'react';

function Email() {
    return (
        <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="w-6 h-6 text-white"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor" strokeWidth="2">
                <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
            </svg>
            <span className="text-gray-300">info@manuleyva.com</span>
        </div>
    );
}

export default Email;