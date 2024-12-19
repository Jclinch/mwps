"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LucideIcon } from "lucide-react";

interface PracticeAreaCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
 
}

export function PracticeAreaCard({
  title,
  description,
  icon: Icon,
  
}: PracticeAreaCardProps) {
  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-amber-50 p-3 rounded-lg group-hover:bg-amber-100 transition-colors">
          <Icon className="w-8 h-8 text-amber-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-slate-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="border-t pt-4">
        <div className="flex items-center gap-3">
          
          
        </div>
      </div>
    </Card>
  );
}