
import { Motion } from '@/components/Motion';
import { Store, Search, Truck, Check } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      title: 'Businesses List Excess Food',
      description: 'Restaurants and grocery stores easily list their excess food items with just a few taps.',
      icon: <Store className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Real-time Matching',
      description: 'Our system quickly identifies the best matches based on location, quantity, and time sensitivity.',
      icon: <Search className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Efficient Pickup & Delivery',
      description: 'Shelters and food banks can arrange pickup or receive deliveries from the food providers.',
      icon: <Truck className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Reducing Waste, Helping Communities',
      description: 'Track your impact as you help reduce food waste and support those in need.',
      icon: <Check className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Motion type="slide-up">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium transition-colors bg-muted/50 mb-6">
                How It Works
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple Process, Powerful Impact</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our streamlined platform makes it easy to connect surplus food with those who need it most
              </p>
            </div>
          </Motion>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {steps.map((step, index) => (
              <Motion key={index} type="slide-up" delay={0.1 * (index + 1)}>
                <div className="relative group flex flex-col items-center bg-background border rounded-xl p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="absolute -top-6 rounded-full border bg-background p-2 shadow-sm">
                    {step.icon}
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Motion>
            ))}
          </div>

          <div className="w-full h-px bg-border my-12" />

          <Motion type="slide-up">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-4xl font-bold text-primary">1,200+</div>
              <div className="text-4xl font-bold text-primary">10k+</div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center mt-2">
              <div className="text-muted-foreground">Participating Businesses</div>
              <div className="text-muted-foreground">Food Banks & Shelters</div>
              <div className="text-muted-foreground">Meals Delivered</div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
