
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FOOD_CATEGORIES, MOCK_LISTINGS, FoodCategory } from '@/types';
import { ListingCard } from '@/components/ListingCard';
import { PageTransition } from '@/components/Motion';
import { Search, MapPin, Filter } from 'lucide-react';

export default function Browse() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [location, setLocation] = useState('');

  const filteredListings = MOCK_LISTINGS.filter(listing => {
    // Filter by search term
    const matchesSearch = searchTerm === '' || 
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === '' || listing.category === selectedCategory;
    
    // Filter by location (simple text match for now)
    const matchesLocation = location === '' || 
      listing.provider.address.toLowerCase().includes(location.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 py-20">
          <div className="container px-4 md:px-6 pt-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Browse Available Food</h1>
                <p className="text-muted-foreground">
                  Find and claim excess food from local restaurants and grocery stores
                </p>
              </div>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-8">
              <div className="relative md:col-span-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name or description..."
                  className="w-full bg-background pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Location..."
                  className="w-full bg-background pl-8"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full bg-background pl-8">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {FOOD_CATEGORIES.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-4 flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                {filteredListings.length} {filteredListings.length === 1 ? 'result' : 'results'} found
              </p>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                  setLocation('');
                }}>
                  Clear Filters
                </Button>
              </div>
            </div>

            {filteredListings.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredListings.map((listing, index) => (
                  <ListingCard key={listing.id} listing={listing} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border rounded-lg">
                <p className="text-muted-foreground mb-4">No food listings match your search criteria</p>
                <Button variant="outline" onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                  setLocation('');
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
