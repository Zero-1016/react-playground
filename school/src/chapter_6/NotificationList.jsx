import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "😀안녕하세요, 오전 9시 출근하셔야 합니다.",
  },
  {
    id: 2,
    message: "😤준비하세요, 10시 30분 아침회의가 있습니다.",
  },
  {
    id: 3,
    message: "🫢조금 더 기다리면, 이제 12시 점심시간이 시작됩니다.",
  },
  {
    id: 4,
    message: "😥15시 00분, 팀장님이 추가 업무를 나눠줍니다.",
  },
  {
    id: 5,
    message: "🥲18시 00분 오늘도 정시 퇴근은 힘들꺼 같습니다.",
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        clearInterval(timer);
        // this.setState({
        //   notifications: [],
        // });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
