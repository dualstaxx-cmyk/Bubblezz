export type ProductCategory = "skincare" | "haircare" | "babycare" | "homecare";
export type ProductBadge =
  | "BEST SELLER"
  | "TOP RATED"
  | "NEW"
  | "GENTLE TOUCH"
  | "RITUAL ESSENTIAL"
  | "HANDCRAFTED";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  badge?: ProductBadge;
  whatsappMessage: string;
}

export const PRODUCTS: Product[] = [
  // ── SKIN CARE ──────────────────────────────────────────────────────────────
  {
    id: "face-wash",
    name: "Botanical Face Wash",
    category: "skincare",
    description:
      "Deep cleansing powered by organic botanical extracts that purify pores without stripping natural moisture.",
    image: "/products/face-wash.jpeg",
    badge: "BEST SELLER",
    whatsappMessage:
      "Hi, I'm interested in Botanical Face Wash from Bubblezz. Can you share more details?",
  },
  {
    id: "body-lotion",
    name: "Velvet Body Lotion",
    category: "skincare",
    description:
      "Rich 24-hour hydration infused with shea butter and cold-pressed botanical oils for silky-smooth skin.",
    image: "/products/body-lotion.jpeg",
    badge: "BEST SELLER",
    whatsappMessage:
      "Hi, I'm interested in Velvet Body Lotion from Bubblezz. Can you share more details?",
  },
  {
    id: "body-scrub",
    name: "Artisan Body Scrub",
    category: "skincare",
    description:
      "Exfoliating blend of natural salts and botanical oils that resurfaces skin and restores a natural glow.",
    image: "/products/body-scrub.jpeg",
    badge: "RITUAL ESSENTIAL",
    whatsappMessage:
      "Hi, I'm interested in Artisan Body Scrub from Bubblezz. Can you share more details?",
  },
  {
    id: "moisturizer",
    name: "Botanical Moisturizer",
    category: "skincare",
    description:
      "Lightweight yet deeply nourishing formula that locks in moisture for up to 12 hours with zero heaviness.",
    image: "/products/moisturizer.jpeg",
    badge: "TOP RATED",
    whatsappMessage:
      "Hi, I'm interested in Botanical Moisturizer from Bubblezz. Can you share more details?",
  },
  {
    id: "body-butter",
    name: "Luxury Body Butter",
    category: "skincare",
    description:
      "Indulgent whipped body butter with shea, cocoa, and mango extracts for ultra-soft, radiant skin.",
    image: "/products/body-butter.jpeg",
    badge: "RITUAL ESSENTIAL",
    whatsappMessage:
      "Hi, I'm interested in Luxury Body Butter from Bubblezz. Can you share more details?",
  },
  {
    id: "body-cream",
    name: "Hydrating Body Cream",
    category: "skincare",
    description:
      "Fast-absorbing cream enriched with natural humectants for sustained hydration and a healthy complexion.",
    image: "/products/body-cream.jpeg",
    whatsappMessage:
      "Hi, I'm interested in Hydrating Body Cream from Bubblezz. Can you share more details?",
  },
  {
    id: "body-wash",
    name: "Refreshing Body Wash",
    category: "skincare",
    description:
      "Sulfate-free cleansing gel with plant-derived actives that leaves skin feeling fresh and energised.",
    image: "/products/body-wash.jpeg",
    whatsappMessage:
      "Hi, I'm interested in Refreshing Body Wash from Bubblezz. Can you share more details?",
  },
  {
    id: "hand-wash",
    name: "Artisan Hand Wash",
    category: "skincare",
    description:
      "Gentle foaming hand wash with antibacterial botanicals that cleans effectively while keeping hands soft.",
    image: "/products/hand-wash.jpeg",
    whatsappMessage:
      "Hi, I'm interested in Artisan Hand Wash from Bubblezz. Can you share more details?",
  },
  {
    id: "bath-salts",
    name: "Ritual Bath Salts",
    category: "skincare",
    description:
      "Mineral-rich bath salts blended with essential oils to soothe muscles and elevate your bathing ritual.",
    image: "/products/bath-salts.jpeg",
    badge: "NEW",
    whatsappMessage:
      "Hi, I'm interested in Ritual Bath Salts from Bubblezz. Can you share more details?",
  },

  // ── HAIR CARE ──────────────────────────────────────────────────────────────
  {
    id: "hair-oil",
    name: "Botanical Hair Oil",
    category: "haircare",
    description:
      "Cold-pressed blend of argan, jojoba, and amla oils that nourishes the scalp and adds weightless shine.",
    image: "/products/hair-oil.jpeg",
    badge: "BEST SELLER",
    whatsappMessage:
      "Hi, I'm interested in Botanical Hair Oil from Bubblezz. Can you share more details?",
  },
  {
    id: "shampoo",
    name: "Revitalizing Shampoo",
    category: "haircare",
    description:
      "Sulfate-free formula with plant keratin and biotin that gently cleanses while strengthening each strand.",
    image: "/products/shampoo.jpeg",
    badge: "RITUAL ESSENTIAL",
    whatsappMessage:
      "Hi, I'm interested in Revitalizing Shampoo from Bubblezz. Can you share more details?",
  },
  {
    id: "conditioner",
    name: "Silk Conditioner",
    category: "haircare",
    description:
      "Deeply conditioning formula that detangles, smooths frizz, and leaves hair irresistibly soft and shiny.",
    image: "/products/conditioner.jpeg",
    whatsappMessage:
      "Hi, I'm interested in Silk Conditioner from Bubblezz. Can you share more details?",
  },
  {
    id: "hair-serum",
    name: "Luminous Hair Serum",
    category: "haircare",
    description:
      "Lightweight serum that tames flyaways, adds mirror-shine, and protects against heat and humidity.",
    image: "/products/hair-serum.jpeg",
    badge: "TOP RATED",
    whatsappMessage:
      "Hi, I'm interested in Luminous Hair Serum from Bubblezz. Can you share more details?",
  },
  {
    id: "hair-mask",
    name: "Crown Repair Hair Mask",
    category: "haircare",
    description:
      "Intensive deep-conditioning treatment that transforms dry, brittle strands into silk with essential oils.",
    image: "/products/hair-mask.jpeg",
    badge: "RITUAL ESSENTIAL",
    whatsappMessage:
      "Hi, I'm interested in Crown Repair Hair Mask from Bubblezz. Can you share more details?",
  },
  {
    id: "hair-gel",
    name: "Defining Hair Gel",
    category: "haircare",
    description:
      "Flexible-hold gel made from natural plant extracts that styles without crunch or harmful alcohols.",
    image: "/products/hair-gel.jpeg",
    whatsappMessage:
      "Hi, I'm interested in Defining Hair Gel from Bubblezz. Can you share more details?",
  },
  {
    id: "natural-hair-colour",
    name: "Natural Hair Colour",
    category: "haircare",
    description:
      "Henna-based hair colour enriched with amla and shikakai that covers grey naturally without ammonia.",
    image: "https://placehold.co/400x500/1a1a1a/C9A84C?text=Natural+Hair+Colour",
    badge: "NEW",
    whatsappMessage:
      "Hi, I'm interested in Natural Hair Colour from Bubblezz. Can you share more details?",
  },

  // ── BABY CARE ──────────────────────────────────────────────────────────────
  {
    id: "baby-soap",
    name: "Calming Baby Soap",
    category: "babycare",
    description:
      "Ultra-mild artisanal bar crafted for newborn skin — tear-free, paraben-free, and dermatologist tested.",
    image: "/products/baby-soap.jpeg",
    badge: "GENTLE TOUCH",
    whatsappMessage:
      "Hi, I'm interested in Calming Baby Soap from Bubblezz. Can you share more details?",
  },
  {
    id: "baby-head-to-toe-wash",
    name: "Baby Head-to-Toe Wash",
    category: "babycare",
    description:
      "All-in-one gentle cleanser for hair and body that keeps baby's delicate skin soft and perfectly balanced.",
    image: "/products/baby-head-to-toe-wash.jpeg",
    badge: "GENTLE TOUCH",
    whatsappMessage:
      "Hi, I'm interested in Baby Head-to-Toe Wash from Bubblezz. Can you share more details?",
  },
  {
    id: "kids-mild-shampoo",
    name: "Kids Mild Shampoo",
    category: "babycare",
    description:
      "Tear-free shampoo with natural botanicals that gently cleanses little scalps without any irritation.",
    image: "/products/kids-mild-shampoo.jpeg",
    badge: "GENTLE TOUCH",
    whatsappMessage:
      "Hi, I'm interested in Kids Mild Shampoo from Bubblezz. Can you share more details?",
  },
  {
    id: "baby-moisturizer",
    name: "Baby Moisturizer",
    category: "babycare",
    description:
      "pH-balanced lightweight lotion with organic aloe and chamomile that keeps baby skin soft and protected.",
    image: "/products/baby-moisturizer.jpeg",
    badge: "GENTLE TOUCH",
    whatsappMessage:
      "Hi, I'm interested in Baby Moisturizer from Bubblezz. Can you share more details?",
  },
  {
    id: "baby-massage-oil",
    name: "Baby Massage Oil",
    category: "babycare",
    description:
      "Warm-pressed blend of sesame and almond oils perfect for daily baby massage — strengthens and soothes.",
    image: "/products/baby-massage-oil.jpeg",
    badge: "GENTLE TOUCH",
    whatsappMessage:
      "Hi, I'm interested in Baby Massage Oil from Bubblezz. Can you share more details?",
  },

  // ── HOME CARE ──────────────────────────────────────────────────────────────
  {
    id: "floor-cleaner",
    name: "Lavender Floor Cleaner",
    category: "homecare",
    description:
      "Natural aromatic solution with lavender and pine extracts for pristine, naturally fragrant floors.",
    image: "https://placehold.co/400x500/E8F5E9/2E7D32?text=Floor+Cleaner",
    badge: "HANDCRAFTED",
    whatsappMessage:
      "Hi, I'm interested in Lavender Floor Cleaner from Bubblezz. Can you share more details?",
  },
  {
    id: "glass-cleaner",
    name: "Crystal Glass Cleaner",
    category: "homecare",
    description:
      "Streak-free botanical formula that leaves windows and mirrors sparkling clean without harsh chemicals.",
    image: "/products/glass-cleaner.jpeg",
    badge: "HANDCRAFTED",
    whatsappMessage:
      "Hi, I'm interested in Crystal Glass Cleaner from Bubblezz. Can you share more details?",
  },
  {
    id: "dish-wash-gel",
    name: "Citrus Dish Wash Gel",
    category: "homecare",
    description:
      "Plant-derived formula tough on grease yet gentle on hands — infused with citrus and neem extracts.",
    image: "/products/dish-wash-gel.jpeg",
    badge: "HANDCRAFTED",
    whatsappMessage:
      "Hi, I'm interested in Citrus Dish Wash Gel from Bubblezz. Can you share more details?",
  },
  {
    id: "detergent-wash-gel",
    name: "Natural Detergent Gel",
    category: "homecare",
    description:
      "Enzyme-activated laundry gel that removes tough stains naturally while being kind to fabrics and skin.",
    image: "/products/detergent-wash-gel.jpeg",
    badge: "HANDCRAFTED",
    whatsappMessage:
      "Hi, I'm interested in Natural Detergent Gel from Bubblezz. Can you share more details?",
  },
  {
    id: "toilet-cleaner",
    name: "Botanical Toilet Cleaner",
    category: "homecare",
    description:
      "Powerful natural disinfectant with eucalyptus and tea tree that sanitizes without toxic bleach.",
    image: "https://placehold.co/400x500/E8F5E9/2E7D32?text=Toilet+Cleaner",
    badge: "HANDCRAFTED",
    whatsappMessage:
      "Hi, I'm interested in Botanical Toilet Cleaner from Bubblezz. Can you share more details?",
  },
  {
    id: "room-freshener",
    name: "Botanical Room Freshener",
    category: "homecare",
    description:
      "Long-lasting natural room spray with signature botanical blends that elevate your living space.",
    image: "/products/room-freshener.jpeg",
    badge: "HANDCRAFTED",
    whatsappMessage:
      "Hi, I'm interested in Botanical Room Freshener from Bubblezz. Can you share more details?",
  },
];
