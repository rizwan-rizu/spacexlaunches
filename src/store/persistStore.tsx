import { getAllLauches } from "../dashboard/launches/api"
import { getAllRockets } from "../dashboard/rockets/api"

export const persistStore = async (
	rocket: { [key: string]: any },
	sidebar: { [key: string]: any },
	launch: { [key: string]: any },
) => {
	getAllRockets(false, rocket.setRockets)
	getAllLauches(false, launch.setLaunches)
	sidebar.setToggle(false)
}

