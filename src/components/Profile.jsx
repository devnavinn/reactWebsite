import React, { useState } from 'react';
import '../css/Profile.css';
import profileInfo from "./assets/ProfileData";
import ProfileCard from './ProfileCard';
const [profile1, profile1logo, profile2, profile2logo, profile3, profile3logo, profile4, profile4logo, profile5, profile5logo, profile6, profile6logo] = profileInfo;
export default function Profile() {
    const [cards, setCards] = useState([
        {
            profileImg: profile1,
            logo: profile1logo,
            name: "Madhukar Singh",
            education: "PHD holder in Machine Learning",
            experience: "10+ years of experience",
            content: "Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ",
            isCollapsed: true,
        },
        {
            profileImg: profile2,
            logo: profile2logo,
            name: "Madhukar Singh",
            education: "PHD holder in Machine Learning",
            experience: "10+ years of experience",
            content: "Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ",
            isCollapsed: true,
        },
        {
            profileImg: profile3,
            logo: profile3logo,
            name: "Madhukar Singh",
            education: "PHD holder in Machine Learning",
            experience: "10+ years of experience",
            content: "Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ",
            isCollapsed: true,
        },
        {
            profileImg: profile4,
            logo: profile4logo,
            name: "Madhukar Singh",
            education: "PHD holder in Machine Learning",
            experience: "10+ years of experience",
            content: "Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ",
            isCollapsed: true,
        },
        {
            profileImg: profile5,
            logo: profile5logo,
            name: "Madhukar Singh",
            education: "PHD holder in Machine Learning",
            experience: "10+ years of experience",
            content: "Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ",
            isCollapsed: true,
        },
        {
            profileImg: profile6,
            logo: profile6logo,
            name: "Madhukar Singh",
            education: "PHD holder in Machine Learning",
            experience: "10+ years of experience",
            content: "Involved in the field of data mining since the early 1990s, developing algorithms, applying them to real-world problems, data analytics consulting ",
            isCollapsed: true,
        },
    ]);

    return (
        <div className='profiles-info'>
            {
                cards.map((profile, index) => {
                    return (
                        <ProfileCard
                            key={index}
                            profileImg={profile.profileImg}
                            logo={profile.logo}
                            name={profile.name}
                            education={profile.education}
                            experience={profile.experience}
                            content={profile.content}
                        />
                    )
                })
            }
        </div>
    );

}