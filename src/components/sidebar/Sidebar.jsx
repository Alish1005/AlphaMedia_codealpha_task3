import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PeopleIcon from '@mui/icons-material/People';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from "../../data.js";

function Sidebar() {
    return ( 
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <span className='sidebarListItemText'>
                            <RssFeedIcon className='sidebarIcon'/>Feed
                        </span>
                    </li>
                    <li className='sidebarListItem'>
                        <span className='sidebarListItemText'>
                            <ChatIcon className='sidebarIcon'/>Chats2
                        </span>
                    </li>
                    <li className='sidebarListItem'>
                        <span className='sidebarListItemText'>
                            <VideoLibraryIcon className='sidebarIcon'/>Videos
                        </span>
                    </li>
                    <li className='sidebarListItem'>
                        <span className='sidebarListItemText'>
                            <PeopleIcon className='sidebarIcon'/>Group
                        </span>
                    </li>
                    <li className='sidebarListItem'>
                        <span className='sidebarListItemText'>
                            <BookmarkIcon className='sidebarIcon'/>Bookmarks
                        </span>
                    </li>
                    <li className='sidebarListItem'>
                        <span className='sidebarListItemText'>
                            <HelpOutlineIcon className='sidebarIcon'/>Questions
                        </span>
                    </li>
                    <li className='sidebarListItem'>
                        <span className='sidebarListItemText'>
                            <WorkIcon className='sidebarIcon'/>Jobs
                        </span>
                    </li>
                    <li className='sidebarListItem'>
                        <span className='sidebarListItemText'>
                            <EventIcon className='sidebarIcon'/>Events
                        </span>
                    </li>
                    <li className='sidebarListItem'>
                        <span className='sidebarListItemText'>
                            <SchoolIcon className='sidebarIcon'/>Courses
                        </span>
                    </li>
                    <button className='sidebarButton'>Show More</button>
                    <hr className="sidebarHr" />
                    <ul className="sidebarFriendList">
                        {/*To print friends
                           <li className="sidebarFriend">
                            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                            <span className="sidebarFriendName">Jane Doe</span>
                           </li>*/}
                        {
                            Users.map((u)=>(
                                <li className="sidebarFriend">
                                    <img src={u.ProfilePic} alt="" className="sidebarFriendImg" />
                                    <span className="sidebarFriendName">{u.username}</span>
                                </li>
                            ))
                        }
                    </ul>

                </ul>
            </div>
        </div>
     );
}

export default Sidebar;