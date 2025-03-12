
import { Button } from '@/components/ui/button';
import { ArrowRight, Store, Home, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Motion } from '@/components/Motion';

export function Hero() {
  return (
    <section className="min-h-screen pt-20 flex flex-col justify-center overflow-hidden relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.1),transparent)]" />
      
      <div className="container max-w-6xl px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Motion type="slide-up" delay={0.2}>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block">
                <div className="inline-flex items-center rounded-full border px-2.5 py-1 text-sm font-medium transition-colors bg-muted/50 focus:outline-none mb-6">
                  <span className="text-xs font-medium">Bridging the food gap together</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text">
                  <span>Connect</span>{' '}
                  <span className="relative inline-block">
                    <span className="absolute inset-x-0 bottom-0 h-3 bg-primary/20"></span>
                    <span className="relative">excess food</span>
                  </span>{' '}
                  <span>to those who need it</span>
                </h1>
                
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  FoodBridge connects restaurants and grocery stores with surplus food to local shelters and food banks, reducing waste and helping communities.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                <Button asChild size="lg" className="group">
                  <Link to="/dashboard">
                    Get Started 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/browse">Browse Available Food</Link>
                </Button>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Store className="h-4 w-4 text-primary" />
                  <span>For Food Providers</span>
                </div>
                <div className="hidden sm:block h-1 w-1 rounded-full bg-border" />
                <div className="flex items-center gap-1">
                  <Home className="h-4 w-4 text-primary" />
                  <span>For Food Recipients</span>
                </div>
                <div className="hidden sm:block h-1 w-1 rounded-full bg-border" />
                <div className="flex items-center gap-1">
                  <LinkIcon className="h-4 w-4 text-primary" />
                  <span>Real-time Connections</span>
                </div>
              </div>
            </div>
          </Motion>
          
          <Motion type="slide-up" delay={0.4}>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square overflow-hidden rounded-xl border bg-background p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50" />
                <img
                  src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Food donation"
                  width="550"
                  height="550"
                  className="aspect-square rounded-lg object-cover"
                />
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
