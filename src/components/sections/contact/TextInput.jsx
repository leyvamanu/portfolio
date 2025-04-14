const TextInput = ({ id, label, name, value, onChange, error, type = "text", placeholder }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block">{label}</label>
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:outline-none ${
                    error ? "border-red-500 focus:ring-red-500" : "border-orange-app focus:border-orange-app-focus focus:ring-orange-app-focus"
                }`}
                placeholder={placeholder}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default TextInput;
