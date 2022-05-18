import { useState, useEffect } from 'react';
import {
    fetchPosts
} from '../services/api.services'

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts([]);
        loadPosts();
    }, []);

    const loadPosts = () => {
        fetchPosts().then(res=> {
            console.log(res);
            // setPosts(res)
        }).catch(err=>console.log(err))
    }

    return (
        <>
            <div>
                {(posts || []).map(element => {
                    return <div>{ element }</div>
                })}
            </div>
        </>
    );
}

export default PostList;
