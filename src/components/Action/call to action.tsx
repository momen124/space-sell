// src/components/CallToAction.tsx

import Link from 'next/link';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="text-center mt-8">
      <Button asChild className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
        <Link href="/create-listing">Create a Listing</Link>
      </Button>
    </div>
  );
};

export default CallToAction;
