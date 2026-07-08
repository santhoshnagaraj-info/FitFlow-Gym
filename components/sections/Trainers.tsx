'use client';

import Image from "next/image"; // Import the Image component
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users } from "lucide-react";

const trainers = [
  {
    name: "Alex Rivera",
    role: "Head Strength Coach",
    specialty: "Powerlifting & HIIT",
    rating: 4.9,
    followers: "2.4k",
    badge: "Certified",
    // Added /images/ to the path
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEh1rwQf5BcVbUCeZZJZ1v5sJvBNSrnnL2CLb7w-Viw&s=10" 
  },
  {
    name: "Priya Sharma",
    role: "Yoga & Mobility Expert",
    specialty: "Yoga & Recovery",
    rating: 4.8,
    followers: "1.8k",
    badge: "Certified",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtzauemt4w2aJSMJP_klq8tAEVN-YKWTqvwaUVFDJOw&s=10" 
  },
  {
    name: "Rahul Menon",
    role: "Functional Training Coach",
    specialty: "CrossFit & Mobility",
    rating: 4.9,
    followers: "3.1k",
    badge: "Pro",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOhCMfjU0kHClxtc9cUZFlbdt5_M8dOw_znaaw3fFPw&s=10"
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">OUR TEAM</Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Meet Our Expert Trainers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Certified professionals dedicated to helping you achieve your fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 transition-colors">
           {trainers.map((trainer, index) => (
            <Card key={index} className="overflow-hidden group  p-5 bg-zinc-100 hover:bg-zinc-200-scale ">
             <div className="aspect-square bg-muted relative rounded-lg ">
            {/* FIX: Changed <image> to <Image /> with capital 'I' */}
            <Image 
              src={trainer.url} 
              alt={trainer.name}
              fill // This makes it fill the parent div
            
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized
              priority
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
            
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h3 className="font-semibold text-xl">{trainer.name}</h3>
              <p className="text-sm opacity-90">{trainer.role}</p>
            </div>
        </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{trainer.specialty}</Badge>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-medium">{trainer.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{trainer.followers}</span>
                  </div>
                  <Badge variant="secondary">{trainer.badge}</Badge>
                </div>

                <button className="mt-6 w-full py-2 text-sm font-medium border rounded-md hover:bg-primary hover:text-primary-foreground transition-all">
                  View Profile
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;