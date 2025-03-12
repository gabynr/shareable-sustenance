
export type UserRole = 'provider' | 'recipient';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization: string;
  address: string;
  phone: string;
  image?: string;
}

export interface FoodListing {
  id: string;
  title: string;
  description: string;
  quantity: string;
  expiration: string;
  created: string;
  category: FoodCategory;
  providerId: string;
  provider: {
    name: string;
    address: string;
  };
  status: 'available' | 'claimed' | 'completed';
  image?: string;
}

export type FoodCategory = 
  | 'produce'
  | 'bakery'
  | 'dairy'
  | 'meat'
  | 'prepared'
  | 'grocery'
  | 'other';

export const FOOD_CATEGORIES: { value: FoodCategory; label: string }[] = [
  { value: 'produce', label: 'Produce' },
  { value: 'bakery', label: 'Bakery' },
  { value: 'dairy', label: 'Dairy' },
  { value: 'meat', label: 'Meat' },
  { value: 'prepared', label: 'Prepared Foods' },
  { value: 'grocery', label: 'Grocery Items' },
  { value: 'other', label: 'Other' },
];

export const MOCK_LISTINGS: FoodListing[] = [
  {
    id: '1',
    title: 'Fresh Produce Assortment',
    description: 'Variety of fresh vegetables and fruits, including carrots, lettuce, apples, and bananas.',
    quantity: '50 lbs',
    expiration: '2023-06-30',
    created: '2023-06-25',
    category: 'produce',
    providerId: 'p1',
    provider: {
      name: 'Green Market',
      address: '123 Main St'
    },
    status: 'available',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: '2',
    title: 'Assorted Bread and Pastries',
    description: 'Day-old bread, muffins, and pastries. Still fresh and delicious.',
    quantity: '30 items',
    expiration: '2023-06-28',
    created: '2023-06-25',
    category: 'bakery',
    providerId: 'p2',
    provider: {
      name: 'City Bakery',
      address: '456 Oak Ave'
    },
    status: 'available',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: '3',
    title: 'Prepared Meal Trays',
    description: 'Catered event leftovers, includes chicken, rice, and vegetable dishes. All properly stored.',
    quantity: '10 trays',
    expiration: '2023-06-27',
    created: '2023-06-25',
    category: 'prepared',
    providerId: 'p3',
    provider: {
      name: 'Gourmet Catering',
      address: '789 Pine Rd'
    },
    status: 'available',
    image: 'https://images.unsplash.com/photo-1594834749740-74b3f6764be4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: '4',
    title: 'Dairy Products',
    description: 'Milk, yogurt, and cheese nearing best-by date but still good quality.',
    quantity: '25 items',
    expiration: '2023-06-29',
    created: '2023-06-25',
    category: 'dairy',
    providerId: 'p4',
    provider: {
      name: 'Fresh Foods Market',
      address: '101 Cedar Ln'
    },
    status: 'available',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: '5',
    title: 'Canned Goods Assortment',
    description: 'Various canned vegetables, fruits, and beans. All within expiration dates.',
    quantity: '40 cans',
    expiration: '2024-01-15',
    created: '2023-06-25',
    category: 'grocery',
    providerId: 'p5',
    provider: {
      name: 'Family Grocery',
      address: '222 Maple St'
    },
    status: 'available',
    image: 'https://images.unsplash.com/photo-1584473457493-17c4c40b3ce3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3'
  }
];

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    name: 'Green Market',
    email: 'contact@greenmarket.com',
    role: 'provider',
    organization: 'Green Market Grocery',
    address: '123 Main St, Anytown, USA',
    phone: '(555) 123-4567',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 'u2',
    name: 'Community Food Bank',
    email: 'info@communityfoodbank.org',
    role: 'recipient',
    organization: 'Community Food Bank of Central County',
    address: '789 Oak St, Anytown, USA',
    phone: '(555) 987-6543',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  }
];
