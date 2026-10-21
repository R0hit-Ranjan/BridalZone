export type CategoryType = 
  | 'all' 
  | 'bridal-lehenga' 
  | 'rental-special' 
  | 'reception-gown' 
  | 'saree' 
  | 'jewelry' 
  | 'custom-suit';

export interface ProductItem {
  id: string;
  name: string;
  category: 'bridal-lehenga' | 'rental-special' | 'reception-gown' | 'saree' | 'jewelry' | 'custom-suit';
  occasion: string;
  image: string;
  secondaryImages?: string[];
  description: string;
  buyPrice: number;
  rentalPrice: number; // e.g. 500, 999, 2500, etc.
  rentalSecurityDeposit: number;
  rentalDurationDays: number;
  fabric?: string;
  workType?: string;
  color: string;
  availableForRent: boolean;
  availableForBuy: boolean;
  canBeCustomized: boolean;
  badge?: string;
  rating: number;
  reviewCount: number;
}

export interface JewelryItem {
  id: string;
  name: string;
  type: 'choker-set' | 'polki-set' | 'temple-set' | 'mathapatti' | 'chooda' | 'full-bridal-combo';
  image: string;
  rentalPrice: number;
  buyPrice: number;
  piecesIncluded: string[];
  description: string;
  finish: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  priceNote: string;
  description: string;
  features: string[];
  image: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  event: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
  outfitRentedOrBought: string;
  source: 'Justdial' | 'Google' | 'Instagram';
  brideImage?: string;
}

export interface TrialBookingRequest {
  fullName: string;
  phoneNumber: string;
  preferredDate: string;
  preferredTimeSlot: string;
  eventType: string;
  interest: 'rental' | 'purchase' | 'custom-stitching' | 'jewelry';
  notes?: string;
  selectedOutfits?: string[];
}

