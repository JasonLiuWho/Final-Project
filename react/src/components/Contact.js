import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact =()=> {

    return (
        <main className="contactMain" id="contactMain">
            <div className="container">
                <h2 className="contactTitle text-capitalize text-center mt-4">contact us</h2>
                <div className="row">
                    <div className="col-md-5 mt-4">
                        <div className="location mt-4">
                            <h3 className="text-capitalize text-center"><FaLocationDot /> location: 119 N State street, Jackson, Ms</h3>
                        </div>
                        <div className="email mt-4">
                            <h3 className="text-center"><MdOutlineEmail /> Email: NoManga123@gmail.com</h3>
                        </div>
                        <div className="phone mt-4">
                            <h3 className="text-capitalize text-center"><FaPhoneAlt /> phone number: 123-456-7890</h3>
                        </div>
                    </div>
                    <div className="col-md-7 mt-4 d-flex justify-content-center">
                        <iframe width="400" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=600&amp;hl=en&amp;q=119%20North%20State%20Street,%20Jackson,%20Mississippi+(No%20Mangas)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact