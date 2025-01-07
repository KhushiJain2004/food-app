import './Footer.css';
import {Form} from 'react-router-dom';
export default function Footer()
{
    return (
        <div className='footer' id='contactRef'>
            <hr />
            <div className='footer-top'>
                <div className="contact-info">
                <h1>Contact Us</h1>
                    <div className="info">
                        <p><b>Email</b></p>   
                        <p>contact@munchmate.com</p>
                    </div>
                    <div className="info">
                        <p><b>Phone</b></p>
                        <p>+91 1234567890</p>
                    </div>
                    <div className="info">
                        <p><b>Address</b></p>
                        <p> 123 Food Street, Dehradun</p>
                    </div>
                </div>
                <div className="msg">
                    <h3 >Send us a message!</h3>
                    <Form className='msg-form'>
                        <input type="text" placeholder='Your Name' required />
                        <input type="email" placeholder='Your Email' required/>
                        <textarea name="msg" id="" placeholder='Your message' required></textarea>
                        <button>Submit</button>
                    </Form>

                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 MunchMate. All rights reserved.</p>
            </div>
        </div>
    )
}