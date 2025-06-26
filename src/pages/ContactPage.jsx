import Footer from '../components/Footer/Footer';
import '/src/styles/Pages.css';
const ContactPage = () =>
{
    return (
      
         
        <div className="container"> 
        <div className='other'>
            <h1 id ="b">
  <b id ="b">contact Us</b>
</h1>
<p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help</p>

<h1>General Enquiries</h1>

<p><b>Vivekanand College Main Campus</b></p>

<p>[Your College Full Address Here, e.g.,<br /> Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
India</p>

<p>Phone: **+91 12345 67890** <br />
Email: **info@vivekanandcollege.edu** <br />
Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p><br />


<h2 id="b">Admissions Office</h2>
<p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
            <p>Phone: +91 98765 43210</p>
            <p>Email: admissions@vivekanandcollege.edu</p>
 <h2>Student Support Services</h2>
<p>For current student support, academic advising, or general assistance:
Phone: +91 87654 32109
Email: studentsupport@vivekanandcollege.edu</p>
<h2>Find Us on the Map</h2>
 <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
 <a href="https://maps.app.goo.gl/fCgjaUn3MzvH9aXU9" class="map">View on Google Maps</a>
<h2>Send Us a Message</h2>
 <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
<input id="a" type="text"  name="Name" placeholder="enter your name"/><br />
 <input type="email"  name="email" placeholder="enter your Email" /> <br />
  <input type="number"  name="Subject" placeholder="youe subject"/> <br/>
   <Footer/>
</div>
</div>
 
 

   
)

}
export default ContactPage;