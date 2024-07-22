// import githubLogo from "../../assets/logos/github1.svg";
// import linkedinLogo from "../../assets/logos/linkedin.svg";
// import twitterLogo from "../../assets/logos/twitter.svg";
// import instagramLogo from "../../assets/logos/instagram.svg";

// const socials = [
//   { src: linkedinLogo, alt: "Linkedin", link: "/" },
//   { src: githubLogo, alt: "Github", link: "/" },
//   { src: twitterLogo, alt: "Twitter", link: "/" },
//   { src: instagramLogo, alt: "Instagram", link: "/" },
// ];

// interface ISocial {
//   src: string;
//   alt: string;
//   link: string;
// }

// bg-[linear-gradient(to_right,#623cea,#623cea,#aeadf0,#623cea)]

const Footer = () => {
  return (
    <footer>
      <div className="bg-slate-800 py-4 h-fit text-white">
        <div className="flex justify-between items-center container">
          <p className="md:inline hidden font-medium text-[14px] capitalize tracking-tight">
            All rights reserved &copy; 2024
          </p>
          {/* <div className="flex justify-center items-center gap-5">
            {socials.map((social: ISocial) => (
              <div className="border-2 border-slate-700 p-[6px] rounded-lg">
                <div className="w-[20px] h-[20px] cursor-pointer overflow-hidden">
                  <img
                    src={social.src}
                    alt={social.alt}
                    className="flex-none w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
