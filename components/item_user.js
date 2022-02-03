import { Favorite, FavoriteBorder, FavoriteOutlined } from "@mui/icons-material";
import { Card, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { checkIsFavorite } from "../services/favorites_services";
import { countUserFollowers, countUserFollowing } from "../services/user_services";
import { addFavorite, removeFavorite, store } from "../store/global_state";

export default function ItemUser(props) {
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter()

  useEffect(() => {
    countUserFollowers(setFollowers, props)
    countUserFollowing(setFollowing, props)
    console.log('keyword:' + JSON.stringify(props))
    const listFavorites = store.getState().favorites
    const isFav = checkIsFavorite(props, listFavorites)
    setIsFavorite(isFav)
  })

  const handleFavotire = () => {
    const list = store.getState().favorites
    const isFav = checkIsFavorite(props, list)

    if (isFav) {
      store.dispatch(removeFavorite(props))
    } else {
      store.dispatch(addFavorite(props))
    }

    setIsFavorite(!isFav)
  }

  store.subscribe(() => {
    console.log('ItemUser store.subscribe ::: ' + JSON.stringify(store.getState()))
  })

  return (
    <Card className="flex flex-row content-start" elevation={3}>
      <div className="flex p-2 w-1/3">
        <Image alt="user avatar" src={props.avatar_url || "/"} width={64} height={64} 
          objectFit="cover"
          className="cursor-pointer"
          onClick={() => router.push({
            pathname: '/users/[username]',
            query: { username: props.login },
          })} />
      </div>
      <div className="flex flex-1 pl-2 pt-1 flex-row justify-start w-2/3">
        <div className="flex flex-col w-4/5">
          <div className={"flex grow-0 text-center text-sm font-light overflow-hidden " + (props.isDarkMode ? 'text-neutral-50' : '')}>
            <b className="font-bold">{props.keyword || ''}</b>{props.login.replace(props.keyword, '')}
          </div>
          <Typography variant="body1" className="text-xs font-thin" >
            {(followers || '?') + ' followers'}
          </Typography>
          <Typography variant="body1" className="text-xs font-thin">
            {(following || '?') + ' following'}
          </Typography>
        </div>

        <div className="flex grow justify-end w-1/5 ">
          <IconButton className="h-6 w-6 pr-2"
            onClick={() => handleFavotire(props)}>
            {
              isFavorite ? <Favorite className="text-red-700 w-4" /> : <FavoriteBorder className="text-red-700 w-4" />
            }
          </IconButton>
        </div>
      </div>
    </Card>
  )
}