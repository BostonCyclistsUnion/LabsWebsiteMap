// SideBar layout

console.log('SideBar loaded')

import InfoSimple from './InfoSimple'
import InfoDetail from './InfoDetail'
import InfoBikeParking from './InfoBikeParking'
import InfoBluebikes from './InfoBluebikes'
import InfoIntersections from './InfoIntersections'

export const ModeToggle = ({advancedMode}) => {
    // console.log('ModeToggle/advancedMode', advancedMode)
    if (advancedMode) return ('Show Fewer Details')
    return ('Show Advanced Details')
}

// https://www.w3schools.com/w3css/w3css_tabulators.asp
function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

const TabLayout = () => {
    return (
        <div className='tabBar'>
            <button className='tab' onclick='openTab(event, "info")' >Info</button>
            <button className='tab' onclick='openTab(event, "features")' >Map Features</button>
        </div>
    )
}

const ShowSidebar = ({selectedFeature, selectedFeatureType, advancedMode}) => {
    // console.log('ShowSidebar/advancedMode', advancedMode)
    if (selectedFeatureType == 'lts') {
        if (advancedMode) {
            console.log('return advanced sidebar')
            return (
            <div className='advancedMode'>
                <InfoDetail selectedFeature={selectedFeature} />
            </div>
            )
        }
        console.log('return simple sidebar')
        return (
            <div className='basicMode'>
                <InfoSimple selectedFeature={selectedFeature} />
            </div>
            )
    } else if (selectedFeatureType == 'bikeParking') {
        console.log('return bike parking sidebar')
        return (
            <div className='basicMode'>
                <InfoBikeParking selectedFeature={selectedFeature} />
            </div>
        )
    } else if (selectedFeatureType == 'bluebikeStation') {
        console.log('return bluebike Station sidebar')
        return (
            <div className='basicMode'>
                <InfoBluebikes selectedFeature={selectedFeature} />
            </div>
        )
    } else if (selectedFeatureType == 'intersections') {
        console.log('return intersections sidebar')
        return (
            <div className='basicMode'>
                <InfoIntersections selectedFeature={selectedFeature} />
            </div>
        )
    }
}

const SideBar = ({selectedFeature, selectedFeatureType, zoom, zoomLimit, advancedMode=false}) => {
    if (selectedFeature) {console.log('SideBar/selectedFeature', selectedFeature)}
    if (selectedFeatureType) {console.log('SideBar/selectedFeatureType', selectedFeatureType)}
    if(zoom < zoomLimit) {
        return (
        <div id='sidebar' className='sidebar'>
            <TabLayout />
            <p>Zoom in to select a street segment and learn more about it</p>
        </div>
        )
    }
    if(selectedFeature == undefined) {
        return (
        <div id='sidebar' className='sidebar'>
            <TabLayout />
            <p>Select a feature or street segment to learn more about it</p>
        </div>
        )
    }
    return (
        <div id='sidebar' className='sidebar'>
            <TabLayout />
            <ShowSidebar 
                selectedFeature={selectedFeature}
                selectedFeatureType={selectedFeatureType}
                advancedMode={advancedMode}/>
        </div>
    )
}

export default SideBar