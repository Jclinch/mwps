import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  image: string;
}

export function TestimonialCard({ content, author, role, image }: TestimonialCardProps) {
  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex-1">
        <p className="text-gray-600 italic mb-6">{content}</p>
      </div>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={image} alt={author} />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-slate-900">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </Card>
  );
}