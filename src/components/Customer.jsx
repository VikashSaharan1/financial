import React from "react";

const profileStyle = {
    border:'none',
    borderRadius:'17px',
    padding:'0px',
    backgroundColor:'#fff',
    boxShadow:'0px 3px 12px #00000029',
    marginTop:'50px',
    marginBottom:'50px',
}
const Customer = () =>{
    
    return(
        <>
            <div className="profile">
                <div className="container" style={profileStyle}>
                    <h1>Customer Profile</h1>
                    <form>
                        <div className="row" style={{margin:'0px'}}>
                            <div className="profile-orgn">
                                <div className="form-group col-12">
                                    <label>Photo:</label>
                                    <input type="file" />
                                </div>
                                <div className="form-group col-12">
                                    <label>Name</label>
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
                                    <label>Loan Amount</label>
                                    <input type="number" />
                                </div>
                                <div className="form-group col-12">
                                    <label>Loan Approval Amount</label>
                                    <input type="number" />
                                </div>
                                <div className="form-group col-12">
                                    <label>Time Period Loan Amount</label>
                                    <select>
                                        <option>10 Days</option>
                                        <option>20 Days</option>
                                        <option>30 Days</option>
                                        <option>40 Days</option>
                                        <option>50 Days</option>
                                        <option>60 Days</option>
                                        <option>70 Days</option>
                                        <option>80 Days</option>
                                        <option>90 Days</option>
                                        <option>100 Days</option>
                                    </select>
                                </div>
                                <div className="form-group col-12">
                                    <label>Total EDI/EMI</label>
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

export default Customer;