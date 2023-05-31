function WaringBanner(props) {
    if (!props.waring) {
        return null;
    }

    return <div>경고!</div>;
}

export default WaringBanner;
