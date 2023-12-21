import { getAllLaunchPads } from "../dashboard/launchPads/api"
import { getAllLaunches } from "../dashboard/launches/api"
import { getAllRockets } from "../dashboard/rockets/api"

export const persistStore = async (
	rocket: { [key: string]: any },
	sidebar: { [key: string]: any },
	launch: { [key: string]: any },
	launchPad: { [key: string]: any },
) => {
	getAllLaunches(false, launch.setLaunches)
	getAllRockets(false, rocket.setRockets)
	getAllLaunchPads(false, launchPad.setLaunchPads)
	sidebar.setToggle(false)
}

