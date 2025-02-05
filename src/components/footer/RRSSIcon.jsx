// eslint-disable-next-line react/prop-types
const RRSSIcon = ({href, children}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-app transition-colors duration-300"
        >
            {children}
        </a>
    );
};

export default RRSSIcon;