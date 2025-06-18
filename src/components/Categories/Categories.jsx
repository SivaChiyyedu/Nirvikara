import vegetables from '../../assets/vegetables.jpg';
import fruits from '../../assets/Fruits.jpg';
import nuts from '../../assets/Nuts.jpg';
import './Categories.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight  } from "react-icons/md";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


function Categories() {

    return (
        <>
        <div className="categories-wrapper">
            <div className="category-heading-div">
                 <div>
            <h2 >Category</h2>
           </div>
                <div className='category-view'>
                    <h4>View All</h4>
                  
                   
                    <button> <MdKeyboardArrowLeft className="arrow-icon"/></button>
                    <button><MdKeyboardArrowRight className="arrow-icon"/></button>
                </div>
            </div>
          
                
           
            
            <div className="categories-container">
                <div className="category">
                    <img src={vegetables} alt="category-vegetable" />
                    <h5>Vegetables</h5>
                </div>
                <div className="category">
                    <img src={fruits} alt="category-fruits" />
                    <h5>Fruits</h5>
                    
                </div>
                <div className="category">
                    <img src={nuts} alt="category-nuts" />
                    <h5>Nuts</h5>
                    
                </div>
            </div>
        </div>
        </>
        
    )

}

export default Categories;