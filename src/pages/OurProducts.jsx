const OurProducts = ({ language }) => {

    return (
        <div>
            {language === 'en' ? (
                <>
                    <h3>first color</h3>


                </>
            ) : (
                <>
                    <h3>third color</h3>

                </>
            )}


        </div>
    )
}

export default OurProducts