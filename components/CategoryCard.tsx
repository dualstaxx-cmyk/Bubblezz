"use client";

import { Category } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

interface Props {
  category: Category;
  className?: string;
}

export default function CategoryCard({ category, className = "" }: Props) {
  return (
    <Link
      href={`/shop?category=${category.id}`}
      className={`relative overflow-hidden rounded-card cursor-pointer group block ${className}`}
    >
      <div className="relative w-full h-full min-h-[200px] group-hover:ring-2 group-hover:ring-gold group-hover:ring-inset transition-all duration-300">
        <Image
          src={category.image}
          alt={category.label}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/categories/skincare.jpeg";
          }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 group-hover:bg-[rgba(201,168,76,0.15)] transition-all duration-300" />
        <div className="absolute bottom-4 left-4">
          <p className="font-display text-white text-xl font-semibold">
            {category.label}
          </p>
          <p className="font-body text-white/80 text-sm italic mt-0.5">
            {category.subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
}
