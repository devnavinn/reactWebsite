import React, { useState } from 'react';
import '../css/Profile.css';
import profileInfo from "./assets/ProfileData";
const [profile1, profile1logo, profile2, profile2logo, profile3, profile3logo, profile4, profile4logo, profile5, profile5logo, profile6, profile6logo] = profileInfo;
export default function Profile() {
    const [checked, setChecked] = useState(-1);
    const [id, setId] = useState(0);
    const [isclicked, setIscliked] = useState(false);

    const cards = [
        {
            profileImg: profile1,
            logo: profile1logo,
            name: "Madhukar Singh",
            education: "PHD holder in Machine Learning",
            experience: "10+ years of experience",
            content: "Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ",

        },
        {
            profileImg: profile2,
            logo: profile2logo,
            name: "Madhukar Singh",
            education: "PHD holder in Machine Learning",
            experience: "10+ years of experience",
            content: "Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ",

        },
        {
            profileImg: profile3,
            logo: profile3logo,
            name: "Madhukar Singh",
            education: "PHD holder in Machine Learning",
            experience: "10+ years of experience",
            content: "Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ",

        },
        {
            profileImg: profile4,
            logo: profile4logo,
            name: "Madhukar Singh",
            education: "PHD holder in Machine Learning",
            experience: "10+ years of experience",
            content: "Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ",

        },
        {
            profileImg: profile5,
            logo: profile5logo,
            name: "Madhukar Singh",
            education: "PHD holder in Machine Learning",
            experience: "10+ years of experience",
            content: "Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ",

        },
        {
            profileImg: profile6,
            logo: profile6logo,
            name: "Madhukar Singh",
            education: "PHD holder in Machine Learning",
            experience: "10+ years of experience",
            content: "Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ",

        },
    ];

    const handleClick = (index) => {
        if (checked == index)
            setChecked(-1)
        else
            setChecked(index)

        setIscliked((preValue) => {
            return !preValue;
        })
        setId(index);
    }

    return (
        <div className='profiles-info'>

            {
                cards.map((profile, index) => {
                    if ((checked == -1) || (index == 0))
                        return (
                            <div className="profile-container" key={index}

                                onClick={() => { handleClick(index) }}>
                                <div className='profile-pic'>
                                    <img className="profile-img" src={profile.profileImg} alt='profile' />
                                    <div className='profile-logo'>
                                        <img className="logo" src={profile.logo} alt='profile' />
                                    </div>

                                </div>
                                {id == index &&
                                    <div className="profile-desc1 "   >
                                        <div className="desc-header">
                                            <h2 style={{ "margin": "1%" }}>{profile.name}</h2>
                                            <p style={{ "margin": "1%" }}>{profile.education}</p>
                                            <p style={{ "margin": "1%" }}>{profile.experience}</p>
                                        </div>
                                        <div style={{ "margin-top": "6%" }} className="desc-button">
                                            <p>{profile.content}</p>
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    else if ((index <= checked)) {
                        return (
                            <div className="profile-container" key={index} onClick={() => { handleClick(index) }}
                                style={{ transform: `translate3d(-${index * 40}%, 0, -480px)` }}>
                                <div className='profile-pic'>
                                    <img className="profile-img" src={profile.profileImg} alt='profile' />
                                    <div className='profile-logo'>
                                        <img className="logo" src={profile.logo} alt='profile' />
                                    </div>

                                </div>
                                {id == index &&
                                    <div className="profile-desc1 "   >
                                        <div className="desc-header">
                                            <h2 style={{ "margin": "1%" }}>{profile.name}</h2>
                                            <p style={{ "margin": "1%" }}>{profile.education}</p>
                                            <p style={{ "margin": "1%" }}>{profile.experience}</p>
                                        </div>
                                        <div style={{ "margin-top": "6%" }} className="desc-button">
                                            <p>{profile.content}</p>
                                        </div>
                                    </div>
                                }

                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="profile-container" key={index} onClick={() => { handleClick(index) }}
                                style={{ transform: `translate3d(${(cards.length - 1 - index) * 40}%, 0, -480px)` }}>
                                <div className='profile-pic'>
                                    <img className="profile-img" src={profile.profileImg} alt='profile' />
                                    <div className='profile-logo'>
                                        <img className="logo" src={profile.logo} alt='profile' />
                                    </div>

                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    );

}