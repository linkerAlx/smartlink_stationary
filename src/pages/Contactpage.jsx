import { CONTACT_INFO } from "../Constants";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLocationDot, FaPhone, FaWhatsapp } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#CDD5DB] flex flex-col items-center mt-16 text-[#071739]">
      <div  className="w-full relative">
        <img src="https://images.pexels.com/photos/5372504/pexels-photo-5372504.jpeg" alt="contactimage" className="h-96 w-full object-cover" />
      </div>

      <div className="w-full max-w-4xl mb-2 bg-[#CDD5DB] shadow-lg rounded-lg overflow-hidden -mt-20 mx-auto p-6 relative z-10">
        <div className=" text-[#A68868] text-center text-xl font-bold">
          Contact Us
        </div>
        <div className="flex flex-col md:flex-row p-6">
          {/* Contact Info */}
          <div className="w-full md:w-1/2 bg-[#A4B5C4] p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">{CONTACT_INFO.title}</h2>
            <p className="text-gray-700">{CONTACT_INFO.description}</p>
            <div className="mt-4">
              <p className=" font-bold ">Location</p>
              <p className="flex items-center"><span className="mr-2"> <FaLocationDot className="mr-2" /></span>{CONTACT_INFO.location}</p>
              <p className=" font-bold ">Email us</p>
              <p className="flex items-center mt-2"><span className="mr-2"> <MdEmail className="mr-2" /></span> {CONTACT_INFO.email}</p>
              <p className=" font-bold ">Call us</p>
              <p className="flex items-center mt-2"><span className="mr-2"><FaPhone className="mr-2" /></span>{CONTACT_INFO.phone}</p>
            </div>
            <p className="mt-2">Follow us to the social media</p>
            <div className="mt-2 flex space-x-4">
              <a href="#" > <FaWhatsapp className='text-green-950 w-10 h-10' />
                             </a>
              <a href="#" > <FaInstagram className='text-pink-800 w-10 h-10' /></a>
            </div>
          </div>
          {/* Contact Form */}
          <div className="w-full md:w-1/2 p-6 ">
            <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-md" />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" />
              <input type="text" placeholder="Subject" className="w-full px-4 py-2 border rounded-md" />
              <textarea 
    placeholder="Message" 
    className="w-full px-4 py-2 border rounded-md h-32"
  ></textarea>
              <button className="w-full bg-[#071739] font-bold text-[#A68868] py-2 rounded-md hover:bg-[#A4B5C4]">SEND</button>
            </form>
          </div>
        </div>
      </div>
       
      {/* Map Information */}
<div className="w-full">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15948.831532104425!2d29.773292476900153!3d-2.0727235727171913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dcca069bdd9737%3A0x7b43e570103a0bc1!2sNyamabuye!5e0!3m2!1sen!2srw!4v1735912717741!5m2!1sen!2srw"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-52"
  ></iframe>
</div>
    </div>
  );
};

export default ContactPage;
