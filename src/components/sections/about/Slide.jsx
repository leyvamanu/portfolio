
const Slide = ({review}) => {
    const getAvatar = (name) => {
        if (name) {
            const initials = name.split(' ').map(word => word[0]).join('');
            return `https://ui-avatars.com/api/?name=${initials}&background=e14e22&color=fff`;
        }
        return '';
    };

    return (
        <div className="bg border-4 shadow-xl rounded-xl cursor-pointer transition-transform p-4">
            <div className="flex items-center mb-4">
                <img
                    src={review.avatar || getAvatar(review.name)}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-orange-app">{review.role}</p>
                </div>
            </div>
            <p className="h-48 overflow-y-auto">{review.text}</p>
        </div>
    );
};

export default Slide;