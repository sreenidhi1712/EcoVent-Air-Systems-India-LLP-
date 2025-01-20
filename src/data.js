import VolumeDampers from "./assets/VolumeDampers.jpg";
import spiralDucts from "./assets/spiralDucts.jpg";
import ovalDuct from "./assets/ovalDuct.png";
import rectangularDuct from "./assets/rectangularDuct.jpg";
 
 const productdData = [
    {
       productId:1,
       productName:"RECTANGULAR DUCT",
       productUrl:"rectangular-duct",
       productDescription:" Rectangular air distrubution channel , designed for indoor and outdoor applications.",
       productFS:[ "Galvanized steel construction." , " Fabricated as per SMACNA standards."," 16 GI gauge to 26 GI gauge."],
       productFO:[" Pittsburgh lock construction."," Available connections: TDC, “S” and “C” cleat."," Stack duct or beaded duct are available."," Flame retardant."," Double Wall Insulation available."," Can be painted or powder coated."],
       productImg:rectangularDuct
    },
    {
        productId:2,
        productName:"SPIRAL DUCT",
        productUrl:"spiral-duct",
        productDescription:" It is a spiral air distribution channel, manufactured with a spiral lock seam. All seams are constructed with a gore-lock, spot weld, or stitch weld",
        productFS:[ " Galvanized steel construction." , "Available with a snap lock.","Flame retardant.","Double Wall Insulation available."," Can be painted or powder coated."],
        productFO:["Available with flanges or flat rings."," Available connections: TDC, “S” and “C” cleat","Stack duct or beaded duct are available"," Flame retardant","Double Wall Insulation available","Can be painted or powder coated"],
         productImg:spiralDucts
    },
    {
        productId:3,
        productName:"FLAT OVAL DUCT",
        productUrl:"flat-oval-duct",
        productDescription:" It is an oval air distribution channel, manufactured with a spiral lock seam and expanded to oval shaped duct. All seams are constructed with a gore-lock, spot weld, or stitch weld",
        productFS:[ "Galvanized steel construction" , " Fabricated as per SMACNA standards"," 16 GI gauge to 26 GI gauge"],
        productFO:["Available with flanges or flat rings."," Available connections: TDC, “S” and “C” cleat","Stack duct or beaded duct are available"," Flame retardant","Double Wall Insulation available","Can be painted or powder coated"],
        productImg:ovalDuct
    },
    {
        productId:4,
        productName:"VOLUME CONTROL DAMPERS",
        productUrl:"volume-control-dampers",
        productDescription:"Air Technology control dampers are designed to control the air flow within the air distribution installation, They are suitable for flanged or spigoted connection within square, rectangular, circular or flat oval duct systems and can be controlled mechanically & electrically",
        productFS:[ " Constructed of galvanized steel as per SMACNA Standards" ," 16 GI gauge to 26 GI gauge","Opposed or parallel blades construction."," Airfoil Blades & Special Finishes."," Can be painted or powder coated"],
        productImg:VolumeDampers
    }
]

export default productdData;