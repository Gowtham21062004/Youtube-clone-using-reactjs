import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoIosMusicalNote } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { IoMdTrendingUp } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import images1 from '../src/images/pexels-case-originals-3718433.jpg'; 
import images2 from '../src/images/pexels-inderjeet-kashyap-101154808-9393464.jpg';
import images3 from '../src/images/pexels-israwmx-17724006.jpg';
import images4 from '../src/images/pexels-lesandu-alokabandara-670648380-21415112.jpg';
import images5 from '../src/images/pexels-usbofphotography-13509632.jpg';

function App() {
  return (
    <>    <div className='app'>
          <ul>
            <li><FaHome /></li>
            <li><SiYoutubeshorts /></li>
            <li><MdSubscriptions /></li>
            <li><IoIosMusicalNote /></li>
            <li><FaHistory /></li>
            <li><BiSolidLike/></li>
            <li><PiDownloadSimpleBold /></li>
            <li><IoMdTrendingUp /></li>
          </ul>
          <div className='conatainer'>
            <div className='row'>
            <nav class="navbar bg-body-tertiary">
             <div class="container-fluid">
            <form class="d-flex " role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
           </form>
          </div>
          </nav>
            </div>
            {/* <div className='row'>
              <div className='col-4'>
                <img src={images1} className='images'/>
                <p>Westindies vs Southafric | 1st t20 highlights</p>
                <p>Westindies tour of south africa</p>
                 </div>
               <div className='col-4'>
                <img src={images2} className='images'></img>
               </div>
               <div className='col-4'>
                <img src={images2} className='images'></img>
               </div>
            </div><br></br><br></br>
            <div className='row'>
              <div className='col-4'>
                <img src={images4} className='images'/>
                 </div>
               <div className='col-4'>
                <img src={images5} className='images'></img>
               </div>
               <div className='col-4'>
                <img src={images1} className='images'></img>
               </div>
            </div> */}
            <div className='row image'>
            <div className='col-4'>
              <img src={images1}  className='images'/>
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaCommentAlt  style={{width:"40px"}} />
                <FaShareAlt  style={{width:"40px"}}/>
              </div>
              <p>Olympics 2024 100 meters running</p>
              <p>1 day ago</p>   
            </div>
            <div className='col-4'>
              <img src={images2} className='images'/>
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaCommentAlt  style={{width:"40px"}} />
                <FaShareAlt   style={{width:"40px"}}/>
              </div>
              <p>world longest Car drifting in the aeroplane track</p>
              <p>10 months ago</p>
            </div>
            <div className='col-4'>
              <img src={images3} className='images' />
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaCommentAlt  style={{width:"40px"}} />
                <FaShareAlt   style={{width:"40px"}}/>
              </div>
              <p>Olympics 2024  Road cycling held at Paris</p>
              <p>1 day ago</p>
            </div>
            <div className='col-4'>
              <img src={images4} className='images' />
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaCommentAlt  style={{width:"40px"}} />
                <FaShareAlt   style={{width:"40px"}}/>
              </div>
              <p>Bike Racing is the very hard or not explained by rossi ?</p>
              <p>1 day ago</p>
            </div>
            <div className='col-4'>
              <img src={images5}  className='images'/>
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaCommentAlt  style={{width:"40px"}} />
                <FaShareAlt   style={{width:"40px"}}/>
              </div>
              <p>World longest parachute driving in the year of 2024</p>
              <p>2 Years Ago</p>
            </div>
            <div className='col-4'>
              <img src={images2} className='images' />
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaCommentAlt  style={{width:"40px"}} />
                <FaShareAlt   style={{width:"40px"}}/>
              </div>
              <p>World fastest game ice hockey or hockey ?</p>
              <p>1 years ago</p>
            </div>
            <div className='col-4'>
              <img src={images2} className='images' />
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaCommentAlt  style={{width:"40px"}} />
                <FaShareAlt   style={{width:"40px"}}/>
              </div>
              <p>India vs australia test series , india won by 333 runs.</p>
              <p>55 minutes ago</p>
            </div>
            <div className='col-4'>
              <img src={images2}  className='images'/>
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaCommentAlt  style={{width:"40px"}} />
                <FaShareAlt   style={{width:"40px"}}/>
              </div>
              <p>The heaviest sports in the world base ball or wrestling ?</p>
              <p>2 days ago</p>
            </div>
            <div className='col-4'>
              <img src={images2}  className='images'/>
              <div className='social'>
                <AiFillLike  style={{width:"40px"}}/>
                <FaCommentAlt  style={{width:"40px"}} />
                <FaShareAlt   style={{width:"40px"}}/>
              </div>
              <p>The heaviest sports in the world base ball or wrestling ?</p>
              <p>2 days ago</p>
            </div>
            
          </div>
          </div>
          </div>
    </>
  );
}

export default App;
