import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ItemShowcase from "../components/ItemShowcase";

export default function MenNapapijri(){
    return(
      <div className="conainer-fluid">
        <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs pageTitle={'Napapijri Salis Small Logo T-Shirt'} breadcrumbText={'Men'}  crumbTextPath={'/men'} breadcrumbDeeper={'Napapijri Salis Small Logo T-Shirt'} crumbDeeperPath={'/menNapapijri'}/>
                </div>
            </div>
        <ItemShowcase imgSrc={'./public/Images/Men-Cloth-1.jpg'} itemName={'Napapijri Salis Small Logo T-Shirt'} itemPrice={'£30.00'} />
      </div>
        
    );
}
