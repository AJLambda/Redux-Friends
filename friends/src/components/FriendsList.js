import React from "react";
import Friends from "./Friends";

class FriendsList extends React.Component {
  render() {
    console.log(this.props.friends);
    return (
      <div>
        {this.props.friends.map(friend => {
          return <Friends friend={friend} />;
        })}
      </div>
    );
  }
}

export default FriendsList;
