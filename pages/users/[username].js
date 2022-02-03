import { Apartment, Home, SupervisorAccount } from "@mui/icons-material";
import { Box, Card, Pagination, TabPanelUnstyled, TextField } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import ItemUser from "../../components/item_user";
import BaseLayout from "../../layout/base_layout";
import DetailsLayout from "../../layout/details_layout";
import { store } from '../../store/global_state';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRouter } from "next/router";
import { TabPanel } from "../../components/tab_panel";
import { getUserDetails, getUserFollowers, getUserFollowing, getUserRepos } from "../../services/user_services";

const Details = () => {
  const router = useRouter();
  console.log('Details router.query = ', router.query)
  const username = router.query.username || null

  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);
  const [selectedPage, setSelectedPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [user, setUser] = React.useState(null);
  const [tabValue, setTabValue] = React.useState(0);
  const [repos, setRepos] = React.useState([]);
  const [followers, setFollowers] = React.useState([]);
  const [following, setFollowing] = React.useState([]);

  useEffect(() => {
    let listFavorites = store.getState().favorites
    setTotal(listFavorites.length)
    listFavorites = listFavorites.slice(0, 12)
    setFavorites(listFavorites)
  }, [])

  useEffect(() => {
    if (username) {
      getUserDetails(username, setUser)
    }
  }, [router.query.username])

  useEffect(() => {
    if (user) {
      getUserRepos(user, setRepos)
      getUserFollowers(user, setFollowers)
      getUserFollowing(user, setFollowing)  
    }
  }, [user])

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue)
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  store.subscribe(() => {
    const tmpMode = store.getState().dark_mode
    setIsDarkMode(tmpMode)
  })

  return (
    <DetailsLayout title="Favorite" icon={() => <Home />}>
      <div className="flex flex-1 justify-center w-full h-full flex-col content-start">
        <div className="flex flex-1 flex-col">
          {user ? (
            <Box overflow="auto" flex={1} flexDirection="column" display="flex" p={2} className={`flex flex-col h-screen ${isDarkMode ? 'text-white' : 'text-gray-800' }`}>
              <div className="flex justify-center ">
                <Image src={user.avatar_url} width={145} height={145} className="rounded-full" />
              </div>
              <div className="text-center text-lg font-bold mt-4">{user.name}</div>
              <div className="text-center text-md font-light">{user.login}</div>
              <div className="text-center text-sm font-light mt-2 mb-4"><Apartment className="text-sm" /> {user.location}</div>
              <Tabs value={tabValue} onChange={handleChangeTab} variant="fullWidth">
                <Tab label="Repositories" {...a11yProps(0)} />
                <Tab label="Followers" {...a11yProps(1)} />
                <Tab label="Following" {...a11yProps(2)} />
              </Tabs>
              <TabPanel value={tabValue} index={0}>
                {
                  repos.length > 0 ? (
                    <UserRepository repoList={repos} />
                  ) : (
                    <div className="text-center text-md font-light">No public repository</div>
                  )
                }
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                {
                  followers.length > 0 ? (
                    <UserFollowers data={followers} />
                  ) : (
                    <div className="text-center text-md font-light">No follower</div>
                  )
                }
              </TabPanel>
              <TabPanel value={tabValue} index={2}>
                {
                  following.length > 0 ? (
                    <UserFollowing data={following} />
                  ) : (
                    <div className="text-center text-md font-light">No following list</div>
                  )
                }
              </TabPanel>
            </Box>
          ) : (
            <Box className="flex flex-1 justify-center">
              <p className={"w-1/2 text-center self-center " + (isDarkMode ? 'text-neutral-50' : '')}>
                User not found
              </p>
            </Box>
          )}
        </div>
      </div>
    </DetailsLayout>
  )
}

const UserRepository = ({ repoList }) => (
  <Box className="flex-1 grid grid-cols-2 gap-4 h-full min-h-screen" >
    {
      repoList.map((repo, index) => {
        return (
          <Card className="flex-col items-start p-2" key={index} elevation={3} opacity>
            <div className="flex-col items-start justify-start">
              <div className="text-left text-sm font-bold">{repo.name}</div>
              <div className="text-left text-sm font-light">{repo.stargazers_count} star</div>
              <div className="text-left text-sm font-light">{repo.forks_count} forks</div>
            </div>
          </Card>
        )
      })
    }
  </Box>
)

const UserFollowers = ({ data }) => (
  <Box className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4" >
    {
      data.map((item, index) => {
        return (
          <ItemUser key={index} {...item} />
        )
      })
    }
  </Box>
)

const UserFollowing = ({ data }) => (
  <Box className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4" >
    {
      data.map((item, index) => {
        console.log('item = ' + JSON.stringify(item))
        return (
          <ItemUser key={index} {...item} />
        )
      })
    }
  </Box>
)

export default Details