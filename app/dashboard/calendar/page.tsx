"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUser } from "@clerk/nextjs"

const demoEvents = [
  { id: 1, title: "Campaign Launch", date: new Date(2025, 0, 15) },
  { id: 2, title: "Creator Meetup", date: new Date(2025, 0, 22) },
  { id: 3, title: "Content Review", date: new Date(2025, 1, 5) },
]

export default function CalendarPage() {
  const { user } = useUser()

  if (!user) return null // or a loading state

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [events, setEvents] = useState(demoEvents)
  const [newEvent, setNewEvent] = useState({ title: "", date: new Date() })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddEvent = () => {
    setEvents([...events, { id: events.length + 1, ...newEvent }])
    setNewEvent({ title: "", date: new Date() })
    setIsDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Content Calendar</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add Event</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Event</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={newEvent.date.toISOString().split("T")[0]}
                  onChange={(e) => setNewEvent({ ...newEvent, date: new Date(e.target.value) })}
                  className="col-span-3"
                />
              </div>
            </div>
            <Button onClick={handleAddEvent}>Save Event</Button>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md border" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {events.map((event) => (
                <li key={event.id} className="flex justify-between items-center">
                  <span>{event.title}</span>
                  <span className="text-sm text-muted-foreground">{event.date.toLocaleDateString()}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

