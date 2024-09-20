import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import "../styles/components/socialnetworks.sass"
const socialNetworks = [
    {name: "linkedin",valor: "https://www.linkedin.com/in/jose-antonio-nascimento-957124211/" ,  icon: <FaLinkedin/>},
    {name: "github", valor: "https://github.com/Antonio-Nasc?tab=repositories", icon: <FaGithub/>},
    {name: "instagram", valor: "https://www.instagram.com/antonio__nasc/", icon: <FaInstagram/>}
]
const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.valor} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))
        }
    </section>
  )
}

export default SocialNetworks
