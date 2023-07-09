import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader:React.FC = () => (
  <ContentLoader 
    speed={2}
    width={255}
    height={510}
    viewBox="0 0 255 510"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="7" y="5" rx="0" ry="0" width="230" height="250" /> 
    <rect x="10" y="264" rx="0" ry="0" width="230" height="20" /> 
    <rect x="10" y="296" rx="0" ry="0" width="228" height="77" /> 
    <rect x="12" y="384" rx="0" ry="0" width="106" height="46" /> 
    <rect x="73" y="414" rx="0" ry="0" width="4" height="3" /> 
    <rect x="62" y="406" rx="0" ry="0" width="9" height="6" /> 
    <circle cx="152" cy="406" r="21" /> 
    <circle cx="208" cy="405" r="21" /> 
    <rect x="12" y="442" rx="0" ry="0" width="225" height="40" />
  </ContentLoader>
)

export default MyLoader