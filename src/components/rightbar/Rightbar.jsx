import "./rightbar.css"

function Rightbar({ profile }) {
    const HomeRightbar = () => {
    return (  
        <div className="rightbarWrapper">
            <div className="birthdayContainer">
                <img src="/assets/gift.png" alt="" className="birthdayImg" />
                <span className="birthdayText">
                    <strong>Pola Foster</strong> and <strong>3 other friends</strong> have a birthday today
                </span>
            </div>
            <img src="/assets/ad.png" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendsList">
                <li className="rightbarFriend">
                    <div className="rightbarImgContainer">
                        <img src="/assets/person/6.jpeg" alt="" className="rightbarProfileImg" />
                        <span className="rightbarOnline"></span>
                    </div>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarImgContainer">
                        <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                        <span className="rightbarOnline"></span>
                    </div>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarImgContainer">
                        <img src="/assets/person/8.jpeg" alt="" className="rightbarProfileImg" />
                        <span className="rightbarOnline"></span>
                    </div>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarImgContainer">
                        <img src="/assets/person/5.jpeg" alt="" className="rightbarProfileImg" />
                        <span className="rightbarOnline"></span>
                    </div>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarImgContainer">
                        <img src="/assets/person/2.jpeg" alt="" className="rightbarProfileImg" />
                        <span className="rightbarOnline"></span>
                    </div>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarImgContainer">
                        <img src="/assets/person/9.jpeg" alt="" className="rightbarProfileImg" />
                        <span className="rightbarOnline"></span>
                    </div>
                </li>
                <span> + 15 others</span>
            </ul>
        </div>
    );
    };

    const ProfileRightbar = () => {
        return (
          <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">New York</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">Madrid</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">Single</span>
              </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img
                  src="assets/person/1.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/person/2.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/person/3.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/person/4.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/person/5.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/person/6.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
            </div>
          </>
        );
      };
      return (
        <div className="rightbar">
          
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
          
        </div>
      );
}

export default Rightbar;