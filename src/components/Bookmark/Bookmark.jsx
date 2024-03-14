import propTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className='p-2 ' >
            <h3 className='text-2xl rounded-xl p-4 bg-white'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: propTypes.object
}
export default Bookmark;