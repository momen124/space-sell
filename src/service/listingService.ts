import { Queryable } from "@/utils/decorators/queryable.decorator";
import { Api } from "./api";
import { Listing } from "@/types/Listing";

const mockData: Listing[] = [
  {
    id: "1",
    title: "Spaceship X2000",
    price: 999999,
    description: "A state-of-the-art spaceship with warp drive capabilities.",
    seller: "Elon Musk",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "2",
    title: "Moon Rover",
    price: 50000,
    description: "Explore the lunar surface with this robust moon rover.",
    seller: "NASA",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    title: "Space Suit",
    price: 25000,
    description: "Advanced space suit for extraterrestrial missions.",
    seller: "SpaceX",
    image: "/placeholder.svg?height=400&width=600",
  },
];

class ListingService extends Api {
  async getListings(): Promise<Listing[]> {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return mockData;
    } catch (error) {
      throw error;
    }
  }

  async createListing(listingData: Listing): Promise<Listing> {
    try {
      const response = await this.api.post("/listings", listingData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}


const listingService = new ListingService();
export { listingService, ListingService };