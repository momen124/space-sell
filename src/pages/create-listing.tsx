import CreateListingForm from '@/forms/CreateListingForm'

export default function CreateListingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Create a New Listing</h1>
      <div className="max-w-md mx-auto">
        <CreateListingForm />
      </div>
    </div>
  )
}
