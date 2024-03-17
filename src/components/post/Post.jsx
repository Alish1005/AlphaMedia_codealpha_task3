import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState} from 'react';



function Post(props) {
    const { username ,postText,postTime,likeCounter,commentCounter,postImg,userImg } = props;
   const [like,setLike]=useState(likeCounter);
   const [isLike,setIsLike]=useState(false);
    const onClickLike=()=>{
        if(isLike){
            setLike(like-1);
        }else{
            setLike(like+1);
        }
        setIsLike(!isLike);
    }
    return ( 
        <div>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className="postProfileImg" src={userImg} alt="" />
                            <span className="postUsername">{username}</span>
                            <span className="postDate">{postTime}</span>
                        </div>
                        <div className="postTopRight">
                            <MoreVertIcon/>
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">{postText}</span>
                        <img src={postImg} alt="" className="postImg" />
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">
                            {!isLike?<img src="/assets/like.png" style={{transform:"rotate(0deg)" , transition:"all .5s"}} onClick={onClickLike} alt="" className="likeIcon" />:<img src="/assets/like.png" style={{animation:"transform .5s forwards,likeAni .2s forwards,notlikeAni .2s .33s forwards"}} onClick={onClickLike} alt="" className="likeIcon" />}
                            <img  src="/assets/heart.png" onClick={onClickLike} alt="" className="likeIcon" />
                            <span className="postLikeCounter">{like} people like it</span>
                        </div>
                        <div className="postBottomRight">
                            <span className="postCommonText">{commentCounter} comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
Post.defaultProps = {
    username: 'Guest', 
    postTime:'Just now',
    postText:' ',
    likeCounter:0,
    commentCounter:0,
    postImg:'',
    userImg:'/assets/p.jpg',
  };
export default Post;