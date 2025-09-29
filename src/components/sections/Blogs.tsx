import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import blogData from "@/lib/blogs.json";

type Blog = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
};

const blogs: Blog[] = blogData;

export function Blogs() {
  return (
    <section id="blogs" className="py-20 lg:py-32">
      <Container>
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
            From the Field
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Insights, stories, and news from the world of fresh produce.
          </p>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => {
            const blogImage = PlaceHolderImages.find(p => p.id === blog.image);
            return (
              <AnimateOnScroll key={blog.id} delay={`delay-${index * 150}`}>
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="flex h-full flex-col p-0">
                    {blogImage && (
                      <div className="relative h-56 w-full">
                        <Image
                          src={blogImage.imageUrl}
                          alt={blogImage.description}
                          data-ai-hint={blogImage.imageHint}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-headline text-xl font-semibold text-foreground">
                        {blog.title}
                      </h3>
                      <p className="mt-3 flex-1 text-muted-foreground">
                        {blog.excerpt}
                      </p>
                      <Button variant="link" className="mt-4 p-0 self-start">
                        Read More &rarr;
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
