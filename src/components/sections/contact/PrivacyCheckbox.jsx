const PrivacyCheckbox = ({ checked, onChange, error, onOpenModal }) => {
    return (
        <div className="mb-4 flex items-center gap-2 text-sm">
            <input
                id="privacy"
                type="checkbox"
                name="privacy"
                checked={checked}
                onChange={onChange}
                className="accent-orange-app cursor-pointer h-4 w-4"
            />
            <label htmlFor="privacy" className="cursor-pointer">
                <span>Acepto la </span>
                <button
                    type="button"
                    onClick={onOpenModal}
                    className="relative inline-block transition-colors duration-300 group text-white hover:text-orange-app cursor-pointer"
                >
                    <span>Política de Privacidad</span>
                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white transition-all duration-300"></span>
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-app group-hover:w-full transition-all duration-300"></span>
                </button>
            </label>
            {error && <p className="text-red-500 text-sm ml-2">{error}</p>}
        </div>
    );
};

export default PrivacyCheckbox;