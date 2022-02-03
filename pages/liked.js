import { SupervisorAccount } from "@mui/icons-material";
import { Box, Pagination, TextField } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ItemUser from "../components/item_user";
import BaseLayout from "../layout/base_layout";
import { store } from '../store/global_state';

export default function Favorite() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);
  const [selectedPage, setSelectedPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);


  useEffect(() => {
    let listFavorites = store.getState().favorites
    setTotal(listFavorites.length)
    listFavorites = listFavorites.slice(0, 12)
    setFavorites(listFavorites)
  }, [])

  useEffect(() => {
    updatePageRows()
  }, [selectedPage])

  store.subscribe(() => {
    const isDarkMode = store.getState().dark_mode
    setIsDarkMode(isDarkMode)

    updatePageRows()
  })

  const updatePageRows = () => {
    const listFavorites = store.getState().favorites
    setTotal(listFavorites.length)
    const from = (selectedPage - 1) * 12
    const to = from + 12
    const tmpList = listFavorites.slice(from, to)
    setFavorites(tmpList)
  }

  return (
    <BaseLayout title="Favorite">
      <div className="flex flex-1 justify-center w-full h-full flex-col content-start">
        <div className="flex flex-1 flex-col">
          {favorites.length > 0 ? (
            <Box overflow="auto" flex={1} flexDirection="column" display="flex" p={2}>
              <div className={'flex flex-1 flex-col p-4 ' + (isDarkMode ? 'text-neutral-50' : '')}>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                  {
                    favorites.map((item, index) => {
                      return (
                        <ItemUser key={index} {...item} isDarkMode={isDarkMode} />
                      )
                    })
                  }
                </div>
                <Pagination count={total / 12 || 0} variant="outlined"
                  onChange={(event, page) => {
                    setSelectedPage(page)
                    console.log('Favorite page changed to ' + page)
                  }}
                  className="self-center my-8" />
              </div>
            </Box>
          ) : (
            <p className={"w-1/2 text-center self-center pt-40 " + (isDarkMode ? 'text-neutral-50' : '')}>
              <SupervisorAccount fontSize="large" /> <br /> Once you like people, you&apos;ll see them here.
            </p>
          )}
        </div>
      </div>
    </BaseLayout>
  )
}
