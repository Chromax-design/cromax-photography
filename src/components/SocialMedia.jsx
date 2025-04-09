import React from 'react'
import { FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from 'react-icons/fa6'

const socialLinks = [
    {
        icon: <FaTiktok />,
        link: "#"
    },
    {
        icon: <FaWhatsapp />,
        link: "#"
    },
    {
        icon: <FaInstagram />,
        link: "#"
    },
    {
        icon: <FaLinkedin />,
        link: "#"
    },
]

const SocialMedia = ({ uniqueClass = '', color = 'text-white/45' }) => {
    return (
        <div className={`flex gap-5 text-xl items-center ${uniqueClass} ${color}`}>
            {
                socialLinks.map(({ icon, link }, i) => {
                    return (<a href={link} className=' hover:scale-110 cursor-pointer transition-transform' key={i} target='_blank' rel='noopener noreferrer'>
                        {icon}
                    </a>)
                })
            }
        </div>
    )
}

export default SocialMedia