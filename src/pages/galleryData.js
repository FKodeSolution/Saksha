// src/galleryData.js
import wedding from "../images/1000142252.jpg.jpeg";
import couple from "../images/1000143494.jpg.jpeg";
import legacy from "../images/1000128003.jpg.jpeg";
import editorial from "../images/1000128970.jpg.jpeg";
import wedding1 from "../images/1000142252.jpg.jpeg";
import wedding2 from "../images/1000143494.jpg.jpeg";
import wedding3 from "../images/1000128003.jpg.jpeg";
import wedding4 from "../images/1000128970.jpg.jpeg"; 
import couple1 from "../images/1000142252.jpg.jpeg";
import couple2 from "../images/1000143494.jpg.jpeg";
import couple3 from "../images/1000128003.jpg.jpeg";  
import legacy1 from "../images/1000142252.jpg.jpeg";
import legacy2 from "../images/1000143494.jpg.jpeg";
import legacy3 from "../images/1000128003.jpg.jpeg";
import editorial1 from "../images/1000142252.jpg.jpeg";
import editorial2 from "../images/1000143494.jpg.jpeg";
import editorial3 from "../images/1000128003.jpg.jpeg";


export const services = [
  {
    id: "wedding",
    title: "Luxury Wedding Photography",
    description: "Documenting the grand and quiet moments of your union with an editorial lens. We capture the emotions that define your legacy.",
    img: wedding,
    gallery: [
      wedding1,wedding2,wedding3,wedding4,
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc", // Bridal Portrait
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74", // Rings & Detail
      "https://images.unsplash.com/photo-1519225495806-7d52f671ec46", // Wedding Vows
      "https://images.unsplash.com/photo-1550005816-091611377994", // Reception
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf", // Candid Laugh
      "https://images.unsplash.com/photo-1510076857177-7470076d4098", // Decor
      "https://images.unsplash.com/photo-1465495910483-0d674b0b7537", // First Dance
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a"  // Exit Scene
    ]
  },
  {
    id: "couple",
    title: "Couple Portrait Stories",
    description: "Preserving the chemistry and silent language between two souls. Intimate, honest, and timeless storytelling.",
    img: couple,
    gallery: [
      couple1,couple2,couple3,
      "https://images.unsplash.com/photo-1494774157365-9e04c6720e47", // Sunset Walk
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2", // Close-up chemistry
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b", // Urban Couple
      "https://images.unsplash.com/photo-1464519363911-913fa2f40050", // Vintage Vibe
      "https://images.unsplash.com/photo-1522673607200-164883eeba3c", // Forest Session
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e", // Beach Hug
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a", // Editorial Pose
      "https://images.unsplash.com/photo-1517598024396-46c53fb391a1"  // Rainy Night Story
    ]
  },
  {
    id: "legacy",
    title: "Family & Legacy Portraits",
    description: "Timeless heirlooms for generations to come. We don't just take pictures; we archive your family's history.",
    img: legacy,
    gallery: [
      legacy1,legacy2,legacy3,
      "https://images.unsplash.com/photo-1511895426328-dc8714191300", // Grandparents
      "https://images.unsplash.com/photo-1476703993599-0035a21b17a9", // Outdoor picnic
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368", // Newborn
      "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb", // Laughter
      "https://images.unsplash.com/photo-1536640719357-73d1969ce7ed", // Generations hand-in-hand
      "https://images.unsplash.com/photo-1508808787069-421e7986016e", // Candid Morning
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74", // Kids Playing
      "https://images.unsplash.com/photo-1484981138541-3d074aa97716"  // Black and White Legacy
    ]
  },
  {
    id: "editorial",
    title: "Editorial & Fashion",
    description: "Sophisticated visuals for brands and individuals who seek high-fashion aesthetics.",
    img: editorial,
    gallery: [
      editorial1,editorial2,editorial3,
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      "https://images.unsplash.com/photo-1529139513075-123df28d3e59",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c"
    ]
  }
];