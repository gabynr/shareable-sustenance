
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ListingCard } from '@/components/ListingCard';
import { MOCK_LISTINGS, MOCK_USERS, UserRole } from '@/types';
import { Link } from 'react-router-dom';
import { PageTransition } from '@/components/Motion';
import { Plus, Store, Home, Package, Clock, CheckCircle2 } from 'lucide-react';

export default function Dashboard() {
  const [userRole, setUserRole] = useState<UserRole>('provider');
  const currentUser = MOCK_USERS.find(user => user.role === userRole) || MOCK_USERS[0];
  
  // Filter listings based on user role
  const userListings = userRole === 'provider' 
    ? MOCK_LISTINGS.filter(listing => listing.providerId === 'p1')
    : MOCK_LISTINGS;

  const stats = [
    {
      title: userRole === 'provider' ? 'Active Listings' : 'Available Listings',
      value: userRole === 'provider' ? '3' : '5',
      description: userRole === 'provider' ? 'Current food items listed' : 'Food items available for pickup',
      icon: <Package className="h-4 w-4" />,
    },
    {
      title: 'This Month',
      value: '12',
      description: userRole === 'provider' ? 'Items donated this month' : 'Items received this month',
      icon: <Clock className="h-4 w-4" />,
    },
    {
      title: 'Total Impact',
      value: '43',
      description: userRole === 'provider' ? 'Total items donated' : 'Total items received',
      icon: <CheckCircle2 className="h-4 w-4" />,
    },
  ];

  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 py-20">
          <div className="container px-4 md:px-6 pt-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">
                  {userRole === 'provider' 
                    ? 'Manage your food donations and track your impact' 
                    : 'Browse available food and manage your pickups'}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Tabs defaultValue={userRole} className="w-full sm:w-[300px]" onValueChange={(value) => setUserRole(value as UserRole)}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="provider" className="flex items-center gap-1">
                      <Store className="h-4 w-4" />
                      <span>Provider</span>
                    </TabsTrigger>
                    <TabsTrigger value="recipient" className="flex items-center gap-1">
                      <Home className="h-4 w-4" />
                      <span>Recipient</span>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                
                {userRole === 'provider' && (
                  <Button asChild className="sm:w-auto">
                    <Link to="/food-listing/new">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Listing
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-8">
              {stats.map((stat, i) => (
                <Card key={i}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">
                  {userRole === 'provider' ? 'Your Listings' : 'Available Food'}
                </h2>
                {userRole === 'recipient' && (
                  <Button variant="outline" asChild>
                    <Link to="/browse">View All</Link>
                  </Button>
                )}
              </div>
              
              {userListings.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {userListings.slice(0, 3).map((listing, index) => (
                    <ListingCard key={listing.id} listing={listing} index={index} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center h-40">
                    <p className="text-muted-foreground mb-4">No listings available</p>
                    {userRole === 'provider' && (
                      <Button asChild>
                        <Link to="/food-listing/new">
                          <Plus className="mr-2 h-4 w-4" />
                          Add New Listing
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
