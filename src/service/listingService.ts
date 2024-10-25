import { axiosInternal } from "@/config/axios";
import { CreateListingSchemaType } from "@/schema/createListingSchema";
import { Listing } from "@/types/Listing";
import { Queryable } from "@/utils/decorators/queryable.decorator";
import { Api } from "./api";

class ListingService extends Api {
  @Queryable("user", [])
  async getListings(_options?: {
    category?: string | null;
    sort?: string | null;
    price?: string | null;
    isOnSale?: boolean | null;
    isFeatured?: boolean | null;
  }): Promise<{ data: Listing[] }> {
    const { sort, ...options } = _options ?? {};
    try {
      const filters = Object.entries(options ?? {}).reduce(
        (acc, [key, value]) => {
          acc[`filter[${key}]`] = value;
          return acc;
        },
        {} as Record<string, any>
      );

      const response = await axiosInternal.get("/listings", {
        params: { sort, ...filters },
      });

      return response.data;
    } catch (error) {
      throw error; // Consider logging the error here for better debugging
    }
  }

  async createListing(listingData: CreateListingSchemaType): Promise<Listing> {
    try {
      const response = await axiosInternal.post("/listings", listingData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  @Queryable("user", [])
  async getListingDetails(id: string): Promise<{ data: Listing }> {
    try {
      const response = await axiosInternal.get(`/listings/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const listingService = new ListingService();
export { listingService, ListingService };
