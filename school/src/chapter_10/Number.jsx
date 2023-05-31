function NumberList(props) {
    const { numbers } = props;

    const listItems = numbers.map((number, index) => <li key={index}>{number}</li>);

    return <ul>{listItems}</ul>;
}

export default NumberList;
