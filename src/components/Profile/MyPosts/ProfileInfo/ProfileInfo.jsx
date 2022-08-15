import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                    alt="text"
                    height='300px'
                />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    );
};

export default ProfileInfo;
