
import { Motion } from '@/components/Motion';
import { Store, Home, Clock, MapPin, AlertCircle, Heart } from 'lucide-react';

export function Features() {
  const providerFeatures = [
    {
      title: 'Easy Listing',
      description: 'List excess food in seconds with our intuitive interface',
      icon: <Clock className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Location-Based Matching',
      description: 'Connect with nearby organizations to minimize transportation time',
      icon: <MapPin className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Urgent Notifications',
      description: 'Flag time-sensitive items for priority matching',
      icon: <AlertCircle className="h-10 w-10 text-primary" />,
    },
  ];

  const recipientFeatures = [
    {
      title: 'Real-time Availability',
      description: 'Browse available donations in your area as they are listed',
      icon: <Clock className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Specific Needs',
      description: 'Set preferences for the types of food your organization needs most',
      icon: <Heart className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Pickup Coordination',
      description: 'Easily arrange pickup or delivery with food providers',
      icon: <MapPin className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <Motion type="slide-up">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium transition-colors bg-muted/50 mb-6">
                Platform Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tailored For Both Sides</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform provides specialized features for both food providers and recipients
              </p>
            </div>
          </div>
        </Motion>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <Motion type="slide-up" delay={0.1}>
            <div className="relative rounded-xl border bg-background p-6 shadow-sm">
              <div className="absolute top-0 right-0 h-20 w-20 translate-x-1/2 -translate-y-1/2 rounded-full border bg-background p-4 shadow-sm">
                <Store className="h-full w-full text-primary" />
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-6">For Food Providers</h3>
                <div className="space-y-6">
                  {providerFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="mt-1 text-primary">{feature.icon}</div>
                      <div>
                        <h4 className="font-medium">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Motion>

          <Motion type="slide-up" delay={0.2}>
            <div className="relative rounded-xl border bg-background p-6 shadow-sm">
              <div className="absolute top-0 right-0 h-20 w-20 translate-x-1/2 -translate-y-1/2 rounded-full border bg-background p-4 shadow-sm">
                <Home className="h-full w-full text-primary" />
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-6">For Food Recipients</h3>
                <div className="space-y-6">
                  {recipientFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="mt-1 text-primary">{feature.icon}</div>
                      <div>
                        <h4 className="font-medium">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
