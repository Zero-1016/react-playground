function Mailbox(props) {
    const unreadMessages = props.unreadMessages;

    return (
        <div>
            <h1>안녕하세요!</h1>
            {unreadMessages.length > 0 && <h2>현재{unreadMessages.length}</h2>}
        </div>
    );
}
