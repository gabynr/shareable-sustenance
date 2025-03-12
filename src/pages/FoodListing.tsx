
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FOOD_CATEGORIES, MOCK_LISTINGS, FoodCategory } from '@/types';
import { PageTransition } from '@/components/Motion';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, Calendar, MapPin, Package } from 'lucide-react';

export default function FoodListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isNewListing = id === 'new';
  
  const existingListing = id && id !== 'new' 
    ? MOCK_LISTINGS.find(listing => listing.id === id) 
    : null;

  const [formData, setFormData] = useState({
    title: existingListing?.title || '',
    description: existingListing?.description || '',
    quantity: existingListing?.quantity || '',
    expiration: existingListing?.expiration || '',
    category: existingListing?.category || 'produce' as FoodCategory,
    image: existingListing?.image || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend
    console.log('Submitting form data:', formData);
    
    toast({
      title: isNewListing ? "Listing created" : "Listing updated",
      description: `Your food listing has been ${isNewListing ? 'created' : 'updated'} successfully.`,
    });
    
    // Navigate back to dashboard after form submission
    navigate('/dashboard');
  };

  const handleClaim = () => {
    toast({
      title: "Listing claimed",
      description: "You have successfully claimed this food listing. Contact the provider to arrange pickup.",
    });
    navigate('/dashboard');
  };

  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 py-20">
          <div className="container px-4 md:px-6 pt-10">
            <Button 
              variant="ghost" 
              className="mb-6" 
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            {isNewListing || existingListing ? (
              <>
                {isNewListing ? (
                  <h1 className="text-3xl font-bold tracking-tight mb-6">Create New Food Listing</h1>
                ) : (
                  <h1 className="text-3xl font-bold tracking-tight mb-6">
                    {existingListing ? existingListing.title : 'Food Listing'}
                  </h1>
                )}
                
                {isNewListing ? (
                  <Card className="mb-8">
                    <CardContent className="pt-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                              id="title"
                              name="title"
                              placeholder="Fresh Produce Assortment"
                              value={formData.title}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select
                              value={formData.category}
                              onValueChange={(value) => handleSelectChange(value, 'category')}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                              <SelectContent>
                                {FOOD_CATEGORIES.map((category) => (
                                  <SelectItem key={category.value} value={category.value}>
                                    {category.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            name="description"
                            placeholder="Describe the food items you're offering..."
                            value={formData.description}
                            onChange={handleChange}
                            className="min-h-[100px]"
                            required
                          />
                        </div>
                        
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                              id="quantity"
                              name="quantity"
                              placeholder="e.g., 10 lbs, 5 trays, 24 items"
                              value={formData.quantity}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="expiration">Expiration Date</Label>
                            <Input
                              id="expiration"
                              name="expiration"
                              type="date"
                              value={formData.expiration}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="image">Image URL (Optional)</Label>
                          <Input
                            id="image"
                            name="image"
                            placeholder="https://example.com/image.jpg"
                            value={formData.image}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div className="flex justify-end">
                          <Button type="submit" className="w-full sm:w-auto">
                            {isNewListing ? 'Create Listing' : 'Update Listing'}
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                ) : existingListing && (
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-6">
                      <div className="overflow-hidden rounded-lg border">
                        {existingListing.image ? (
                          <img
                            src={existingListing.image}
                            alt={existingListing.title}
                            className="w-full aspect-video object-cover"
                          />
                        ) : (
                          <div className="w-full aspect-video bg-muted flex items-center justify-center">
                            <Package className="h-16 w-16 text-muted-foreground/40" />
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <h2 className="text-2xl font-bold">{existingListing.title}</h2>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {existingListing.provider.name}, {existingListing.provider.address}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Description</h3>
                        <p className="text-muted-foreground">{existingListing.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <Card>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-4 border-b">
                              <span className="font-medium">Category</span>
                              <span className="text-muted-foreground capitalize">{existingListing.category}</span>
                            </div>
                            
                            <div className="flex justify-between items-center pb-4 border-b">
                              <div className="flex items-center">
                                <Package className="h-4 w-4 mr-2" />
                                <span className="font-medium">Quantity</span>
                              </div>
                              <span className="text-muted-foreground">{existingListing.quantity}</span>
                            </div>
                            
                            <div className="flex justify-between items-center pb-4 border-b">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span className="font-medium">Expires</span>
                              </div>
                              <span className="text-muted-foreground">
                                {new Date(existingListing.expiration).toLocaleDateString()}
                              </span>
                            </div>
                            
                            <div className="flex justify-between items-center pb-4 border-b">
                              <span className="font-medium">Status</span>
                              <span 
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  existingListing.status === 'available' 
                                    ? 'bg-green-100 text-green-800' 
                                    : existingListing.status === 'claimed' 
                                      ? 'bg-yellow-100 text-yellow-800'
                                      : 'bg-blue-100 text-blue-800'
                                }`}
                              >
                                {existingListing.status.charAt(0).toUpperCase() + existingListing.status.slice(1)}
                              </span>
                            </div>
                            
                            <div className="flex justify-between items-center pb-4 border-b">
                              <span className="font-medium">Listed On</span>
                              <span className="text-muted-foreground">
                                {new Date(existingListing.created).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          
                          <div className="mt-6">
                            <Button 
                              className="w-full" 
                              onClick={handleClaim}
                              disabled={existingListing.status !== 'available'}
                            >
                              {existingListing.status === 'available' 
                                ? 'Claim This Food' 
                                : existingListing.status === 'claimed' 
                                  ? 'Already Claimed'
                                  : 'Completed'}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <div>
                        <h3 className="font-medium mb-2">Contact Provider</h3>
                        <Card>
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">Email</span>
                                <a href="mailto:contact@example.com" className="text-primary hover:underline">
                                  contact@example.com
                                </a>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <span className="font-medium">Phone</span>
                                <a href="tel:+15551234567" className="text-primary hover:underline">
                                  (555) 123-4567
                                </a>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-2">Listing Not Found</h2>
                <p className="text-muted-foreground mb-6">The food listing you're looking for doesn't exist or has been removed.</p>
                <Button asChild>
                  <a href="/dashboard">Return to Dashboard</a>
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
