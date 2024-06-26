const OurProducts = ({ language }) => {

    return (
        <div>
            {language === 'en' ? (
                <>
                    <p className="textoproductos">"Our products" under construction</p>


                </>
            ) : (
                <>
                    <p className="textoproductos">"Nuestros productos" en construcción</p>

                </>
            )}

            {language === 'en' ? (
                <>
                    <h1 className="firstColor">first color</h1>


                </>
            ) : (
                <>
                    <h1 className="firstColor">primer color</h1>


                </>
            )}
            <h2 className="secondColor">second color</h2>
            <h3 className="thirdColor"> third color</h3>
        </div>
    )
}

export default OurProducts