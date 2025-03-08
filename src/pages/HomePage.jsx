import Carousel from "../components/Carousel/Carousel"
import FeatureCollections from "../components/FeartureCollections/FeatureCollections"
import NewArrival from "../components/New Arrival/NewArrival"
import Subscription from "../components/Subscription/Subscription"

const HomePage = () => {
  return (
    <div>
        <Carousel/>
        <NewArrival/>
        <FeatureCollections/>
        <Subscription/>
    </div>
  )
}

export default HomePage