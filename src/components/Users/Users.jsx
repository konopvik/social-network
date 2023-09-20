import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
            followed: false,
            fullName: 'Viktor',
            status: 'Bo$$',
            location: {city: 'Praha', country: 'CZ'}
        },
            {
                id: 2,
                photoUrl: 'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
                followed: false,
                fullName: 'Oleh',
                status: 'Bo$$',
                location: {city: 'Jihlava', country: 'CZ'}
            },
            {
                id: 3,
                photoUrl: 'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
                followed: true,
                fullName: 'Max',
                status: 'Bo$$',
                location: {city: 'Dnipro', country: 'Ukraine'}
            },
            {
                id: 4,
                photoUrl: 'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
                followed: true,
                fullName: 'Dmitry',
                status: 'Bo$$',
                location: {city: 'Minsk', country: 'Belarus'}
            },
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div></span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;