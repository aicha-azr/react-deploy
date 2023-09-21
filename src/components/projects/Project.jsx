import React, { useState } from 'react';
import "./project.css";
import Menu from './Menu';

const Project = () =>{
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem)=>{
        const updatedItem=Menu.filter((curelem)=>{
            return curelem.category === categoryItem;
        });
        setItems(updatedItem);
    }
    return(
        <section className="work container section" id='project'>
            <h2 className="section__title">Recent Works Using</h2>
            
            <div className="work__filters">
                <span className="work__item" onClick={() =>{
                    setItems(Menu)
                }}>Everything</span>
                <span className="work__item" onClick={() =>
                filterItem("Using React, Javascript, Css and Html")}>React</span>
                <span className="work__item" onClick={()=>
                filterItem("Using JavaScript, Css and Html")}>JavaScript</span>
                <span className="work__item" onClick={()=>
                filterItem("Using Css and Html")}>Css</span>
            </div>

            <div className="work__container grid">
                {items.map((elem)=> {
                    const {id, image, title, link} = elem;
                    return(
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__img"/>
                                <div className="work__mask"></div>
                            </div>
                            
                            <h3 className="work__title">{title}</h3>
                            <a href={link} className="work__button">
                                <i className="icon-link work__button-icon"></i>
                            </a>
                            
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
export default Project