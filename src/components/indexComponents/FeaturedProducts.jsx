const FeaturedProducts = ({ language }) => {

    return (

        <div className="leftColumn">

            <div className="pumpFeatured">

                {language === 'en' ? (
                    <>
                        <h3 className="titleFeaturedProducts">FEATURED PRODUCTS</h3>
                        <h4>High pressure pumps</h4>
                    </>
                ) : (
                    <>
                        <h3 className="titleFeaturedProducts">PRODUCTOS DESTACADOS</h3>
                        <h4>Bombas de alta presión</h4>
                    </>
                )}

                <div className="pumpFeaturedImage" />

                {language === 'en' ? (

                    <p>
                        Alternative volumetric pumps, with three horizontal plungers:
                        <li className="productFeaturedText">345 Series (50HP)</li>
                        <li>3100 Series (100HP)</li>
                        <li>3150 Series (150HP)</li>
                        <li>3200 Series (200HP)</li>
                    </p>

                ) : (
                    <p>
                        Bombas volumétricas alternativas con 3 pistones en disposición horizontal:
                        <li className="productFeaturedText">Serie 345 (50CV)</li>
                        <li>Serie 3100 (100CV)</li>
                        <li>Serie 3150 (150CV)</li>
                        <li>Serie 3200 (200CV)</li>
                    </p>

                )}

                <div className="buttonContainer">

                    {language === 'en' ? (

                        <a href="LINK" className="buttonFeaturedProduct">I want to know more</a>

                    ) : (

                        <a href="LINK" className="buttonFeaturedProduct">Quiero saber más</a>

                    )}
                </div>

            </div>

            <div className="equipmentsFeatured">

                {language === 'en' ? (
                    <>
                        <h4>Equipments</h4>
                    </>
                ) : (
                    <>
                        <h4>Equipamientos</h4>
                    </>
                )}

                <div className="equipmentsFeaturedImage" />

                {language === 'en' ? (

                    <p>
                        Equipment manufactured by hydraulic, electric or diesel motors.
                        With various chassis options: Stacionary, small wheels and trailer pneumatic wheels.
                        And other much accesories.
                    </p>

                ) : (
                    <p>
                        Equipos con motor eléctrico, diesel o hidráulico. Con chasis estacionario,
                        ruedas pequeñas, grandes o tipo remolque.
                    </p>
                )}

                <div className="buttonContainer">

                    {language === 'en' ? (

                        <a href="LINK" className="buttonFeaturedProduct">I want to know more</a>


                    ) : (

                        <a href="LINK" className="buttonFeaturedProduct">Quiero saber más</a>

                    )}
                </div>

            </div>


        </div>
    )
}

export default FeaturedProducts