'use client'
// Import necessary libraries and components
import Image from 'next/image';
import Header from '../app/header/Page';
import data from '../app/data/data';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the skeleton initially
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 3000);

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <div>
        <Header />
        <div className="grid gap-8 m-4 md:grid-cols-3">
          {data.map(item => (
            showSkeleton ? (
          // eslint-disable-next-line react/jsx-key
          <Card className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Skeleton className="w-12 h-12 rounded-full" />
              <Skeleton className="h-6 flex-grow" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 flex-grow mt-4" />
              <Skeleton className="h-4 flex-grow mt-4" />
              <Skeleton className="h-4 w-1/2 mt-4" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-28" />
            </CardFooter>
          </Card>
          ) : (
          <Card
            key={item.id}
            className="flex flex-col justify-between font-bold"
            style={{ backgroundColor: '#C9F5CB', color: '#333333' }}
          >
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage
                  src={item.image}
                  alt="image"
                  width={50}
                  height={50}
                />
                <AvatarFallback>Image</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button style={{ backgroundColor: '#004080' }}>
                <Link href={item.link} target='_blank'>Know more</Link>
              </Button>
            </CardFooter>
          </Card>
          )
          ))}
        </div>
      </div>
    </main>
  );
}
