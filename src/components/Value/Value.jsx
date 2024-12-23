import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdArrowDropDown } from "react-icons/md";
import "./Value.css";
import ValueImage from "../../assets/value1.jpg";
import data from "../../utils/Accordian";
import { useState } from "react";


const Value = () => {
    const [className, setClassName] = useState(null)
  return (
    <section className="value-wrapper">
      <div className=" paddings innerWidth flexCenter value-container">
        {/* left  */}
        <div className="value-left">
          <div className="image-container">
            <img src={ValueImage} alt="" />
          </div>
        </div>
        {/* right  */}
       <div className="flexColStart value-right">
          <span className="orangeText text-1">our value</span>
          <span className="primaryText">value we give to you</span>
          <span className="secondaryText">
            we are always ready to help by providing best service for you.
            <br />
            we believe a good place to live can make your life better.
          </span>

          {/* accordian start  */}
          <Accordion
            className="accordian"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {
            data.map((item, i) => {
               
              return (
                <AccordionItem className={`accordian-item ${className}`} key={i} uuid={i}>
                    
                  <AccordionItemHeading aria-level={1}>
                    <AccordionItemButton className="flexCenter accordian-button">
                        <AccordionItemState>
                            {({expanded})=>{
                                expanded ? 
                                setClassName("expanded")
                                :
                                setClassName("collapsed") 
                            }}
                        </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>

                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>

                </AccordionItem>
              );
            })
            }
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
