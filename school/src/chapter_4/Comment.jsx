import React from 'react';

const styles = {
    wrapper: {
        margin: '8px',
        padding: '8px',
        display: 'flex',
        flexDirection: 'row',
        border: '5px solid pink',
        borderRadius: 16,
        listStyle: 'none',
        backgroundColor: 'black',
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        border: '1px solid white',
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
    },
    nameText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    commentText: {
        color: 'white',
        fontSize: 16,
        fontFamily:
            "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    },
};

export default function Comment({ name, comment, profileImg }) {
    return (
        <li style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src={profileImg}
                    alt="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.image}
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{name}</span>
                <span style={styles.commentText}>{comment}</span>
            </div>
        </li>
    );
}
