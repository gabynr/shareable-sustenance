
import { FoodListing } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useNavigate } from 'react-router-dom';
import { Motion } from '@/components/Motion';
import { MapPin, Calendar, Package } from 'lucide-react';
import { useState } from 'react';

interface ListingCardProps {
  listing: FoodListing;
  index?: number;
}

export function ListingCard({ listing, index = 0 }: ListingCardProps) {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      produce: 'bg-green-100 text-green-800',
      bakery: 'bg-yellow-100 text-yellow-800',
      dairy: 'bg-blue-100 text-blue-800',
      meat: 'bg-red-100 text-red-800',
      prepared: 'bg-orange-100 text-orange-800',
      grocery: 'bg-purple-100 text-purple-800',
      other: 'bg-gray-100 text-gray-800',
    };
    return colors[category] || colors.other;
  };

  return (
    <Motion delay={index * 0.1} type="slide-up">
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:translate-y-[-2px]">
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          {listing.image && (
            <>
              <div className={`absolute inset-0 bg-muted ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} />
              <img
                src={listing.image}
                alt={listing.title}
                className={`h-full w-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />
            </>
          )}
          <Badge className={`absolute top-2 right-2 ${getCategoryColor(listing.category)}`}>
            {listing.category.charAt(0).toUpperCase() + listing.category.slice(1)}
          </Badge>
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="line-clamp-1">{listing.title}</CardTitle>
          <CardDescription className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {listing.provider.name}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <p className="line-clamp-2 text-sm text-muted-foreground mb-3">{listing.description}</p>
          
          <div className="flex flex-wrap gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Package className="h-3.5 w-3.5" />
                    <span>{listing.quantity}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Quantity Available</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Expires: {formatDate(listing.expiration)}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Expiration Date</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
        
        <CardFooter>
          <Button
            className="w-full"
            onClick={() => navigate(`/food-listing/${listing.id}`)}
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Motion>
  );
}
