import youtube from '../../assets/youtube.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import logo from '../../assets/logoFooter.png'

const Footer = () => {
  const footerLinks = {
    home: [{ name: 'Home', href: '#' }],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Team', href: '#' }
    ],
    projects: [
      { name: 'Sandalwood', href: '#' },
      { name: 'Project 1', href: '#' },
      { name: 'Project 2', href: '#' },
      { name: 'Project 3', href: '#' },
      { name: 'Project 4', href: '#' }
    ],
    information: [
      { name: 'Blog', href: '#' },
      { name: 'FAQ', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Instagram', icon: instagram, href: '#' },
    { name: 'YouTube', icon: youtube, href: '#' },
    { name: 'Facebook', icon: facebook, href: '#' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">

          {/* Logo and Tagline - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              {/* Logo */}
              <div className="mb-4">
                <img
                  src={logo}
                  alt="Arony Farms Logo"
                  className="w-48 h-auto object-contain"
                />
              </div>
              {/* <p className="text-orange-500 font-medium text-sm">You Own We Farm</p> */}
            </div>

            {/* Tagline */}
            <div className="mt-8">
              <h3 className="text-black font-bold text-[20px] sm:text-2xl leading-tight mb-2">
                Own the Land.
              </h3>
              <h3 className="text-black font-bold text-[20px] sm:text-2xl leading-tight">
                We Farm It Naturally.
              </h3>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 ">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-24 h-24 object-contain"
                  />
                  
                </a>
              ))}
            </div>
          </div>

          {/* Home Links */}
          <div>
            <h4 className="text-[#002C11] font-bold text-[20px] mb-2">Home</h4>
            <ul className="space-y-2">
              {footerLinks.home.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[#002C11] font-bold text-[20px] mb-2">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Links */}
          <div>
            <h4 className="text-[#002C11] font-bold text-[20px] mb-2">Projects</h4>
            <ul className="space-y-2">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h4 className="text-[#002C11] font-bold text-[20px] mb-2">Information</h4>
            <ul className="space-y-2">
              {footerLinks.information.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#585858] hover:text-green-700 text-[16px] font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#585858] text-[16px] font-normal text-center sm:text-left">
            © Arony Farms. All rights reserved.
          </p>
          <p className="text-[#585858] text-[14px] text-center sm:text-right">
            Designed by <span className="text-[#035925] font-normal">KBs.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
