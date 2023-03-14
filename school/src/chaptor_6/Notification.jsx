import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "fles",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    console.log(`${this.props.id} componentDidMount() .called`);
  }

  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() .called`);
  }

  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmount() .called`);
  }

  //   Unmount. 컴포넌트 생성이 끝났을때도 종료? 사라졌을때만 종료?

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}
export default Notification;
