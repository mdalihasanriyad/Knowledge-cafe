import propTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3 ml-4 mt-2 bg-gray-200 p-2 rounded-xl '> 
            <div className=" bg-slate-50 rounded-xl">
                <h2 className='text-3xl text-center p-4 '>Reading Time:{readingTime}</h2>
            </div>
            <h2 className="text-3xl text-center">Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: propTypes.array,
    readingTime: propTypes.number
}

export default Bookmarks;