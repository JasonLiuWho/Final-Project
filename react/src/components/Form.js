import { MdOutlineAttachEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

// this is where the form is created
const Form =( { formData, handleChange, handleSubmit } )=> {

    return(
        <main className="main" id="formMain">
            <div className="container">
                <h2 className="text-center text-capitalize">create a login <FaUser className="mb-2" /></h2>
                <form id="form" className="form" 
                onSubmit={handleSubmit}>
                    <div className="col-auto">
                        <label htmlFor="fName" className="form-label text-capitalize">first name</label>
                        <input
                            type="text"
                            id="fName"
                            name="fName"
                            value={formData.fName}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="lName" className="form-label text-capitalize">last name</label>
                        <input
                            type="text"
                            id="lName"
                            name="lName"
                            value={formData.lName}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="email" className="form-label text-capitalize">email <MdOutlineAttachEmail /> </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="username" className="form-label text-capitalize">username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="password" className="form-label text-capitalize">password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3 mt-3">
                        <button type="submit" className="btn btn-info text-capitalize">
                            create login
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Form