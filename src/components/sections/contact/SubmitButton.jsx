const SubmitButton = ({ isSubmitting, children }) => {
    return (
        <button
            type="submit"
            disabled={isSubmitting}
            className="mt-3 md:text-lg relative cursor-pointer inline-block w-full bg-orange-app text-white px-3 md:px-6 py-3 rounded overflow-hidden transition-colors duration-300 group disabled:opacity-50"
        >
            <div className="flex items-center justify-center w-full">
                {isSubmitting ? "Enviando..." : children}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="size-5 ml-3"
                    viewBox="0 0 16 16"
                >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                </svg>
            </div>
            <span className="absolute inset-0 bg-black/20 left-0 w-0 group-hover:w-full transition-all duration-500"></span>
        </button>
    );
};

export default SubmitButton;
