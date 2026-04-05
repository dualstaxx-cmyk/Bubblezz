export interface Category {
  id: string;
  label: string;
  subtitle: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "skincare",
    label: "Skin Care",
    subtitle: "Revitalise your glow",
    image: "/categories/skincare.jpeg",
  },
  {
    id: "haircare",
    label: "Hair Care",
    subtitle: "Strengthen and shine",
    image: "/categories/haircare.jpeg",
  },
  {
    id: "babycare",
    label: "Baby Care",
    subtitle: "Gentle touch, pure love",
    image: "/categories/babycare.jpeg",
  },
  {
    id: "homecare",
    label: "Home Care",
    subtitle: "Elevated daily rituals",
    image: "/categories/homecare.jpeg",
  },
];
