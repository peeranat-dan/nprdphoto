import React from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const ContactSection = props => {
    const contactList = [
        {
            icon: <MailOutlineIcon />,
            href: 'mailto:peeranatdan.photo@gmail.com',
            text: 'peeranatdan.photo@gmail.com'
        },
        {
            icon: <InstagramIcon />,
            href: 'https://www.instagram.com/nprdphoto/',
            text: '@nprdphoto'
        },
        {
            icon: <LocalPhoneOutlinedIcon />,
            href: 'tel:0837772230',
            text: '+6683-777-2230'
        },
    ];
    const myPhotoSrc = "https://firebasestorage.googleapis.com/v0/b/photography-profile.appspot.com/o/myPhoto%2FS__117637413.jpg?alt=media&token=7d05db2f-a379-4b45-96c3-4fb00fcb5d97";
    return (
        <div className="py-4 lg:py-48 px-5 lg:px-[10rem] xl:px-[20rem]">
            <div className="flex flex-col md:flex-row justify-between">
                <div>
                    <div  className="text-3xl font-semibold">Contact</div>
                    <div className="mt-8 tracking-wide">
                        {contactList.map(contact => {
                            return (
                            <div className="flex my-2 items-center" key={contact.text}>
                                <a className="bg-myGreen p-2 text-xs items-center justify-center text-white rounded-full mx-2" href={contact.href}>{contact.icon}</a>: {contact.text}
                            </div>);
                        })}
                    </div>
                </div>
                <img className="rounded-lg mt-4 lg:my-0" src={myPhotoSrc}/>
            </div>
        </div>
    );
};

export default ContactSection;