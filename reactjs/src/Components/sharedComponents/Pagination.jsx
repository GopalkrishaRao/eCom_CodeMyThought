import React from 'react';
import { Link } from 'react-router-dom';


function Pagination() {
  return (
   <>
   <nav aria-label="..." className="cr-pagination">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">1</span>
                  </li>
                  <li className="page-item"><Link to='/' className="page-link" >2</Link></li>
                  <li className="page-item"><Link to='/' className="page-link" >3</Link></li>
                  <li className="page-item">
                    <Link to='/' className="page-link" >Next</Link>
                  </li>
                </ul>
              </nav>
   </>
  )
}



export default Pagination
