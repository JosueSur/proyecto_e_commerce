import React from "react";
import ItemListContainer from "../containers/ItemListContainer";

function Landing() {
    return (
        <div className="flex items-center justify-center min-h-[80vh] px-8">
            <ItemListContainer mensaje="¡Bienvenido a GlutenFree! Descubre nuestros productos sin gluten." />
        </div>
    );
}

export default Landing;
