import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentCampaigns = [
  {
    name: "Summer Collection Launch",
    email: "fashion_brand@example.com",
    amount: "$12,345",
  },
  {
    name: "Tech Gadget Promo",
    email: "gadget_store@example.com",
    amount: "$8,765",
  },
  {
    name: "Fitness Challenge",
    email: "gym_partner@example.com",
    amount: "$5,432",
  },
  {
    name: "Food Delivery App",
    email: "food_delivery@example.com",
    amount: "$9,876",
  },
  {
    name: "Travel Vlog Series",
    email: "travel_agency@example.com",
    amount: "$7,654",
  },
]

export function RecentCampaigns() {
  return (
    <div className="space-y-8">
      {recentCampaigns.map((campaign) => (
        <div key={campaign.name} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`https://avatar.vercel.sh/${campaign.name}.png`} alt={campaign.name} />
            <AvatarFallback>{campaign.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{campaign.name}</p>
            <p className="text-sm text-muted-foreground">{campaign.email}</p>
          </div>
          <div className="ml-auto font-medium">{campaign.amount}</div>
        </div>
      ))}
    </div>
  )
}

