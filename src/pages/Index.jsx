const Index = ({ language }) => {

    return (
        <div className="index">
            {language === 'en' ? (
                <>
                    <h1>first color</h1>


                </>
            ) : (
                <>
                    <h1>primer color</h1>


                </>
            )}
            <h2>second color</h2>
            <h3>third color</h3>

        </div>
    )
}

export default Index