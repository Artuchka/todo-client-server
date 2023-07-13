import { TaskList } from "../../features"
import { add } from "date-fns"

export const loremTasks: TaskList = [
  {
    id: "new id1",
    title: "title 1",
    metadata: {
      description: "i have prior = 0; deadline = -1",
      priority: 0,
      done: false,
      deadline: add(new Date(), {days: -1}).toISOString(),
      createdAt: add(new Date(), {days: -1}).toISOString(),
    },
  },
  {
    id: "new id2",
    title: "title 2",
    metadata: {
      description: "prior = 3; deadline = -2",
      priority: 3,
      done: true,
      deadline: add(new Date(), {days: -2}).toISOString(),
      createdAt: add(new Date(), {days: -1}).toISOString(),
    },
  },
  {
    id: "new id3",
    title: "title 3",
    metadata: {
      description: "prior = 2; deadline = -3",
      priority: 2,
      done: false,
      deadline: add(new Date(), {days: -3}).toISOString(),
      createdAt: add(new Date(), {days: -1}).toISOString(),
    },
  },
  {
    id: "new id4",
    title: "title 3",
    metadata: {
      description: "prior = 2; deadline = -4",
      priority: 2,
      done: false,
      deadline: add(new Date(), {days: -4}).toISOString(),
      createdAt: add(new Date(), {days: -1}).toISOString(),
    },
  },
  {
    id: "new id5",
    title: "title 3",
    metadata: {
      description: "prior = 2; deadline = +1",
      priority: 2,
      done: false,
      deadline: add(new Date(), {days: 1}).toISOString(),
      createdAt: add(new Date(), {days: -1}).toISOString(),
    },
  },
]
