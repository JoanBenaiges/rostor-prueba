import FeaturedProducts from "../components/indexComponents/FeaturedProducts"




const Index = ({ language }) => {

    return (
        <div className="index">
            <FeaturedProducts language={language} />

        </div>
    )
}

export default Index