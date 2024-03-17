import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { Posts, Users } from '../../data'

function Feed()
{
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                <Post username="Sasha" postTime="5 min ago" postText="Post with full props input" likeCounter={23} commentCounter={13} postImg="/assets/post/6.jpeg" userImg="/assets/person/4.jpeg" />
                <Post postText="Post with no props. input" />
                {/* <Post username="" postTime="" postText="Post with empty props. input " likeCounter="" commentCounter="" postImg="" userImg=""/> */}
                {
                    Posts.map((p) => (
                        <Post username={Users[p.userId - 1].username} postTime={p.date} postText={p.desc} likeCounter={p.like} commentCounter={p.comment} postImg={p.photo} userImg={Users[p.userId - 1].ProfilePic} />
                    ))
                }
            </div>
        </div>
    );
}

export default Feed;
<>
</>