
import { Link } from 'react-router-dom';
import { Motion } from '@/components/Motion';

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <Motion type="slide-up">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  FoodBridge
                </span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Connecting excess food with those who need it most, reducing waste and supporting communities.
              </p>
            </div>
            <nav>
              <h3 className="text-sm font-medium">Platform</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/browse" className="text-muted-foreground hover:text-foreground transition-colors">
                    Browse Food
                  </Link>
                </li>
              </ul>
            </nav>
            <nav>
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Partners
                  </a>
                </li>
              </ul>
            </nav>
            <nav>
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} FoodBridge. All rights reserved.
          </div>
        </div>
      </Motion>
    </footer>
  );
}
