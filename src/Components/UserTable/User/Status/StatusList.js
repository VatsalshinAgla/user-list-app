import React from 'react';


function StatusList({ user }) {
    
    return (
        <div className="dropdown">
            <button className="btn btn-white dropdown-toggle" type="button" id="statusDropDown" data-bs-toggle="dropdown" aria-expanded="false">
                <small>
                    {user.status}
                </small>
            </button>
            <ul className="dropdown-menu" aria-labelledby="statusDropDown">
                <li>
                    <div className="dropdown-item" >
                        <small>
                            Active
                        </small>
                    </div>
                </li>
                <li>
                    <div className="dropdown-item">
                        <small>
                            Inactive
                        </small>
                    </div>
                </li>
            </ul>
        </div>
    )
}


export default StatusList