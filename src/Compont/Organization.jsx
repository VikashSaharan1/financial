import  React from "react";

const profileStyle = {
    border:'none',
    borderRadius:'17px',
    padding:'0px',
    backgroundColor:'#fff',
    boxShadow:'0px 3px 12px #00000029',
    marginTop:'50px',
    marginBottom:'50px',
}
const Organization = () =>{
    return(
        <>
            <div className="profile">
                <div className="container" style={profileStyle}>
                    <h1>Organization Profile</h1>
                    <form>
                        <div className="row" style={{margin:'0px'}}>
                            <div className="profile-orgn">
                                <div className="form-group col-12">
                                    <label>Photo:</label>
                                    <input type="file" />
                                </div>
                                <div className="form-group col-12">
                                    <label>Organization Name</label>
                                    <input type="text" />
                                </div>
                                <div className="form-group col-12">
                                    <label>Director Name</label>
                                    <input type="text" />
                                </div>
                                <div className="form-group col-12">
                                    <label>Aadhar Photo</label>
                                    <input type="file" />
                                </div>
                                <div className="form-group col-12">
                                    <label>PAN Card Photo</label>
                                    <input type="file" />
                                </div>
                                <div className="form-group col-12">
                                    <label>Signature Photo</label>
                                    <input type="file" />
                                </div>
                                <div className="form-group col-12">
                                    <label>Capital Amount</label>
                                    <input type="number" />
                                </div>
                                <div className="form-group col-12">
                                    <label>Address</label>
                                    <textarea />
                                </div>
                                <div className="col-12 submits">
                                    <input type="submit" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Organization;