import { FaBriefcase } from "react-icons/fa";
import { FaGlobe, FaUsers } from "react-icons/fa6";

export const navLinks = [
  { id: "Home", title: "Home", url: "/" },
    { id: "products", title: "Products", url: "/productpg" },
    { id: "services", title: "Services", url: "#" },
    { id: "about", title: "About Us", url: "/aboutpg" },
    { id: "contact", title: "Contact Us", url: "/contactpg" },
  ];
  // src/constants/products.js

export const categories = [
    {
      title: "Stationery & Office Supplies",
      description: "High-quality stationery and office supplies",
    },
    {
      title: "Custom Invitations & Printing",
      description: "Elegant designs for personal and corporate events",
    },
    {
      title: "Website Development ",
      description: "Transforming Ideas into Digital Success.",
    },
    {
      title: "ALL Categories ",
      description: "View All Categories",
    },
  ];
  
  export const products = [
    {
      id: 1,
      name: "Luxury Gold Watch",
      price: "120,000 RWF",
      image: "https://images.pexels.com/photos/3829441/pexels-photo-3829441.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Elegant Silver Watch",
      price: "100,000 RWF",
      image: "https://images.pexels.com/photos/3779780/pexels-photo-3779780.jpeg",
    },
    {
      id: 3,
      name: "Classic Leather Wallet",
      price: "45,000 RWF",
      image: "https://images.pexels.com/photos/3780680/pexels-photo-3780680.jpeg",
    },
    {
      id: 4,
      name: "Business Laptop Bag",
      price: "75,000 RWF",
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
    },
    {
      id: 5,
      name: "Premium Office Notebook",
      price: "15,000 RWF",
      image: "https://images.pexels.com/photos/262023/pexels-photo-262023.jpeg",
    },
    {
      id: 6,
      name: "Customized Invitation Cards",
      price: "50,000 RWF",
      image: "https://images.pexels.com/photos/11503484/pexels-photo-11503484.jpeg",
    },
    {
      id: 7,
      name: "Wireless Bluetooth Earbuds",
      price: "85,000 RWF",
      image: "https://images.pexels.com/photos/983826/pexels-photo-983826.jpeg",
    },
    {
      id: 8,
      name: "Smartphone Stand & Holder",
      price: "30,000 RWF",
      image: "https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg",
    },
  ];

   export const CONTACT_INFO = {
    title: "Get in Touch",
    description: "Smartlink Station – Bridging the Gap, One Message at a Time!",
    location: "Rwanda, Southern Province, Muhanga",
    email: "inezalinker@gmail.com",
    phone: "+250-783-653-651",
  };

  // External Data Constants
 export const teamMembers = [
  { name: "Linda Amandine", role: "Operations Manager" },
  { name: "Linker Arlene", role: "Creative Lead" },
  { name: "Mugisha Crispin", role: "Procurement Manager" },
];

 export const expertiseAreas = [
  { title: "Work & Study Essentials", description: "High-quality stationery and office supplies" },
  { title: "Custom Invitations", description: "Elegant designs for personal and corporate events" },
  { title: "Website Development", description: "Professional, user-friendly digital solutions" },
  {
    title: "ALL Categories ",
    description: "View All Categories",
  },
];
export const companyValues = [
  { 
    title: "Vision", 
      icon: <FaGlobe className="w-8 h-8 text-white mx-auto mb-3" />, 
    description: [
      "Innovative solutions in stationery",
      "Creative invitation designs",
      "Advanced digital development services"
    ]
  },
  { 
    title: "Mission", 
       icon: <FaBriefcase className="w-8 h-8 text-white mx-auto mb-3" />, 
    description: [
      "Deliver high-quality stationery",
      "Provide personalized invitations",
      "Enhance digital solutions for users"
    ]
  },
  { 
    title: "Goals", 
   
    icon: <FaUsers className="w-8 h-8 text-white mx-auto mb-3" />, 
    description: [
      "Ensure premium-quality products",
      "Deliver tailored and innovative solutions",
      "Provide outstanding customer service",
      "Support growth through digital tools"
    ]
  }
];

// Team Member Component
export const TeamMember = ({ name, role }) => (
  <div className="bg-[#071739] mb-5 pb-6 rounded-xl  shadow-2xl text-center max-w-sm mx-auto border border-[#071739] h-80 flex flex-col justify-between">
  <div className="w-full h-56 overflow-hidden rounded-t-xl ">
    <img 
      src="https://images.pexels.com/photos/8250982/pexels-photo-8250982.jpeg" 
      alt="contactimage" 
      className="w-full h-full object-cover"
    />
  </div>
  <div>
    <h3 className="text-xl font-semibold text-gray-200">{name}</h3>
    <p className="text-gray-400 text-sm">{role}</p>
  </div>
</div>
);
// FormFields.js

export const SIGNUP_FIELDS = [
  { name: 'name', type: 'text', placeholder: 'Enter your full name' },
  { name: 'email', type: 'email', placeholder: 'Enter your email address' },
  { name: 'password', type: 'password', placeholder: 'Enter your password' }
];

export const LOGIN_FIELDS = [
  { name: 'email', type: 'email', placeholder: 'Enter your email address' },
  { name: 'password', type: 'password', placeholder: 'Enter your password' }
];



  
  