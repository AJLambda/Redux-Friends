import React from "react";
import Friends from "./Friends";

class FriendsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.friends.map((friend, id) => {
          return <Friends friend={friend} key={id} />;
        })}
      </div>
    );
  }
}

export default FriendsList;
