import {
  Video, Mic, Moon, Radar, CloudRain, Wifi, Battery, Home, Bell, Sun, Eye,
  ShieldCheck, Camera, Zap, Volume2, Smartphone, Lock, type LucideIcon,
} from "lucide-react";

export interface ProductFeatureSet {
  shortDescription: string;
  highlights: string[];
  specs: Record<string, string>;
}

// Per-handle curated data — matches Shopify product handles
const featuresByHandle: Record<string, ProductFeatureSet> = {
  "basic-video-doorbell-mains-or-battery-powered": {
    shortDescription:
      "See, hear, and speak to visitors from anywhere with the Ring Battery Video Doorbell. Wire-free installation means you can set it up in minutes — no electrician needed. Enjoy 1080p HD video, advanced motion detection, and instant phone alerts for complete peace of mind at your front door.",
    highlights: [
      "1080p HD video with enhanced colour night vision",
      "Two-way talk with noise cancellation",
      "Advanced motion detection with customisable zones",
      "Wire-free battery or hardwired installation",
      "Instant notifications sent to your phone",
      "Works with Alexa for hands-free monitoring",
    ],
    specs: {
      "Video Resolution": "1080p HD",
      "Field of View": "155° horizontal, 90° vertical",
      "Night Vision": "Enhanced colour night vision",
      "Power": "Rechargeable battery or hardwired (8-24V AC)",
      "Connectivity": "Wi-Fi 802.11 b/g/n (2.4 GHz)",
      "Audio": "Two-way talk with noise cancellation",
      "Weather Rating": "IPX5 (rain, snow, extreme temperatures)",
      "Dimensions": "12.6 x 6.2 x 2.8 cm",
    },
  },
  "advanced-video-doorbell-pro-wired": {
    shortDescription:
      "The Ring Video Doorbell Pro (Wired) delivers crystal-clear 1536p HD+ video with a head-to-toe view, so you never miss a detail. Hardwired for reliable, always-on power, it features 3D Motion Detection with Bird's Eye View and pre-roll video preview for precise alerts.",
    highlights: [
      "1536p HD+ video with head-to-toe view",
      "3D Motion Detection with Bird's Eye View",
      "Pre-roll video preview before motion events",
      "Two-way talk with Audio+ technology",
      "Hardwired for always-on, reliable power",
      "Sleek, slim profile complements any doorway",
    ],
    specs: {
      "Video Resolution": "1536p HD+ (Head-to-Toe)",
      "Field of View": "150° horizontal, head-to-toe vertical",
      "Night Vision": "Colour Night Vision with HDR",
      "Power": "Hardwired (16-24V AC, 30VA transformer required)",
      "Connectivity": "Dual-band Wi-Fi (2.4 / 5 GHz)",
      "Audio": "Two-way talk with Audio+",
      "Motion Detection": "3D Motion Detection, Bird's Eye View",
      "Dimensions": "11.4 x 4.9 x 2.2 cm",
    },
  },
  "ring-video-doorbell-wired": {
    shortDescription:
      "Affordable, always-on smart home security for your front door. The Ring Video Doorbell (Wired) plugs into your existing doorbell wiring for uninterrupted power and delivers crisp 1080p HD video, advanced motion detection, and real-time phone notifications.",
    highlights: [
      "1080p HD video with infrared night vision",
      "Advanced motion detection with adjustable zones",
      "Two-way talk with noise cancellation",
      "Hardwired for continuous, reliable power",
      "Compact design fits any doorway",
      "Works with Ring Chime and Alexa",
    ],
    specs: {
      "Video Resolution": "1080p HD",
      "Field of View": "155° horizontal",
      "Night Vision": "Infrared LED",
      "Power": "Hardwired (8-24V AC)",
      "Connectivity": "Wi-Fi 802.11 b/g/n (2.4 GHz)",
      "Audio": "Two-way talk with noise cancellation",
      "Weather Rating": "IPX5",
      "Dimensions": "10.0 x 4.6 x 2.1 cm",
    },
  },
  "security-cam-spotlight-cam": {
    shortDescription:
      "Brilliant security lighting meets powerful HD video. The Ring Spotlight Cam illuminates dark areas with built-in LED spotlights and records in crisp 1080p HD — so you can see exactly what's happening around your home, day or night.",
    highlights: [
      "1080p HD video with colour night vision",
      "Built-in LED spotlights for targeted illumination",
      "Two-way talk with built-in siren",
      "Customisable motion zones and alerts",
      "Weather-resistant for year-round outdoor use",
      "Battery, wired, or solar power options",
    ],
    specs: {
      "Video Resolution": "1080p HD",
      "Field of View": "140° horizontal, 80° vertical",
      "Night Vision": "Colour Night Vision (with spotlights)",
      "Spotlights": "Dual LED spotlights",
      "Audio": "Two-way talk + 105dB siren",
      "Power": "Battery / Wired / Solar (varies by model)",
      "Weather Rating": "IPX5",
      "Connectivity": "Wi-Fi 802.11 b/g/n (2.4 GHz)",
    },
  },
  "security-cam-floodlight-cam-plus": {
    shortDescription:
      "Light up your property and record every detail with the Ring Floodlight Cam Plus. Ultra-bright 2,000-lumen LED floodlights activate on motion, while the 1080p HDR camera captures clear video day and night. A powerful built-in siren adds an extra layer of deterrence.",
    highlights: [
      "1080p HDR video with colour night vision",
      "Ultra-bright 2,000-lumen LED floodlights",
      "Advanced motion detection with customisable zones",
      "Built-in 105dB siren for deterrence",
      "Two-way talk with noise cancellation",
      "Hardwired for reliable, always-on power",
    ],
    specs: {
      "Video Resolution": "1080p HDR",
      "Field of View": "140° horizontal",
      "Floodlights": "2,000 lumens (dual LED)",
      "Night Vision": "Colour Night Vision",
      "Audio": "Two-way talk + 105dB siren",
      "Power": "Hardwired (110-240V AC)",
      "Motion Detection": "Advanced motion zones, people-only mode",
      "Weather Rating": "IP55",
    },
  },
  "floodlight-cam-pro-mains-powered-copy": {
    shortDescription:
      "The most advanced Ring Floodlight. The Floodlight Cam Pro features 3D Motion Detection with Bird's Eye View to show you exactly where someone went on an aerial map. Ultra-bright floodlights, 1080p HDR video, and a powerful siren protect what matters most.",
    highlights: [
      "1080p HDR video with Bird's Eye View",
      "3D Motion Detection for precise alerts",
      "Ultra-bright 2,000-lumen dual LED floodlights",
      "Colour night vision with HDR",
      "Built-in 105dB siren",
      "Dual-band Wi-Fi for stronger connection",
    ],
    specs: {
      "Video Resolution": "1080p HDR",
      "Field of View": "140° horizontal, 80° vertical",
      "Floodlights": "2,000 lumens (dual LED)",
      "Motion Detection": "3D Motion Detection, Bird's Eye View",
      "Night Vision": "Colour Night Vision with HDR",
      "Audio": "Two-way talk + 105dB siren",
      "Power": "Hardwired (110-240V AC)",
      "Weather Rating": "IP55",
    },
  },
  "ring-driveway-bundle": {
    shortDescription:
      "Complete driveway security in one box. This bundle pairs a Ring Video Doorbell with an Outdoor Camera to cover your front door and driveway. Ideal for keeping an eye on deliveries, visitors, and vehicle activity — all from a single app.",
    highlights: [
      "Video Doorbell + Outdoor Camera in one bundle",
      "Cover your front door and driveway",
      "HD video with night vision on both devices",
      "Two-way talk on both devices",
      "Motion-activated alerts to your phone",
      "Significant savings vs buying separately",
    ],
    specs: {
      "Bundle Contents": "1x Video Doorbell + 1x Outdoor Camera",
      "Video Resolution": "1080p HD (both devices)",
      "Night Vision": "Infrared / Colour (varies by device)",
      "Power": "Battery (doorbell) + Battery/Wired (camera)",
      "Connectivity": "Wi-Fi 802.11 b/g/n",
      "Managed Via": "Ring App (iOS & Android)",
    },
  },
  "ring-driveway-bundle-premium": {
    shortDescription:
      "Premium whole-property security with top-tier Ring devices. This premium driveway bundle combines the Video Doorbell Pro with a Floodlight Cam for uncompromising security at your front door and driveway. Professional-grade protection for your home.",
    highlights: [
      "Video Doorbell Pro + Floodlight Cam included",
      "Head-to-toe doorbell view with 3D motion",
      "Ultra-bright floodlight with HD camera",
      "Advanced motion detection on both devices",
      "Premium bundle savings vs buying separately",
      "Hardwired for always-on reliability",
    ],
    specs: {
      "Bundle Contents": "1x Video Doorbell Pro + 1x Floodlight Cam",
      "Doorbell Video": "1536p HD+ with Head-to-Toe view",
      "Camera Video": "1080p HDR",
      "Floodlights": "2,000 lumens",
      "Motion Detection": "3D Motion Detection, Bird's Eye View",
      "Power": "Both hardwired",
    },
  },
};

// Fallback features by Shopify productType
const featuresByType: Record<string, ProductFeatureSet> = {
  "Video Doorbell": {
    shortDescription:
      "See, hear, and speak to anyone at your front door from anywhere. Ring Video Doorbells deliver HD video, instant alerts, and two-way talk for complete peace of mind.",
    highlights: [
      "HD video with night vision",
      "Two-way talk with noise cancellation",
      "Advanced motion detection with customisable zones",
      "Instant notifications to your phone",
      "Works with Alexa",
      "Easy DIY or professional installation",
    ],
    specs: {
      "Video": "HD (1080p+)",
      "Night Vision": "Yes",
      "Audio": "Two-way talk",
      "Motion Detection": "Customisable zones",
      "Weather Rating": "IPX5",
      "Connectivity": "Wi-Fi",
    },
  },
  "Security Cam": {
    shortDescription:
      "Keep watch over your home inside and out with Ring Security Cameras. HD video, customisable motion detection, and two-way talk let you stay connected to what matters.",
    highlights: [
      "HD video with colour night vision",
      "Customisable motion detection zones",
      "Two-way talk with built-in microphone",
      "Weather-resistant for outdoor use",
      "Real-time motion alerts to your phone",
      "Works with Alexa and the Ring App",
    ],
    specs: {
      "Video": "HD (1080p+)",
      "Night Vision": "Colour Night Vision",
      "Audio": "Two-way talk",
      "Motion Detection": "Customisable zones",
      "Connectivity": "Wi-Fi",
      "Weather Rating": "IPX5+",
    },
  },
};

export function getProductFeatures(
  handle: string,
  productType: string
): ProductFeatureSet | null {
  return featuresByHandle[handle] ?? featuresByType[productType] ?? null;
}

// Map feature text keywords to lucide-react icons
const iconKeywords: [RegExp, LucideIcon][] = [
  [/video|1080p|1536p|2k|4k|hdr|hd/i, Video],
  [/two-way talk|audio|noise cancel/i, Mic],
  [/night vision/i, Moon],
  [/motion|3d motion/i, Radar],
  [/weather|outdoor|ipx|ip55/i, CloudRain],
  [/wi-fi|dual-band|connectivity/i, Wifi],
  [/battery|rechargeable|wire-free/i, Battery],
  [/alexa|smart home|app/i, Home],
  [/siren|alert/i, Bell],
  [/floodlight|spotlight|lumen|light/i, Sun],
  [/bird's eye|head-to-toe|view/i, Eye],
  [/privacy|cover|secure/i, ShieldCheck],
  [/camera|cam/i, Camera],
  [/hardwired|always-on|power|plug/i, Zap],
  [/chime|volume|speaker/i, Volume2],
  [/phone|notification|instant/i, Smartphone],
  [/save|bundle|pack/i, Lock],
];

export function getFeatureIcon(featureText: string): LucideIcon {
  for (const [regex, icon] of iconKeywords) {
    if (regex.test(featureText)) return icon;
  }
  return ShieldCheck;
}
