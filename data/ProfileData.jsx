import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";

const Profile = {
  firstName: "Md Rehanul",
  lastName: "Haque",
  position: {
    text: 'Currently Student @BDC',
    icon: <PiStudentBold/>
  },
  location: { text: "Rishra, Kolkata INDIA", icon: <GrLocation/> },
  summary:
    "Hi there! I'm Rehan. I'm a passionate MERN full-stack developer currently exploring the fascinating realm of Python. When I'm not coding, you'll find me on the football field or engaging in invigorating exercises. I'm also an avid bookworm, constantly diving into new worlds through literature. Explore my website to learn more about my journey and interests.",
  tags: [
    { name: "Full Stack", id:1 },
    { name: "Javascript", id:2 },
    { name: "React", id:3 },
    { name: "Python", id:4 },
  ],
  avatar: {
    srcPath: "/images/profile.jpg",
    caption: "Rehan",
  },
  socialLink: [
    {
      id: 1,
      url: "https://instagram.com/rehan_._cr",
      icon: <FaInstagram/>,
    },
    {
      id: 2,
      url: "https://github.com/rehanulHaque",
      icon: <FaGithub/>,
    },
    {
      id: 3,
      url: "https://twitter.com/MdRehan_CR",
      icon: <FaTwitter/>,
    },
    {
      id: 4,
      url: "https://www.linkedin.com/in/mdrehanulhaque1/",
      icon: <FaLinkedin/>,
    },
  ],
};

export default Profile