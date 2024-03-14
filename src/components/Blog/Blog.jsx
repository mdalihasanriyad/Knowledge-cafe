import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const{title,cover,author, author_img,posted_date,reading_time,hashTag} =blog;
    return (
        <div className='mb-16'>
            <img className='w-full rounded-xl' src={cover} alt={`cover picture of the ${title}`} />
            <div className="flex justify-between mt-4">
                <div className="flex mb-4">
                    <img className='w-16 rounded-full' src={author_img}  />
                    <div className="mb-6 ml-4">
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="">
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2'><FaBookmark ></FaBookmark ></button>
                </div>
            </div>
            <h2 className='text-2xl mb-2'>{title}</h2>
            <p>
                {
                    hashTag.map((has ,idx) => <span key={idx}><a>#{hashTag}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)}  className='mt-4 text-purple-800 underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;