"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle } from "lucide-react"
import { useUser } from "@clerk/nextjs"

const campaigns = [
  {
    id: 1,
    name: "Summer Collection Launch",
    status: "Active",
    budget: "$10,000",
    spent: "$5,678",
    engagement: "4.5%",
    startDate: "2023-06-01",
    endDate: "2023-08-31",
  },
  {
    id: 2,
    name: "Back to School Promo",
    status: "Scheduled",
    budget: "$8,000",
    spent: "$0",
    engagement: "N/A",
    startDate: "2023-08-15",
    endDate: "2023-09-15",
  },
  {
    id: 3,
    name: "Holiday Special",
    status: "Draft",
    budget: "$15,000",
    spent: "$0",
    engagement: "N/A",
    startDate: "2023-11-25",
    endDate: "2023-12-31",
  },
  {
    id: 4,
    name: "Spring Fashion Week",
    status: "Completed",
    budget: "$12,000",
    spent: "$11,987",
    engagement: "5.2%",
    startDate: "2023-03-01",
    endDate: "2023-03-31",
  },
  {
    id: 5,
    name: "Tech Gadget Launch",
    status: "Active",
    budget: "$20,000",
    spent: "$8,765",
    engagement: "3.8%",
    startDate: "2023-07-15",
    endDate: "2023-09-15",
  },
]

export default function CampaignsPage() {
  const { user } = useUser()

  if (!user) return null // or a loading state

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Campaigns</h2>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> New Campaign
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Spent</TableHead>
              <TableHead>Engagement</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell>{campaign.status}</TableCell>
                <TableCell>{campaign.budget}</TableCell>
                <TableCell>{campaign.spent}</TableCell>
                <TableCell>{campaign.engagement}</TableCell>
                <TableCell>{campaign.startDate}</TableCell>
                <TableCell>{campaign.endDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

