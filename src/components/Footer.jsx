"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaLinkedin, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import { GrGithub } from "react-icons/gr";
import { MdOutlineWbSunny } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook size={20} />, href: "https://www.facebook.com/Md.Sadik.Ahmed.L" },
    { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/md.sadik.ahmed.l/?hl=en" },
    { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/md-sadik-ahmed-l/" },
    { icon: <GrGithub size={20} />, href: "https://github.com/md-sadik-ahmed-l" },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-sun-dark text-white pt-24 pb-12"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="space-y-8">
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                {/* <Image
                  src={"/logo.png"}
                  alt="logo"
                  width={40}
                  height={40}
                  className="invert brightness-0"
                /> */}
                <MdOutlineWbSunny className="text-3xl md:text-4xl text-orange-400"/>
              </motion.div>
              <h2 className="font-black text-4xl tracking-tight group-hover:text-sun-yellow transition-colors duration-300">
                SunCart
              </h2>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
              Your premium destination for summer essentials. We bring the sunshine to your doorstep.
            </p>
          </div>

          
          <div className="space-y-8">
            <h4 className="text-xl font-bold text-white uppercase tracking-widest">Explore</h4>
            <ul className="space-y-4 text-gray-400 text-lg">
              {["Home", "Products", "Profile"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(" ", "")}`} className="hover:text-sun-yellow hover:translate-x-2 inline-block transition-all duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="space-y-8">
            <h4 className="text-xl font-bold text-white uppercase tracking-widest">Support</h4>
            <ul className="space-y-4 text-gray-400 text-lg">
              {["Contact Us", "Shipping Policy", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-sun-yellow hover:translate-x-2 inline-block transition-all duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold text-white uppercase tracking-widest">Join the Club</h4>
            <div className="flex gap-5">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5, rotate: 10, backgroundColor: "#FFC107", color: "#001F3F" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">Stay updated with our latest summer drops.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/50 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 uppercase tracking-[0.2em] font-black">
          <p>© 2026 SUNCART. CRAFTED FOR SUMMER.</p>
          <div className="flex gap-10">
            <Link href="/privacy" className="hover:text-white transition-colors duration-300">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-300">Terms</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;