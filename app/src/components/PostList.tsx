import { useState, useEffect } from 'react';
import {
    fetchPosts
} from '../services/api.services'

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const {data: response} = await fetchPosts();
        const {data: posts} = response;
        return setPosts(posts);
        };

    return (
        <>
            <div>
                {(posts || []).map((element:any) => {
                    return <div>{ element?.name || 'sth' }</div>
                })}
            </div>
        </>
    );
}

export default PostList;