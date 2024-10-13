import { Queryable } from "@/utils/decorators/queryable.decorator";
import { Api } from "./api";

const mockData = [
  {
    id: 1,
    title: "Spaceship X2000",
    price: "$999,999",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "Moon Rover",
    price: "$50,000",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "Space Suit",
    price: "$25,000",
    image: "/placeholder.svg?height=100&width=100",
  },
];

class ListingService extends Api {
  @Queryable("user", [])
  async getListings() {
    try {
      // const response = await this.api.get("/listings");

      await new Promise(resolve => setTimeout(resolve, 2000)); // wait for 1 sec to simulate real api call
      return mockData;
    } catch (error) {
      throw error;
    }
  }

  async createListing(listingData: unknown) {
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
