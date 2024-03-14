import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropsTypes from 'prop-types';


const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {
    const [blogs, setBlogs]=useState([]);
    useEffect( ()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))    
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleAddToBookmark: PropsTypes.func,
    handleMarkAsRead: PropsTypes.func
}
export default Blogs;